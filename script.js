const containerSize = 32; //32em css size
const gridSize = prompt("Enter grid size",);//limit to 100x100 grid and convert to input element

const container = document.getElementById('grid-container');
container.style.width = `${containerSize}em`;
container.style.height = `${containerSize}em`;

//function to dynamically generate grids of any size
const makeGrid = () => {
    const fullGridSize = (gridSize * gridSize);//complete number of grid cells
    const gridBoxSize = `${(containerSize / gridSize) - 0.125}em`;//0.125 equivalent to 2px

    for (let i = 0; i < fullGridSize; i++) {
        const gridBox = document.createElement('div');

        //grid cell height and width assignment
        gridBox.style.width = gridBoxSize;
        gridBox.style.height = gridBoxSize;

        //add class to each cell and append to contaner
        gridBox.className = 'grid-box';
        container.appendChild(gridBox);
    }//end for loop
}

//call makeGrid
makeGrid();