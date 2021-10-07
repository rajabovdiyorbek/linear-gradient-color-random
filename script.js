const buttonEL = document.getElementById('button')
const textColorEL = document.getElementById('text-color')

buttonEL.addEventListener('click', randomColorPicker)

function randomColorPicker(){

// 0 -f

const colors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']

function randomColor(){
    let hexColor = '#'
    for (let i = 0; i<6; i++){
        const hexItems = colors[Math.floor(Math.random() * colors.length)]
        hexColor = hexColor + hexItems
    }

    return hexColor
}

let color1 = randomColor()
let color2 = randomColor()
let color3 = randomColor()

//random degree
const randomDegree = Math.floor(Math.random() * 361)

const ptext= document.body.style.background = `linear-gradient(${randomDegree}deg, ${color1}, ${color2}, ${color3})`

textColorEL.textContent = `${ptext}`

}
    