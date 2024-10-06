const containerSize = 32;
const gridSize = prompt("Enter grid size",);

const container = document.getElementById('grid-container');
container.style.width = `${containerSize}em`;
container.style.height = `${containerSize}em`;


const makeGrid = () => {
    const fullGridSize = (gridSize * gridSize);
    const gridBoxSize = `${(containerSize / gridSize) - 0.125}em`;

    for (let i = 0; i < fullGridSize; i++) {
        const gridBox = document.createElement('div');
        gridBox.style.width = gridBoxSize;
        gridBox.style.height = gridBoxSize;

        gridBox.classList.add('grid-box');
        container.appendChild(gridBox);
    }
}

makeGrid();