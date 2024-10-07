const containerSize = 32; //32em css unit size
const boxPerSide = document.getElementById('grid-side');

//query and stle container with width and height
const container = document.getElementById('grid-container');
container.style.width = `${containerSize}em`;//add unit size(em)
container.style.height = `${containerSize}em`;//add unit size(em)

//get feature buttons
const featureButtons = document.querySelectorAll('button');

//random color generator 
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 17)];
    }
    return color;
}

//fade to black generator
const greyScale = (element) => {
    let random = Math.floor(Math.random() * 255);
    element.style.backgroundColor = `rgb(${random},${random},${random})`;
}

//function to dynamically generate grids of any size
const makeGrid = (gridSize) => {

    const fullGridSize = (gridSize * gridSize);//complete number of grid cells
    //0.125em equivalent to 2px (to compensate for 1px container border and 1px gridBox border)
    const gridBoxSize = `${(containerSize / gridSize) - 0.125}em`;

    for (let i = 0; i < fullGridSize; i++) {
        const gridBox = document.createElement('div');

        //grid cell height and width assignment
        gridBox.style.width = gridBoxSize;
        gridBox.style.height = gridBoxSize;

        //add class to each cell and append to contaner
        gridBox.className = 'grid-box';
        container.appendChild(gridBox);

        boxPerSide.value = '';

        //color features switch statement
        featureButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                switch (e.target.id) {
                    case "black":
                        gridBox.addEventListener('mouseover', () => {
                            gridBox.style.backgroundColor = "black";
                        });
                        break;
                    case "rainbow":
                        gridBox.addEventListener('mouseover', () => {
                            gridBox.style.backgroundColor = getRandomColor();
                        });
                        break;
                    case "grey-scale":
                        gridBox.addEventListener('mouseover', () => {
                                greyScale(gridBox);
                        });
                        break;
                    case "erase":
                        gridBox.addEventListener('mouseover', () => {
                                gridBox.style.backgroundColor = '';
                        });
                        break;
                    case "reset":
                        gridBox.style.backgroundColor = '';
                        break;
                }
            });
        });
        //reset all cells
    }//end for loop
}

//call makeGrid through input field event listener
boxPerSide.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        //check if number value greater than 100 or less than 1
        if (e.target.value > 0 && e.target.value <= 100) {
            container.innerHTML = '';
            makeGrid(e.target.value);//get input field value
        } else {
            //validate message if error
            alert("Enter a number between 0 and 100")
        }
    }
});