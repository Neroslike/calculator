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
    } else if(op === null){
        return b
    }
}
//operator functions

//Selectors
let numContainer = document.querySelector('.num-container')
let calcContainer = document.querySelector('.calc-container')
let display = document.querySelector('#display')
let display2 = document.querySelector('#display2')
let optButton = document.querySelectorAll('.op-button')
let eqlButton = document.querySelector('#equal')
let displayValue = display.value
let calculated = true
let result
let left = 0
let right = 0
let op = null
createNumberButtons()
let decimalBtn = document.querySelector('.decimal')
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

function eql() {
    if(op == null){
        display2.textContent = ''
    }
    if(parseInt(right) <= 0 && op == '/'){
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
        op = null
    }   
}

function opt(e) {
    if(left != '0' && right != '0'){
        if(calculated === false){
            display.textContent = doMath(op, left, right)
        }
    }
    op = e.target.textContent
    display2.textContent = `${left} ${e.target.textContent}`
    display.textContent = ''
}

function clear() {
    op = null
    left = 0
    right = 0
    display.textContent = ''
    display2.textContent = ''
}

function removeb() {
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
}

function nums(e) {
    if(calculated == true){
        display.textContent = ''
        right = 0
        calculated = false
    }
    display.textContent += e.target.textContent
    if(display2.textContent !== ''){
        right = display.textContent
    }else{
        left = display.textContent
    }
}

function decimal(e) {
    if(!display.textContent.includes('.')){
        if(calculated == true){
            display.textContent = '0'
            calculated = false
        } else if(calculated == false && display.textContent == ''){
            display.textContent = '0'
            calculated = false
        }
        display.textContent += e.target.textContent
        if(display2.textContent !== ''){
            right = display.textContent
        }else{
            left = display.textContent
        }
    }
}
//Functions

//Event listeners

//Equal button
eqlButton.addEventListener('click', () =>{
    eql()
})
//Equal button

//Operations buttons
optButton.forEach(button => {
    button.addEventListener('click', (e) => {
        opt(e)
    })
});
//Operations buttons

//Clear button
clearBtn.addEventListener('click', () => {
    clear()
})
//Clear button

removeBtn.addEventListener('click', () => {
    removeb()
})

numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        nums(e)
    })
});

decimalBtn.addEventListener('click', (e) =>{
    decimal(e)
})

//Event listeners


function createNumberButtons() {
    for(let i = 9; i >= 0; i--){
        let divNumber = document.createElement('button')
        divNumber.textContent = i
        divNumber.classList.add('numbers')
        divNumber.id = `${i}`
        divNumber.value = i
        numContainer.appendChild(divNumber)
    }
    let decimalBtn = document.createElement('button')
    decimalBtn.textContent = '.'
    decimalBtn.classList.add('decimal')
    decimalBtn.value = '.'
    decimalBtn.id = '.'
    numContainer.appendChild(decimalBtn)
}

document.body.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'Backspace':
            removeb()
            break;
        case 'Enter':
            eql()
            break;
        case e.key:
            document.getElementById(e.key).click()
            break
        default:
            break;
    }
})

let buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.setAttribute('onclick', 'this.blur()')
});