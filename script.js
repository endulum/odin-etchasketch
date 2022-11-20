const canvas = document.getElementById('canvas');

function makeGrid(dimension) {
    // makes cells
    for (let i = 1; i <= dimension; i++) {
        for (let l = 1; l <= dimension; l++) {
            canvas.appendChild(document.createElement('div'));
        }
    }
    // adjusts cells into grid layout
    canvas.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

makeGrid(7);


