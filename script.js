const container = document.querySelector("#container");
const slider = document.querySelector("#slider");
const valueContainer = document.querySelector("#value-container");
let sliderValue = slider.value;

createDivGrid();
const gridItems = document.querySelectorAll(".grid-item");

slider.addEventListener("input", () => {
   sliderValue = slider.value
   valueContainer.textContent = sliderValue;
   createDivGrid();
});

// function that creates a loop that runs 256 times at the beginning
// of the program and creates a grid based on the user input of divs
function createDivGrid() {
   container.textContent = "";
   for (let i = 0; i < sliderValue * sliderValue; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      div.addEventListener("mouseover", () => highlight(div));
      div.style.flexBasis = `${100 / sliderValue}%`;
      container.appendChild(div);
   }
}

// function that adds the highlight class to griditems so they
// get background color black in the css
function highlight(item) {
   item.classList.add("highlight");
}
