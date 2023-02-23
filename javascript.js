const rowsRange = document.getElementById('rowsRange');
const rowsValue = document.getElementById('rowsValue');
const grid = document.getElementById('grid');

rowsValue.textContent = rowsRange.value;

function createGrid(rows) {
    grid.innerHTML = '';
    const cellSize = 900/rows;
    console.log(cellSize);
    let totalCells = rows*rows;
    while (totalCells--) {
        const cell = document.createElement('div');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.className = 'cell';
        grid.appendChild(cell);
    }
}

createGrid(rowsRange.value);

rowsRange.addEventListener('input', function() {
    rowsValue.textContent = this.value;
    createGrid(this.value);
});
