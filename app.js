function newGrid(){
    const container = document.querySelector('.container');
    let input = prompt('Specify Grids size: ');
    while (isNaN(parseInt(input)) || parseInt(input) < 1 ) {
        input = prompt("Invalid input. Please enter a number:");
    }
    container.style.width = '256px';
    container.style.height = '256px';
    // create 2 nested for loops to create input x input squares of divs
    for(let row = 0; row < input; row++){
        for(let col = 0; col < input; col++){
            const grid = document.createElement('div');
            grid.className = 'grid';
            container.appendChild(grid);
            grid.style.width = 256/input + 'px'
            grid.style.height = 256/input + 'px'
        }
    }
}
// change grid's background color when mouse hover
function changeColor(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'red';
    }));
}
// delete existing grid
function rmGrid(){
    const grid = document.querySelectorAll('.grid');
    grid.forEach(item => item.remove());
}


const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', function(){
    rmGrid();
    newGrid();
    changeColor();
});
