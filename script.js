const canvas = document.getElementById('canvas');
let canvasDimensions = 5;
let drawMode = "black";
let allPixels;

let isDrawing = false;
canvas.onmousedown = function() {isDrawing = true;};
canvas.onmouseup = function() {isDrawing = false;};

function makeCanvas(canvasDimensions) {
    for (let i = 0; i < canvasDimensions; i++) {
        for (let j = 0; j < canvasDimensions; j++) {
            let pixel = document.createElement('div');
            canvas.appendChild(pixel);
            pixel.addEventListener('mouseover', function() {
                if (isDrawing == true) {
                    this.style.backgroundColor = drawMode;
                }
            }); pixel.addEventListener('click', function() {
                this.style.backgroundColor = drawMode;
            }); pixel.classList.add('pixel');
        }
    } canvas.style.gridTemplateRows = `repeat(${canvasDimensions}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${canvasDimensions}, 1fr)`;
    allPixels = document.querySelectorAll('.pixel');
}

function clearCanvas() {
    let pixel = canvas.firstElementChild;
    while (pixel) {
        canvas.removeChild(pixel);
        pixel = canvas.firstElementChild;
    }
}

function resetCanvas() {
    clearCanvas();
    makeCanvas(canvasDimensions);
}

function remakeCanvas(x) {
    canvasDimensions = x;
    resetCanvas();
}

function toggleDrawMode() {
    drawMode = (drawMode == "black"? "transparent" : "black");
}

let gridLines = "1px solid rgba(0,0,0,0.5)";
function makeGridLines() {
    canvas.style.borderBottom = gridLines;
    canvas.style.borderLeft = gridLines;
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].style.borderTop = gridLines;
        allPixels[i].style.borderRight = gridLines;
    };
} function toggleGridLines() {
    gridLines = (gridLines == "1px solid rgba(0,0,0,0.5)"? "none" : "1px solid rgba(0,0,0,0.5)");
    makeGridLines();
}

makeCanvas(canvasDimensions);
makeGridLines();