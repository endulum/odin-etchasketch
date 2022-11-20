// the grid

const canvas = document.getElementById('canvas');

function makeGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        for (let l = 0; l < dimension; l++) {
            const pixel = document.createElement('div');
            canvas.appendChild(pixel);
            pixel.classList.add('pixel');
        }
    }
    canvas.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

makeGrid(12);

// the drawing functionality

const allPixels = document.querySelectorAll(".pixel");

let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}; document.body.onmouseup = function() {
    mouseDown = false;
};

for (let i = 0; i < allPixels.length; i++) {
    allPixels[i].addEventListener('mouseover', function() {
        if (mouseDown > 0) {
            this.style.backgroundColor = "black";
        }
    })
}




