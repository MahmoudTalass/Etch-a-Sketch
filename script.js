const container = document.querySelector("#container")

// function that creates a loop that runs 256 times at the beginning 
// of the program and creates 16x16 grid of divs
function createDivGrid() {
    for (let i = 0; i <= 256; i++) {
        let div = document.createElement("div")
        div.classList.add = 'grid-item'
        container.appendChild(div)
    }
}