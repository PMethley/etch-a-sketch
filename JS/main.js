let gridDim = 16;
const canvas = document.querySelector(".canvas-container");
let mouseDown = false;
let currentColour = "red";

function createCanvas(){
    canvas.innerText = "";

    canvas.addEventListener("mousedown", () => mouseDown = true);
    canvas.addEventListener("mouseup", () => mouseDown = false);

    for (let indexRow = 0; indexRow < gridDim; indexRow++) {
        let tempDivRow = document.createElement("div");
        tempDivRow.setAttribute("class", `row ${indexRow+1}, canvas-row`);
        for (let indexColumn = 0; indexColumn < gridDim; indexColumn++) {
            let cell = document.createElement("div");
            cell.setAttribute("id", `${indexRow+1}-${indexColumn+1}`);
            cell.setAttribute("class", "canvas-cell");
            tempDivRow.appendChild(cell);
        };
        canvas.appendChild(tempDivRow);
    };
    const allCells = document.querySelectorAll(".canvas-cell");
    allCells.forEach((cellElement) => {
        cellElement.addEventListener("mouseover", () => {
            if (mouseDown === true){
                cellElement.setAttribute("style", `background-color:${currentColour};`);
            };
        });
    });
};

const sliderElement = document.getElementById("slider");
sliderElement.addEventListener("input", () => {
    document.getElementById("slider-value").innerText = sliderElement.value;
});

sliderElement.addEventListener("change", () => {
    gridDim = sliderElement.value;
    createCanvas();
});

const colourButtons = document.querySelectorAll(".control-button.colour");

colourButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // document.querySelector(".selected-colour").classList.remove(".selected-colour");
        currentColour = button.id;
        button.classList.add("selected-colour");
    })
})


createCanvas();