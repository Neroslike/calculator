//operator functions
let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a/b
let operator = (op, a, b) =>{
    a = parseFloat(a)
    b = parseFloat(b)
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
let calculated = false
let result
let left = 0
let right = 0
let op = null
createNumberButtons()
let numButtons = document.querySelectorAll('.numbers')
let clearBtn = document.querySelector('#clear')
let removeBtn = document.querySelector('#remove')
//Selectors

//Functions
function doMath(a, b, c) {
    b = parseFloat(b)
    c = parseFloat(c)
    result = String(operator(a, b, c).toFixed(2))
    result = result.replace('.00', '')
    left = result
    calculated = true
    return result
}
//Functions

//Event listeners

//Equal button
eqlButton.addEventListener('click', () =>{
    if(right == '0' && op == '/'){
        left = 0
        right = 0
        calculated = true
        display2.textContent = ''
        return display.textContent = 'Error'
    }
    if(calculated === false){
        //Assign current value of the display to a variable
        if(display.value !== ''){
            right = display.value
        }
        //Do the math and populate the display with the result
        display.textContent = doMath(op, left, right)
        //Update the left variable for future operations with this value
        left = display.value
        if(display2.textContent !== ''){
            display2.textContent += ` ${right} =`
        }
    }    
})
//Equal button

//Operations buttons
optButton.forEach(button => {
    button.addEventListener('click', (e) => {
        if(left != '0' && right != '0'){
            if(calculated === false){
                display.textContent = doMath(op, left, right)
            }
        }
        op = e.target.textContent
        display2.textContent = `${left} ${e.target.textContent}`
        display.textContent = ''
    })
});
//Operations buttons

//Clear button
clearBtn.addEventListener('click', () => {
    op = null
    left = 0
    right = 0
    display.textContent = ''
    display2.textContent = ''
})
//Clear button

removeBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
    displayValue = display.textContent
    if(display2.textContent !== ''){
        right = display.textContent
    }else{
        left = display.textContent
    }
    if(right === ''){
        right = 0
    }
})

numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(calculated == true){
            display.textContent = ''
            calculated = false
        }
        display.textContent += e.target.textContent
        if(display2.textContent !== ''){
            right = display.textContent
        }else{
            left = display.textContent
        }
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
