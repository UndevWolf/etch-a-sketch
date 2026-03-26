const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const btn = document.querySelectorAll(".btn");
let penChoice = 1;

// Returns a random RGB color
function generateRandomRGB(opacity = 1) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}, ${opacity})`;
};

// creates a square grid depending on the gridSize variable and adds it to the DOM.
function newGrid(gridSize) {
    for (i = 0;i < (gridSize ** 2); i++) {
        const item = document.createElement("div");
        item.classList.add("cell");
        item.style.width = (600/gridSize) + "px";
        item.style.height = (600/gridSize) + "px";
        item.style.opacity = 1;
        container.appendChild(item);
}};

let isActive = false;
container.onmousedown = () => {
    isActive = true;
}
window.onmouseup = () => {
    isActive = false;
}

// adds a color to a cell when mouse hovers.
function sketch(penChoice = 1) {
    const c = document.querySelectorAll(".cell");
    c.forEach(c => {
        c.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.target.style.background = choosePen();
            });
        c.addEventListener("mouseenter", (e) => {
            if (isActive == true) {
                e.target.style.background = choosePen();
            }});

        function choosePen() {
                // Pen color is assigned via their number as seen in their button function.
            switch (penChoice) {
                case 1: return "black";
                case 2: return "red";
                case 3: return "green";
                case 4: return "blue";
                case 5: return "yellow";
                case 6: return "purple";
                case 7: return generateRandomRGB();
                case 8: return "";
                case 9:
                    // Increase opacity to max starting from 0.1
                    let currentOpacity = parseFloat(c.style.opacity);
                    if (c.classList.contains("full")) {
                        let newOpacity = currentOpacity + 0.1;
                        c.style.opacity = newOpacity;
                    }
                    else {
                        c.style.opacity = .10;
                        c.classList.add("full");
                    }
                    break; 
        }};

        // // Implement touch event
        // container.addEventListener("touchmove", touchHandler);
        // function touchHandler(e) {   // https://gist.github.com/VehpuS/6fd5dca2ea8cd0eb0471
        //     // get the touch element
        //     let touch = e.touches[0];

        //     // get the DOM element
        //     let touchedCell = document.elementFromPoint(touch.clientX, touch.clientY);

        //     // make sure an element was found - some areas on the page may have no elements
        //     if (touchedCell) {
        //         // interact with the DOM element
        //         touchedCell.style.background = choosePen();
        //     }
        // };

})};

// Initial run.
newGrid(slider.value);
sketch();

// Takes input from slider to change the grid size.
slider.addEventListener("input", () => {
    container.replaceChildren();
    sliderValue.textContent = slider.value;
    newGrid(slider.value);
    sketch(1);
});

// Button function to change the pen color.
btn.forEach(b => b.addEventListener("click", (e) => {
    let pen = 1;
    switch (e.target.value) {
        case "black": pen = 1; break;
        case "red": pen = 2; break;
        case "green": pen = 3; break;
        case "blue": pen = 4; break;
        case "yellow": pen = 5; break;
        case "purple": pen = 6; break;
        case "rainbow": pen = 7; break;
        case "eraser": pen = 8; break;
        case "opacity": pen = 9; break;
        case "reset":
            container.replaceChildren();
            newGrid(slider.value);
            break;
    }
    sketch(pen);
}));

