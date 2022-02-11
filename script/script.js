let add = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let divide = (a, b) => a/b
let operator = (op, a, b) =>{
    if(op === '+'){
        return add(a, b)
    } else if (op === '-'){
        return subtract(a, b)
    } else if (op === '*'){
        return multiply(a, b)
    } else if (op === '/'){
        return divide(a, b)
    } 
}

let numContainer = document.querySelector('.num-container')
let displayValue = document.querySelector('#display')
createNumberButtons()
let buttons = document.querySelectorAll('.numbers')
let clearBtn = document.querySelector('#clear')


function createNumberButtons() {
    for(let i = 9; i >= 0; i--){
        let divNumber = document.createElement('button')
        divNumber.textContent = i
        divNumber.classList.add('numbers')
        divNumber.value = i
        numContainer.appendChild(divNumber)
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => displayValue.textContent += e.target.value)
});

clearBtn.addEventListener('click', () => displayValue.textContent = '')
