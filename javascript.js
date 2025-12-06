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

function colourChanger() {
    let changeColour = container.querySelectorAll(".box")
    changeColour.forEach((box) => {
        box.addEventListener("mousemove", () => {
            box.style.backgroundColor = "black"
            box.addEventListener("mouseout", () => {
                box.style.backgroundColor = "grey"
            })
        })
    })
}

function clearPrevious() {
    const clearingNode = document.querySelector("#container")
    while(clearingNode.firstChild) {
        clearingNode.removeChild(clearingNode.firstChild)
    }
}

