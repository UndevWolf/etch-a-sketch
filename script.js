const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const reset = document.querySelector("#reset");
const cell = document.querySelectorAll(".cell");

// creates a square grid depending on the gridSize variable and adds it to the DOM.
function newGrid(gridSize) {
    for (i = 0;i < (gridSize ** 2); i++) {
        const item = document.createElement("div");
        item.classList.add("cell");
        item.style.width = (800/gridSize) + "px";
        item.style.height = (800/gridSize) + "px";
        container.appendChild(item);
}};

// adds a "black" class to a cell when mouse hovers.
function sketch() {
const c = document.querySelectorAll(".cell")
c.forEach(c => c.addEventListener("mouseenter", (e) => {
    e.target.classList.add("black");
}))};

// Initial run.
newGrid(slider.value);
sketch();

// Takes input from slider to decide the grid size.
slider.addEventListener("input", () => {
    container.replaceChildren();
    sliderValue.textContent = slider.value;
    newGrid(slider.value);
    sketch();
});

// Reset drawing board.
reset.addEventListener("click", () => {
    container.replaceChildren();
    newGrid(slider.value);
    sketch();
});

