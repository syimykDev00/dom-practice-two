const block = document.querySelectorAll(".block")

block.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "red"
        } else {
            el.style.background = "white"
        }
    })
})

const blockTwo = document.querySelectorAll(".block-two")

blockTwo.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "blue"
        } else {
            el.style.background = "white"
        }
    })
})

const blockThree = document.querySelectorAll(".block-three")

blockThree.forEach(el => {
    el.addEventListener("click", () => {
        if (el.style.background === "white") {
            el.style.background = "green"
        } else if (el.style.background === "green") {
            el.style.background = "yellow"
        } else if (el.style.background === "yellow") {
            el.style.background = "orange"
        } else if (el.style.background === "orange") {
            el.style.background= "purple"
        } else if (el.style.background === "purple") {
            el.style.background = "pink"
        } else if (el.style.background === "pink") {
            el.style.background = "aqua"
        } else if (el.style.background === "aqua") {
            el.style.background = "red"
        } else {
            el.style.background = "white"
        }
    })
})