const container = document.querySelector("#container");
createDivGrid();
const gridItems = document.querySelectorAll(".grid-item");

// gridItems.forEach(gridItem => {
//    addEventListener("mouseover", (e) => {
//     highlight(gridItem)
//     console.log(e.target)
// });
// });

for (let i = 0; i < gridItems.length; i++) {
   gridItems[i].addEventListener("mouseover", () => highlight(gridItems[i]));
}

// function that creates a loop that runs 256 times at the beginning
// of the program and creates 16x16 grid of divs
function createDivGrid() {
   for (let i = 0; i < 16 * 16; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-item");
      container.appendChild(div);
   }
}

// function that adds the highlight class to griditems so they
// get background color black in the css
function highlight(item) {
   item.classList.add("highlight");
}
