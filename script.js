const gridContainer = document.querySelector("#grid-container");

const slider = document.querySelector("#slider");
const valueContainer = document.querySelector("#value-container");
let sliderValue = slider.value;

createDivGrid();
const gridItems = document.querySelectorAll(".grid-item");


// the event listener detects any input on the slider, sets the slider
// Value to that new input, displays the value of the sliderValue in the html
// and calls the createDivGrid() function.
slider.addEventListener("input", () => {
   sliderValue = slider.value
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
      div.addEventListener("mouseenter", () => highlight(div));
      div.style.flexBasis = `${100 / sliderValue}%`;
      gridContainer.appendChild(div);
   }
}

// function that adds the highlight class to griditems so they
// get background color black in the css
function highlight(item) {
   item.classList.add("highlight");
}
