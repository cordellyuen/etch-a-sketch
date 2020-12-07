const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

const divGrid = [];

createCells(16);
function createCells(gridSize) {
    let total = (gridSize * gridSize);

    if(total !== 0) {
        const oldCells = document.querySelectorAll(".gridSquare");
        oldCells.forEach((cell) => container.removeChild(cell));
    }

    for(let i = 0; i < total; i++) {
        divGrid[i] = document.createElement("div");

        divGrid[i].classList.add("gridSquare");
    }

    for(let j = 0; j < total; j++) {
        container.appendChild(divGrid[j]);
    }

    const cells = document.querySelectorAll(".gridSquare");
    cells.forEach((cell) => cell.style.backgroundColor = "grey");

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    cells.forEach(eventAdd);
}

function eventAdd(cell) {
    cell.addEventListener("mouseover", () => highlightCell(cell));
}

function highlightCell(cell) {
    cell.style.backgroundColor = "cyan";
}

resetButton.addEventListener("click", resetGrid);

function resetGrid() {;
    let newSize = prompt("enter desired grid size or leave blank for no change");

    if(newSize > 100) {
        newSize = 100;
    }

    createCells(newSize);
}