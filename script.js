const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const reset = document.querySelector("#reset");
const cell = document.querySelectorAll(".cell");
const blackBtn = document.querySelector("#blackBtn");
const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");
const yellowBtn = document.querySelector("#yellowBtn");
const purpleBtn = document.querySelector("#purpleBtn");
const randomBtn = document.querySelector("#randomBtn");
const eraser = document.querySelector("#eraser");

let penChoice = 0;

// Returns a random RGB color
function generateRandomRGB(opacity = 1) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}, ${opacity})`;
}

// creates a square grid depending on the gridSize variable and adds it to the DOM.
function newGrid(gridSize) {
    for (i = 0;i < (gridSize ** 2); i++) {
        const item = document.createElement("div");
        item.classList.add("cell");
        item.style.width = (600/gridSize) + "px";
        item.style.height = (600/gridSize) + "px";
        container.appendChild(item);
}};

// adds a color to a cell when mouse hovers.
function sketch(penChoice = 1) {
const c = document.querySelectorAll(".cell");
c.forEach(c => c.addEventListener("mouseenter", (e) => {
    // Pen color is assigned via their number as seen in their button function.
    if (penChoice == 1) {
        e.target.style.background = "black";
    }
    else if (penChoice == 2) {
        e.target.style.background = "red";
    }
    else if (penChoice == 3) {
        e.target.style.background = "green";
    }
    else if (penChoice == 4) {
        e.target.style.background = "blue";
    }
    else if (penChoice == 5) {
        e.target.style.background = "yellow";
    }
    else if (penChoice == 6) {
        e.target.style.background = "purple";
    }
    else if (penChoice == 7) {
        e.target.classList.remove("black");
        e.target.style.backgroundColor = generateRandomRGB();
    }
    else if (penChoice == 8) {
        e.target.style.background = "white";
    }
    else {
        e.target.classList.add("black");
    }
}))};

// Initial run.
newGrid(slider.value);
sketch();

// Takes input from slider to change the grid size.
slider.addEventListener("input", () => {
    container.replaceChildren();
    sliderValue.textContent = slider.value;
    newGrid(slider.value);
    sketch(penChoice);
});

// Reset drawing board.
reset.addEventListener("click", () => {
    container.replaceChildren();
    newGrid(slider.value);
    sketch(penChoice);
});

// Button functions to change the pen color.
blackBtn.addEventListener("click", () => {
    penChoice = 1;
    sketch(penChoice);
});

redBtn.addEventListener("click", () => {
    penChoice = 2;
    sketch(penChoice);
});

greenBtn.addEventListener("click", () => {
    penChoice = 3;
    sketch(penChoice);
});

blueBtn.addEventListener("click", () => {
    penChoice = 4;
    sketch(penChoice);
});

yellowBtn.addEventListener("click", () => {
    penChoice = 5;
    sketch(penChoice);
});

purpleBtn.addEventListener("click", () => {
    penChoice = 6;
    sketch(penChoice);
});

randomBtn.addEventListener("click", () => {
    penChoice = 7;
    sketch(penChoice);
});

eraser.addEventListener("click", () => {
    penChoice = 8;
    sketch(penChoice);
});