function input(){
    let input = prompt('Specify Grids size: ');
    while (isNaN(parseInt(input)) || parseInt(input) < 1 ) {
        input = prompt("Invalid input. Please enter a number:");
    }
    return parseInt(input);
}

function newGrid(size){
    for(let row = 0; row < size ** 2; row++){
            const grid = document.createElement('div');
            grid.className = 'grid';
            container.appendChild(grid);
            grid.style.width = (500/size) + 'px';
            grid.style.height = (500/size) + 'px';
            grid.style.userSelect = 'none';
    }
}
// change grid's background color when mouse hover
function changeColor(color){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mousedown', function(){
        isMouseDown = true;
    }));
    grids.forEach(grid => grid.addEventListener('mousemove', function(){
        if(isMouseDown){
            this.style.backgroundColor = color;
        }
    }));
    grids.forEach(grid => grid.addEventListener('mouseup', function(){
        isMouseDown = false;
    }));
}
// clear existing grid
function clearGrid(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(item => item.style.backgroundColor = 'white');
}
// delete existing grid
function rmGrid(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.remove());
}
// Function for rainbow effect
function rainbow(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mousedown', function(){
        isMouseDown = true;
    }));
    grids.forEach(grid => grid.addEventListener('mousemove', function(event){
        if(isMouseDown){
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }));
    grids.forEach(grid => grid.addEventListener('mouseup', function(){
        isMouseDown = false;
    }));
}

function updateColor(){
    let currentColor = document.querySelector('#color-picker').value;
    changeColor(currentColor);
}

const container = document.querySelector('.container');
container.style.width = '500px';
container.style.height = '500px';
let isMouseDown = false;
const createBtn = document.querySelector('.create-btn');
const clearBtn = document.querySelector('.clear-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
newGrid(24);
updateColor();
createBtn.addEventListener('click', function(){
    rmGrid();
    let gridSize = input();
    newGrid(gridSize);
    updateColor();
});
clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', rainbow);
