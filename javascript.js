const rowsRange = document.getElementById('rowsRange');
const rowsValue = document.getElementById('rowsValue');
const grid = document.getElementById('grid');

rowsValue.textContent = rowsRange.value;
let clicked = false;

function createGrid(rows) {
    grid.innerHTML = '';
    const cellSize = 640/rows;
    let totalCells = rows*rows;
    while (totalCells--) {
        const cell = document.createElement('div');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.className = 'cell';
        grid.appendChild(cell);

        cell.addEventListener('mousedown', function() {
            cell.classList.add('hover');
            document.addEventListener('mousemove', hover);
        });
    }
}


createGrid(rowsRange.value);

const cells = document.querySelectorAll('.cell');

rowsRange.addEventListener('input', function() {
    rowsValue.textContent = this.value;
    createGrid(this.value);
});

document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', hover);
});

function hover(evt) {
    if(!grid.contains(evt.target)) return; 
    evt.target.classList.add('hover');  
}


