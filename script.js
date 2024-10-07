const containerSize = 32; //32em css unit size
//const gridSize = prompt("Enter grid size between 1 - 100",);//limit to 100x100 grid and convert to input element

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
  const fadeIn = (element) => {
    let random = Math.floor(Math.random() * 255);
     element.style.backgroundColor = `rgb(${random},${random},${random})`;
  }

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
                        case "fade-in":
                        gridBox.addEventListener('mouseover', () => { 
                            fadeIn(gridBox);
                        });
                        break;
                        case "erase":
                        gridBox.addEventListener('mouseover', () => { 
                            gridBox.style.backgroundColor = '';
                        });
                        break;
                }
            });
        });
        
    }//end for loop
}

//call makeGrid
makeGrid();
