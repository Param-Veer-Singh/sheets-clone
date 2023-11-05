let columns = 26;
let rows = 100;
const header = document.querySelector(".header");
const serialNo = document.querySelector(".serialNo");
const mainContainer = document.querySelector(".main");


function createHeaderCells(){
    for(let i=0; i<=columns; i++){
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if(i !== 0){
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        header.appendChild(headerCell);
    }
}

function createSerialNoCells(){
    for(let i=1; i<=rows; i++){
        const cell = document.createElement("div");
        cell.className = "sNo-Cell cell";
        cell.innerText = i;
        serialNo.appendChild(cell);
    }
}

function createRow(rowNumber) {
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 1; i <= columns; i++) {
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        row.appendChild(cell);
        
        cell.id = String.fromCharCode(64 + i) + rowNumber;
        
        cell.addEventListener("focus",onCellFocus);
        cell.addEventListener("input", onFormChange);
    }
    mainContainer.appendChild(row);
}

function buildMainSection() {
    for (let i = 1; i <= rows; i++) {
        createRow(i);
    }
}

createHeaderCells();
createSerialNoCells();
buildMainSection();
