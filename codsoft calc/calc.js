let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let waitingForSecondOperand = false;
const display = document.getElementById('display');
function updateDisplay() {
    display.textContent = displayValue;
}
function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}
function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    updateDisplay();
}
function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}
function appendOperator(operator) {
    if (currentOperator !== null) {
        calculateResult();   }
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    waitingForSecondOperand = true;
    displayValue = `${firstOperand} ${currentOperator}`;
    updateDisplay();
}
function calculateResult() {
    if (currentOperator === null || firstOperand === null) {
        return;    }
    secondOperand = parseFloat(displayValue.split(' ')[2] || displayValue);
    let result;
    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;}
    displayValue = result.toString();
    currentOperator = null;
    firstOperand = null;
    waitingForSecondOperand = true; 
    updateDisplay();
}
function calculator(operation, num1, num2) {
    switch(operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': return num1 / num2;
        case 'modulus': return num1 % num2;
        case 'power': return Math.pow(num1, num2);
        case 'sqrt': return Math.sqrt(num1);
        default: return 'Invalid operation';
    }
}
function calculator(operation, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Error: Inputs must be numbers';
    }

    switch(operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': 
            if (num2 === 0) {
                return 'Error: Cannot divide by zero';
            }
            return num1 / num2;
        case 'modulus': return num1 % num2;
        case 'power': return Math.pow(num1, num2);
        case 'sqrt': return num1 >= 0 ? Math.sqrt(num1) : 'Error: Cannot take square root of negative number';
        default: return 'Invalid operation';
    }
}
let memory = 0; // Variable to store memory value

function calculator(operation, num1, num2) {
    if (isNaN(num1) || (num2 !== undefined && isNaN(num2))) {
        return 'Error: Inputs must be numbers';
    }

    switch(operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide': 
            if (num2 === 0) return 'Error: Cannot divide by zero';
            return num1 / num2;
        case 'modulus': return num1 % num2;
        case 'power': return Math.pow(num1, num2);
        case 'sqrt': return num1 >= 0 ? Math.sqrt(num1) : 'Error: Cannot take square root of negative number';
        
        // Memory operations
        case 'MS': memory = num1; return `Memory Stored: ${memory}`;
        case 'MR': return memory;
        case 'MC': memory = 0; return 'Memory Cleared';
        case 'M+': memory += num1; return `Memory Updated: ${memory}`;
        case 'M-': memory -= num1; return `Memory Updated: ${memory}`;
        
        default: return 'Invalid operation';
    }
}

