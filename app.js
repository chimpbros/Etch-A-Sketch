const container = document.querySelector('.container');
let input = prompt('Specify Grids size: ');
while (isNaN(parseInt(input)) || parseInt(input) < 1 ) {
    input = prompt("Invalid input. Please enter a number:");
}
container.style.width = input*16 + 'px';
container.style.height = input*16 + 'px';
// create 2 nested for loops to create input x input squares of divs
for(let row = 0; row < input; row++){
    for(let col = 0; col < input; col++){
        const grid = document.createElement('div');
        grid.className = 'grid';
        container.appendChild(grid);
    }
}