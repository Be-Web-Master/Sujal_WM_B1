const LOCAL_STORAGE_TABLE_KEY = 'tableStateData'

let tableState = { header: [], body: [] }

// { elementType: "", columnName: "", columnNumber: 0, sort: "" }HEADER OBJECT
// { elementType: "", rowNumber: 0, cellDetails: [] }   BODY OBJECT
// { elementType: "", columnNumber: "", rowNumber: 0, cellValue: 0 }  COLUMN DETAILS[] OBJECT

if (localStorage.getItem(LOCAL_STORAGE_TABLE_KEY)) {
    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY))
}
else {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

const addColumnIn = document.getElementById("addColumnIn");
const addRowIn = document.getElementById("addRowIn");
const rowData = document.getElementById("rowData");
const columnBtn = document.getElementById("columnBtn");
const rowBtn = document.getElementById("rowBtn");
const clearBtn = document.getElementById("clearBtn");

function updateTableData(tableState) {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
    createTableUI(tableState);
}


createTableUI(tableState);


function clearTable() {
    addColumnIn.innerHTML = "";
    addRowIn.innerHTML = "";
}

function createInputElement(cellType, value, id) {
    const elementType = cellType === 'headCell' ? 'input' : 'textarea';
    const inputElement = document.createElement(elementType);
    inputElement.value = value;
    inputElement.setAttribute('id', id);
    if (cellType === 'headCell') {
        inputElement.setAttribute('placeholder', 'Column Name');
    }
    else if (cellType === 'bodyCell') {
        inputElement.setAttribute('placeholder', 'cell');
    }
    inputElement.setAttribute('type', 'text');
    return inputElement;
}

function createTableUI(tableState) {
    clearTable();
    const { header, body } = tableState;
    header.forEach((elem) => {
        const newColumn = document.createElement(elem.elementType);
        const inputElement = createInputElement("headCell", '1', `header-0-${elem.columnNumber}`);
        inputElement.value = elem.columnName;
        newColumn.append(inputElement);
        addColumnIn.append(newColumn);

    })
    body.forEach((elem) => {
        const newRow = document.createElement(elem.elementType);
        elem.cellDetails.forEach((columnElem) => {
            const rowData = document.createElement(columnElem.elementType);
            const inputElement = createInputElement("bodyCell", "", `body-${columnElem.rowNumber}-${columnElem.columnNumber}`);
            inputElement.value=columnElem.cellValue;
            rowData.append(inputElement);
            newRow.append(rowData);
        })
        addRowIn.append(newRow)
    })
}


function addNewColumn() {
    const { header, body } = tableState;
    const columnObject = { elementType: "th", columnName: "", columnNumber: header.length, sort: "" };
    for (let i = 0; i < body.length; i++) {
        body[i].cellDetails.push({
            elementType:'td',
            columnNumber:columnObject.columnNumber,
            rowNumber:i,
            cellValue:""
        });
    }
    header.push(columnObject);
    updateTableData(tableState);
}

function addNewRow() {
    const { header, body } = tableState;
    const rowObject = { elementType: "tr", rowNumber: body.length, cellDetails: [] };
    
    body.push(rowObject);
    for (let i = 0; i < header.length; i++) {  
        const cellDetailObj = { elementType: "td", columnNumber: header[i].columnNumber, rowNumber: rowObject.rowNumber, cellValue: "" }
        rowObject.cellDetails.push(cellDetailObj);
    }
    updateTableData(tableState);
}


columnBtn.addEventListener("click", () => {
    addNewColumn();
})

rowBtn.addEventListener("click", () => {
    addNewRow();
})

addColumnIn.addEventListener("keyup", (event) => {
    const [isHeader, rowNumber, columnNumber] = event.target.id.split('-');
    tableState.header[columnNumber].columnName = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));

})

addRowIn.addEventListener("keyup", (event) => {
    const [isBody, rowNumber, columnNumber] = event.target.id.split('-');
    tableState.body[rowNumber].cellDetails[columnNumber].cellValue = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
})

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    clearTable();
})



