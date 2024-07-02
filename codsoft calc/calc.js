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
