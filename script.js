const container = document.getElementById('container');
let gridSize = 16;

function createGrid(size) {
    // Clear previous grid
    container.innerHTML = '';

    // Calculate the width and height of each square
    const squareSize = 960 / size - 2;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect
        square.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            // Progressive darkening effect
            let opacity = parseFloat(square.style.opacity) || 1;
            square.style.opacity = opacity - 0.1;
        });

        container.appendChild(square);
    }
}

function changeGridSize() {
    let newSize = prompt("Enter number of squares per side (max 100):");
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) return;

    gridSize = newSize;
    createGrid(gridSize);
}

// Initial grid creation
createGrid(gridSize);
