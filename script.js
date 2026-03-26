const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const reset = document.querySelector("#reset");
const blackBtn = document.querySelector("#blackBtn");
const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");
const yellowBtn = document.querySelector("#yellowBtn");
const purpleBtn = document.querySelector("#purpleBtn");
const opacity = document.querySelector("#opacity");
const randomBtn = document.querySelector("#randomBtn");
const eraser = document.querySelector("#eraser");

let penChoice = 1;

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

let isActive = false;
container.onmousedown = () => {
    isActive = true;
}
window.onmouseup = () => {
    isActive = false;
}
container.ontouchstart = () => {
    isActive = true;
}
container.ontouchend = () => {
    isActive = false;
}
// adds a color to a cell when mouse hovers.
function sketch(penChoice = 1,opacityReset = .1) {
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
        c.addEventListener("touchstart", (e) => {
            e.preventDefault();
            e.target.style.background = choosePen();
        })
        c.addEventListener("touchmove", touchHandler(e));

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
                    
                    e.target.style.opacity = 1;

                    // Resets the opacity of the pen to 0.1 when clicking the color button again.
                    currentOpacity = parseFloat(e.target.style.opacity) - .9;
                    if (opacityReset == false) {
                        currentOpacity = parseFloat(e.target.style.opacity) - 0.1;
                    }
                    else {
                        currentOpacity = parseFloat(e.target.style.opacity);
                    }

                    let newOpacity = Math.min(currentOpacity + 0.1, 1.0)
                    e.target.style.opacity = newOpacity;
                    break;     
        }};

        function touchHandler(e) {
            let touch = e.touches[0];
            let fingerCoords = document.elementFromPoint(touch.clientX, touch.clientY);
            if (fingerCoords && isActive) {
                e.target.style.background = choosePen();
            }
        }
})};

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
    sketch();
});

// Button functions to change the pen color.
blackBtn.addEventListener("click", () => {
    penChoice = 1;
    sketch(penChoice,false);
});

redBtn.addEventListener("click", () => {
    penChoice = 2;
    sketch(penChoice,false);
});

greenBtn.addEventListener("click", () => {
    penChoice = 3;
    sketch(penChoice,false);
});

blueBtn.addEventListener("click", () => {
    penChoice = 4;
    sketch(penChoice,false);
});

yellowBtn.addEventListener("click", () => {
    penChoice = 5;
    sketch(penChoice,false);
});

purpleBtn.addEventListener("click", () => {
    penChoice = 6;
    sketch(penChoice,false);
});

randomBtn.addEventListener("click", () => {
    penChoice = 7;
    sketch(penChoice,false);
});

eraser.addEventListener("click", () => {
    penChoice = 8;
    sketch(penChoice,false);
});

opacity.addEventListener("click", () => {
    penChoice = 9;
    sketch(penChoice,false);
});