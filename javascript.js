let grid = document.createElement('div');
grid.className = 'grid';
for(let i = 0; i < 100; i++) {
    let column = document.createElement('div');
    column.className = 'column';
    for(let j = 0; j < 60; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        column.appendChild(cell);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);

let down = false;
const cells = document.querySelectorAll('.cell');
document.addEventListener('mousedown', function() {
    down = true;
})

document.addEventListener('mouseup', function() {
    down = false;
})

cells.forEach(cell => cell.addEventListener('mouseover', function(e) {
    if(down == false)
        return;
    e.target.classList.add('hover');
}))