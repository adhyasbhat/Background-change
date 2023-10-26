const left = document.getElementById("left")
const right = document.getElementById("right")
const body = document.querySelector('body')
const colorcode = document.getElementById("linear")

function changeColor(){
    const linearGradient = `linear-gradient(to right, ${left.value},${right.value})`
    body.style.background = linearGradient
    colorcode.innerHTML = 'linear-gradient(to right,'+ left.value+","+right.value+")"
}





