let drawMode = "black";
let canvasDimensions = 10;

let gridLines = "on"; // flag for gridlines

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
    makeCanvas(this.value);
    canvasDimensions = this.value;
}

// reset button

document.getElementById('reset').onclick = function() {
    clearCanvas();
    makeCanvas(canvasDimensions);
    if (gridLines == "off") {
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.borderTop = "none";
            pixels[i].style.borderRight = "none";
        };
    } else if (gridLines = "on") {
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.borderTop = "1px solid gray";
            pixels[i].style.borderRight = "1px solid gray";
        };
    }
}

// drawmode toggle

document.getElementById("drawMode").addEventListener('click', function() {
    if (drawMode === "black") {drawMode = "transparent"}
    else if (drawMode === "transparent") {drawMode = "black"}
})

// gridlines toggle


document.getElementById("gridLines").addEventListener('click', function() {
    if (gridLines == "on") {
        canvas.style.borderBottom = "none";
        canvas.style.borderLeft = "none";
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.borderTop = "none";
            pixels[i].style.borderRight = "none";
        }; gridLines = "off";
    } else if (gridLines = "off") {
        canvas.style.borderBottom = "1px solid gray";
        canvas.style.borderLeft = "1px solid gray";
        const pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.borderTop = "1px solid gray";
            pixels[i].style.borderRight = "1px solid gray";
        }; gridLines = "on";
    }
})


makeCanvas(10);