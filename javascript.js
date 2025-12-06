let inputValue 
const container = document.querySelector("#container")

const enterButton = document.getElementById("enter")
enterButton.addEventListener("click", () => {
    inputValue = prompt("Input a number!")
    clearPrevious()
    createGrid(inputValue)
    colourChanger()
})

function createGrid(input) {
    let length = 500
    if (input > 100) {
        alert("Too big! Please input a number smaller than 100!")
    } else {
        for (index = 0; index < input * input; index++) {
            let box = document.createElement("div")
            box.className = "box"
            box.style.width = `${length / input}px`
            box.style.height = `${length / input}px`
            container.append(box)
        }
    }
}   

function clearPrevious() {
    const clearingNode = document.querySelector("#container")
    while(clearingNode.firstChild) {
        clearingNode.removeChild(clearingNode.firstChild)
    }
}

let colour
function colourChoice() {
    let random = Math.floor(Math.random() * 8) + 1
    if (random === 1) {
        return colour = "red"
    } else if (random === 2) {
        return colour = "orange"
    } else if (random === 3) {
        return colour = "yellow"
    } else if (random === 4) {
        return colour = "green"
    } else if (random === 5) {
        return colour = "blue"
    } else if (random === 6) {
        return colour = "indigo"
    } else if (random === 7) {
        return colour = "violet"
    } else {
        return colour = "lightgrey"
    }
}

function colourChanger() {
    let changeColour = container.querySelectorAll(".box")
    changeColour.forEach((box) => {
        box.style.backgroundColor = "lightgrey"
        box.addEventListener("mouseenter", () => { 
            box.style.backgroundColor = "black"
            box.addEventListener("mouseout", () => {
                colourChoice()
                box.style.backgroundColor = colour
            })
        })
    })
}

