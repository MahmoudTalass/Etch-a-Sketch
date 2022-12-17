const container = document.querySelector("#container");
let question = 16;
const changeGridBtn = document.querySelector("#change-grid");
createDivGrid();
const gridItems = document.querySelectorAll(".grid-item");


changeGridBtn.addEventListener("click", () => {
    question = prompt("Enter new grid")

    createDivGrid()
})

// function that creates a loop that runs 256 times at the beginning
// of the program and creates a grid based on the user input of divs
function createDivGrid() {
    container.textContent = ''
   for (let i = 0; i < (question * question); i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      div.addEventListener('mouseover', () => highlight(div))
      div.style.flexBasis = `${100/question}%`;
      container.appendChild(div);
   }
}


// function that adds the highlight class to griditems so they
// get background color black in the css
function highlight(item) {
   item.classList.add("highlight");
}
