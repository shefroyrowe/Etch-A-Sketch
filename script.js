const containerSize = 32; //32em css unit size
const gridSize = prompt("Enter grid size between 1 - 100",);//limit to 100x100 grid and convert to input element

//query and stle container with width and height
const container = document.getElementById('grid-container');
container.style.width = `${containerSize}em`;//add unit size(em)
container.style.height = `${containerSize}em`;//add unit size(em)

//get feature buttons
const featureButtons = document.querySelectorAll('button');

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

        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = "black";
        });
    }//end for loop
}

//call makeGrid
makeGrid();
