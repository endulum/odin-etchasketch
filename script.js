const canvas = document.getElementById('canvas');

function makeGrid(dimension) {
    // makes cells
    for (let i = 0; i < dimension; i++) {
        for (let l = 0; l < dimension; l++) {
            const pixel = document.createElement('div');
            canvas.appendChild(pixel);
            pixel.classList.add('pixel');
        }
    }
    // adjusts cells into grid layout
    canvas.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

makeGrid(10);

let allPixels = document.querySelectorAll(".pixel");

for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener('mouseover', function(e) {
        this.style.backgroundColor = "red";
    })
}
