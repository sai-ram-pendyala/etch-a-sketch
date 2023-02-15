let grid = document.createElement('div');
grid.className = 'grid';
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for(let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

document.body.appendChild(grid);