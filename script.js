// flag for mousedown

let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}; document.body.onmouseup = function() {
    mouseDown = false;
};

// the canvas

const canvas = document.getElementById('canvas');

function makeCanvas(dimension) {
    for (let i = 0; i < dimension; i++) {
        for (let l = 0; l < dimension; l++) {
            const pixel = document.createElement('div');
            canvas.appendChild(pixel);
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', function() {
                if (mouseDown > 0) {
                    this.style.backgroundColor = "black";
                }
            })
        }
    }
    canvas.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

function clearCanvas() {
    let pixel = canvas.firstElementChild;
    while (pixel) {
        canvas.removeChild(pixel);
        pixel = canvas.firstElementChild;
    }
}

// the slider

document.getElementById('dimensions').oninput = function() {
    clearCanvas();
    makeCanvas(this.value)
}

makeCanvas(10);