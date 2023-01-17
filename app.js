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
            grid.style.width = (256/size) + 'px';
            grid.style.height = (256/size) + 'px';
            grid.style.userSelect = 'none';
    }
}
// change grid's background color when mouse hover
function changeColor(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mousedown', function(){
        isMouseDown = true;
    }));
    grids.forEach(grid => grid.addEventListener('mousemove', function(){
        if(isMouseDown){
            this.style.backgroundColor = 'red';
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

const container = document.querySelector('.container');
container.style.width = '256px';
container.style.height = '256px';
let isMouseDown = false;
const createBtn = document.querySelector('.create-btn');
const clearBtn = document.querySelector('.clear-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
createBtn.addEventListener('click', function(){
    rmGrid();
    let gridSize = input();
    newGrid(gridSize);
    changeColor();
});
clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', rainbow);
