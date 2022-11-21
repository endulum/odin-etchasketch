let drawMode = "black";

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
            // enable drawing with dragging
            pixel.addEventListener('mouseover', function() {
                if (mouseDown > 0) {
                    this.style.backgroundColor = drawMode;
                }
            }); 
            // enable single pixel clicking
            pixel.addEventListener('click', function() {
                this.style.backgroundColor = drawMode;
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

// resize slider

document.getElementById('dimensions').oninput = function() {
    clearCanvas();
    makeCanvas(this.value)
}

// drawmode toggle

document.getElementById("drawMode").addEventListener('click', function() {
    if (drawMode === "black") {drawMode = "transparent"}
    else if (drawMode === "transparent") {drawMode = "black"}
})


makeCanvas(10);