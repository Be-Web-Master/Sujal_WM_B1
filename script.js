const LOCAL_STORAGE_TABLE_KEY = "tableStateData";

const table = document.getElementById("table");
const tHead = document.getElementById("thead");
const tBody = document.getElementById("tbody");
const addRowButton = document.getElementById("addRowButton");
const addColumnButton = document.getElementById("addColumnButton");
const clearLocalData = document.getElementById("clearLocalData");
const sortForm = document.getElementById("sortForm");
const selectOption = document.querySelector(".columnsDropDown");
const draggable = document.querySelector(".draggable");
console.log(draggable);

let tableState = {
    header: [],
    body: [],
};

/**
 * when the page loads for first-time or when it's refreshed,
 * we check the localStorage if it has table data,
 */
document.addEventListener("DOMContentLoaded", syncUIWithLocalStorage);

sortForm.addEventListener("submit", sortTableByColumn);

addColumnButton.addEventListener("click", addNewColumn);

addRowButton.addEventListener("click", addNewRow);

clearLocalData.addEventListener("click", () => {
    localStorage.clear();
    clearTableUI();
    window.location.reload(); // refresh the UI
});

tBody.addEventListener("keyup", (event) => {
    const [rowNumber, columnNumber] = event.target.id.split("-"); // 2-3
    tableState.body[rowNumber].columnDetails[columnNumber].cellValue =
        event.target.value;
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
});

tHead.addEventListener("keyup", (event) => {
    if (event.target.type === "search") return;
    // this syntax is called object destructuring of array
    const { 1: columnNumber } = event.target.id.split("-"); // id = "0-3" => after .split => [0, 3]
    tableState.header[columnNumber].columnName = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
});

function createSortForm(element) {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("id", "ColumnNameList");
    optionElement.innerText = element.columnName;
    optionElement.value = element.columnName;
    selectOption.append(optionElement);
}

function updateTableDataInLocalStorage(tableStateData) {
    if (!tableStateData) return;
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableStateData));
    createTableUIFromLocalStorage();
}

function clearTableUI() {
    tHead.innerHTML = "";
    tBody.innerHTML = "";
    selectOption.innerHTML = "";
}

function getCellTextAreaElement(cellValue, cellAddress) {
    const textAreaElement = document.createElement("textarea");
    textAreaElement.value = cellValue;
    textAreaElement.setAttribute("id", cellAddress);
    textAreaElement.setAttribute("placeholder", `Cell ${cellAddress}`);
    textAreaElement.setAttribute("type", "text");
    textAreaElement.setAttribute("draggable", "true")
    textAreaElement.ondragstart = function (event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    return textAreaElement;
}

function getColumnNameInputElement(columnName, cellAddress) {
    const columnNameInputElement = document.createElement("input");
    columnNameInputElement.value = columnName;
    columnNameInputElement.setAttribute("id", cellAddress);
    columnNameInputElement.draggable = true;
    columnNameInputElement.ondragstart = function (event){
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    return columnNameInputElement;
}

function getColumnSearchInputElement(columnNumber) {
  const columnSearchInputElement = document.createElement("input");
  columnSearchInputElement.setAttribute("id", `search-${columnNumber}`);
  columnSearchInputElement.setAttribute("type", "search");
  columnSearchInputElement.onkeyup = function columnSearch(e) {
    const searchInput = e.target.value;
    const tableDataFromLocalStorage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)
    );
    tableState.body = tableDataFromLocalStorage.body.filter((rowObject) => {
      return rowObject.columnDetails[columnNumber].cellValue
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    updateTableBodyData(tableState.body);
  };
  return columnSearchInputElement;
}

function createTableUIFromLocalStorage() {
    clearTableUI();

    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
    tableState.header.forEach((element) => {
        createSortForm(element);
        const columnElement = document.createElement(element.elementType);
        columnElement.ondragover = function(event){
            event.preventDefault();
        }
        columnElement.ondrop = function (event){
            const droppedElemIdx = event.dataTransfer.getData('text/plain').split('-')[1];
            const dropZoneIdx = event.target.id.split('-')[1];
            let swapValue = tableState.header[droppedElemIdx].columnName;
            tableState.header[droppedElemIdx].columnName = tableState.header[dropZoneIdx].columnName;
            tableState.header[dropZoneIdx].columnName = swapValue;
            updateTableDataInLocalStorage(tableState);
        }
        const columnNameInputElement = getColumnNameInputElement(
            element.columnName,
            `0-${element.columnNumber}`
        );
        columnElement.append(columnNameInputElement);

        const columnSearchInputElement = getColumnSearchInputElement(
          element.columnNumber
        );
        columnElement.append(columnSearchInputElement);

        tHead.append(columnElement);
    });

    tableState.body.forEach((element) => {
        const rowElement = document.createElement(element.elementType);
        element.columnDetails.forEach((cellDetail) => {
            const tdElement = document.createElement(cellDetail.elementType);
            tdElement.ondragover = function (event) {
                event.preventDefault();
            }
            tdElement.ondrop = function (event) {
                const [droppedRowIdx, droppedColIdx] = event.dataTransfer.getData('text/plain').split('-');
                const [dropZoneRowIdx, dropZoneColIdx] = event.target.id.split('-');
                let swapValue = tableState.body[droppedRowIdx].columnDetails[droppedColIdx].cellValue;
                tableState.body[droppedRowIdx].columnDetails[droppedColIdx].cellValue = tableState.body[dropZoneRowIdx].columnDetails[dropZoneColIdx].cellValue;
                tableState.body[dropZoneRowIdx].columnDetails[dropZoneColIdx].cellValue = swapValue;
                updateTableDataInLocalStorage(tableState);
            }
            const textAreaElement = getCellTextAreaElement(
                cellDetail.cellValue,
                `${cellDetail.rowNumber}-${cellDetail.columnNumber}`
            );
            tdElement.append(textAreaElement);
            rowElement.append(tdElement);
        });
        tBody.append(rowElement);
    });
}

function addCellsInEachRowForNewColumn(columnNumber) {
    tableState.body.forEach((element, idx) => {
        const tdObject = {
            elementType: "td",
            columnNumber: columnNumber,
            rowNumber: idx,
            cellValue: `Cell ${idx} - ${columnNumber}`,
        };
        element.columnDetails.push(tdObject);
    });
}

function addNewColumn() {
    const headerObj = {
        elementType: "th",
        columnName: `Column ${tableState.header.length}`,
        columnNumber: tableState.header.length,
        sort: "",
    };
    tableState.header.push(headerObj);
    addCellsInEachRowForNewColumn(headerObj.columnNumber);
    updateTableDataInLocalStorage(tableState);
}

function addCellsInEachColumnForNewRow(bodyRowObject) {
    tableState.header.forEach((headerObj) => {
        bodyRowObject.columnDetails.push({
            elementType: "td",
            columnNumber: headerObj.columnNumber,
            rowNumber: bodyRowObject.rowNumber,
            cellValue: `Cell ${bodyRowObject.rowNumber} - ${headerObj.columnNumber}`,
        });
    });
    return bodyRowObject;
}

function addNewRow() {
    const bodyRow = {
        elementType: "tr",
        rowNumber: tableState.body.length,
        columnDetails: [],
    };
    tableState.body.push(addCellsInEachColumnForNewRow(bodyRow));
    updateTableDataInLocalStorage(tableState);
}

function syncUIWithLocalStorage() {
    if (!localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
    }
    createTableUIFromLocalStorage();
}

function sortTableByColumn(event) {
    event.preventDefault();
    const selectedColumnName = event.target.columnsDropdown.value;
    const sortingOrder = event.target.sort.value;

    const columnNumber = tableState.header.find(
        (headerObj) => headerObj.columnName === selectedColumnName
    ).columnNumber;

    tableState.body.sort((obj1, obj2) => {
        if (
            obj1.columnDetails[columnNumber].cellValue >
            obj2.columnDetails[columnNumber].cellValue
        ) {
            if (sortingOrder === "ascending") return 1;
            else return -1;
        } 
        else {
            if (sortingOrder === "ascending") return -1;
            else return 1;
        }
    });
    updateTableBodyData(tableState.body);
}

function updateTableBodyData(tableBodyData) {
    tableState.body = tableBodyData;
    tBody.innerHTML = "";
    tableState.body.forEach((element) => {
        const rowElement = document.createElement(element.elementType);
        element.columnDetails.forEach((cellDetail) => {
            const tdElement = document.createElement(cellDetail.elementType);
            const textAreaElement = getCellTextAreaElement(
                cellDetail.cellValue,
                `${cellDetail.rowNumber}-${cellDetail.columnNumber}`
            );
            tdElement.append(textAreaElement);
            rowElement.append(tdElement);
        });
        tBody.append(rowElement);
    });
}


function downloadCSV() {
    const csvFile = new Blob([tableState.header], { type: "text/csv" });
    const downloadLink = document.createElement("a");
    downloadLink.download = "table.csv";
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.click();
}
