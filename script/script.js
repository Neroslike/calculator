//operator functions
let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a/b
let operator = (op, a, b) =>{
    a = parseInt(a)
    b = parseInt(b)
    if(op === '+'){
        return add(a, b)
    } else if (op === '-'){
        return subtract(a, b)
    } else if (op === '×'){
        return multiply(a, b)
    } else if (op === '/'){
        return divide(a, b)
    } 
}
//operator functions

//Selectors
let numContainer = document.querySelector('.num-container')
let display = document.querySelector('#display')
let display2 = document.querySelector('#display2')
let optButton = document.querySelectorAll('.op-button')
let eqlButton = document.querySelector('#equal')
let displayValue = display.value
let result
let left = 0
let right = 0
let op = ''
createNumberButtons()
let numButtons = document.querySelectorAll('.numbers')
let clearBtn = document.querySelector('#clear')
let removeBtn = document.querySelector('#remove')
//Selectors

//Functions
function doMath(a, b, c) {
    b = parseInt(b)
    c = parseInt(c)
    let result = operator(a, b, c)
    left = result
    return result
}
//Functions

//Event listeners
eqlButton.addEventListener('click', () =>{
    //Assign current value of the display to a variable
    right = display.value
    //Do the math and populate the display with the result
    display.textContent = doMath(op, left, right)
    //Update the left variable for future operations with this value
    left = display.value
    display2.textContent += ` ${right} =`
})

optButton.forEach(button => {
    button.addEventListener('click', (e) => {
        left = display.value
        op = e.target.textContent
        display2.textContent = `${left} ${e.target.textContent}`
        display.textContent = ''
    })
});
//Event listeners


function createNumberButtons() {
    for(let i = 9; i >= 0; i--){
        let divNumber = document.createElement('button')
        divNumber.textContent = i
        divNumber.classList.add('numbers')
        divNumber.value = i
        numContainer.appendChild(divNumber)
    }
}

numButtons.forEach(button => {
    button.addEventListener('click', (e) => display.textContent += e.target.textContent)
    button.addEventListener('click', () => displayValue = display.value)
});

clearBtn.addEventListener('click', () => {
    display.textContent = ''
    display2.textContent = ''
})
removeBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
    displayValue = display.textContent
})
