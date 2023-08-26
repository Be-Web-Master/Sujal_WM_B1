const addColumnIn = document.getElementById("addColumn");
const addRowIn = document.getElementById("addRow");
const rowData = document.getElementById("rowData");
const columnBtn = document.getElementById("columnBtn");
const rowBtn = document.getElementById("rowBtn");
let columnCount = 1;

const tableObject = JSON.parse(localStorage.getItem("tableData"))
console.log({ tableObject });
//  {
//     header: [{ elementType: "th", colummName: "A", order: 1, sort: undefined },
//     { elementType: "th", colummName: "B", order: 2, sort: undefined },
//     { elementType: "th", colummName: "C", order: 3, sort: undefined }],
//     body: [{
//         elementType: "tr", rowOrder: 1,
//         columnElems: [{ elementType: "td", columnName: "input", rowOrder: 1, value: 0 },
//         { elementType: "td", columnName: "input", rowOrder: 2, value: 10 },
//         { elementType: "td", columnName: "input ", rowOrder: 1, value: 0 }
//         ]
//     }, {
//         elementType: "tr", rowOrder: 1,
//         columnElems: [{ elementType: "td", columnName: "input ", rowOrder: 1, value: 0 },
//         { elementType: "td", columnName: "input ", rowOrder: 2, value: 10 },
//         { elementType: "td", columnName: "input ", rowOrder: 1, value: 0 }
//         ]
//     }, {
//         elementType: "tr", rowOrder: 1,
//         columnElems: [{ elementType: "td", columnName: "input ", rowOrder: 1, value: 0 },
//         { elementType: "td", columnName: "input ", rowOrder: 2, value: 10 },
//         { elementType: "td", columnName: "input ", rowOrder: 1, value: 0 }
//         ]
//     }]
// }


// localStorage.setItem("tableData", JSON.stringify(tableObject))

function createTableUI() {
    clearTable();
    tableObject.header.forEach((elem) => {
        createColumnElementOnUI(elem);
    })
    tableObject.body.forEach((elem) => {
        createRowElementOnUI(elem);
    })
}
// createTableUI();

function clearTable() {
    addColumnIn.innerHTML = "";
    addRowIn.innerHTML = "";
}

function createInputElement() {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "Text");
    inputElement.setAttribute("placeholder", "Text");
    inputElement.style.padding = "15px";
    inputElement.style.margin = "10px";
    inputElement.style.fontSize = "20px";
    inputElement.style.borderStyle = "none";
    return inputElement;
}

function createColumnElementOnUI(elem) {
    const newColumn = document.createElement(elem.elementType);
    newColumn.append(elem.colummName);
    addColumnIn.append(newColumn);
}

function createRowElementOnUI(elem) {
    const newRow = document.createElement(elem.elementType);

    elem.columnElems.forEach((columnElem) => {
        const rowData = document.createElement(columnElem.elementType);
        const columnNameInObj = columnElem.columnName;
        rowData.append(columnNameInObj)
        newRow.append(rowData);
    })
    addRowIn.append(newRow)
}

function createColumnElement() {
    const newColumn = document.createElement("th");
    newColumn.append("column " + columnCount++)
    addColumnIn.append(newColumn);
    const countOfRow = addRowIn.children.length;
    for (let i = 0; i < countOfRow; i++) {
        const newRowtd = document.createElement("td");
        newRowtd.append(createInputElement());
        addRowIn.append(newRowtd);
        addRowIn.children[i].append(newRowtd);
    }
}

function createRowElement() {
    const newRow = document.createElement("tr");
    newRow.setAttribute("id", "rowData");
    const rowData = document.createElement("td");
    newRow.append(rowData);
    addRowIn.append(newRow);
    console.log({ newRow, rowData });
    const countOfColumn = newRow.children.length;
    console.log(countOfColumn);
    for (let i = 0; i < countOfColumn; i++) {
        let newRowtd = document.createElement("td");
        newRow.append(newRowtd);
        newRowtd.append(createInputElement());
        addRowIn.append(newRow);
    }
}

columnBtn.addEventListener("click", () => {
    createColumnElement();
})

rowBtn.addEventListener("click", () => {
    createRowElement();
})
