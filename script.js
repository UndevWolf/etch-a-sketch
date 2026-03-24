container = document.querySelector(".container")
let gridSize = 100;
for (i = 0;i < (gridSize ** 2); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = "6px";
    cell.style.height = "6px";
    container.appendChild(cell);
}
let c = document.querySelectorAll(".cell")

c.forEach(c => c.addEventListener("mouseenter", (e) => {
    e.target.classList.add("black");
}));