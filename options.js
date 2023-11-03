const cellInfo = document.querySelector("#active-cell");

let activeElement = null;

function onCellFocus(event){
    const elementId = event.target.id;
    cellInfo.innerText = elementId;

    // activeElement = event.target;
}
function onFormChange(event){
    const elementId = event.target.id;
    cellInfo.innerText = elementId;

    activeElement = event.target;
}
