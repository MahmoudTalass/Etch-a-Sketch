const gridContainer = document.querySelector("#grid-container");

const slider = document.querySelector("#slider");
const valueContainer = document.querySelector("#value-container");
let sliderValue = slider.value;

createDivGrid();
const gridItems = document.querySelectorAll(".grid-item");

const clearCanvas = document.querySelector("#clear-canvas");

/* 
Listens to clicks on the clearCanvas buttons and clears
the canvas by calling the creatDivGrid() function
*/
clearCanvas.addEventListener('click', () => {
   createDivGrid()
})

/*
the event listener detects any input on the slider, sets the slider
Value to that new input, displays the value of the sliderValue in the html
and calls the createDivGrid() function.
*/
slider.addEventListener("input", () => {
   sliderValue = slider.value;
   valueContainer.textContent = `${slider.value}x${slider.value}`;
   createDivGrid();
});

// function that creates a loop that runs (input*input) times at the beginning
// of the program and creates a grid based on the user input of divs
function createDivGrid() {
   gridContainer.textContent = "";
   for (let i = 0; i < sliderValue * sliderValue; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      div.style.flexBasis = `${100 / sliderValue}%`;
      gridContainer.appendChild(div);
   }
}

/*
this variable keeps track when the left click button
on the mouse is down
*/
let isMouseDown = false;

/* 
this event listner changes the state of the isMouseDown
variable to down when the mouse button is up
*/ 
gridContainer.addEventListener('mouseup', () => {
   isMouseDown = false;
})

/* 
this event listner changes the state of the isMouseDown
variable to down when the mouse button is down
*/
gridContainer.addEventListener("mousedown", () => {
   isMouseDown = true;
});

/*
this event listener checks if isMouseDown is true and 
if it is, it creates a variable that holds the event's target
which is the div that the mouse is on, and changes its color
*/
gridContainer.addEventListener("mousemove", (e) => {
   if (isMouseDown) {
      const target = e.target;
      highlight(e.target)
   }   
});
console.log(gridContainer);
/*
function that adds the highlight class to griditems so they
get background color black in the css
*/
function highlight(item) {
   item.classList.add("highlight");
}
