const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

btns.forEach(btn => btn.addEventListener('click', userInput));

let a = "";
let b = "";
let operator = "";
let result = "";

function userInput() {

    const input = this.textContent;
    this.style.boxShadow = '0px 0px 5px #666666';
    setTimeout(() => {this.style.boxShadow = ''}, 100);

    if (/^[0-9.]$/.test(input)) {
        if (operator) {
            b = buildNumber(b, input);
        } else {
            a = buildNumber(a, input);
        }
    } else if (/^[+\-x÷]$/.test(input)) {
        if (operator) {
            a = operate();
            b = "";
            display.textContent = a;
        }
        operator = input;
    } else if (input === "=") {
        a = operate()
        display.textContent = a;
        operator = "";
        b = "";
    } else if (input === "%") {
        operator = input;
        display.textContent = operate();
    } else if (input === "+/-") {
        // To be implemented
    } else if (input === "AC") {
        display.textContent = "";
        a = "";
        b = "";
        operator = "";
    }
}

const operate = () => {

    a = Number(a);
    b = Number(b);

    console.log(a, operator, b);

    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide(a, b);
    } else if (operator === "%") {
        return percentage(a, b);
    }

}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => round(a * b);

const divide = (a, b) => round(a / b);

const percentage = (a, b) => {
    if (!b) {
        return a * 0.01;
    } else {
        return b * 0.01;
    }
}

const round = number => {
    if (number.toString().includes(".") && number.toString().split(".")[1].length > 5) {
        return parseFloat(number.toFixed(5));
    } else {
        return number;
    }
}

function buildNumber(i, j) {
    if (j === "." && i.includes(j)) return i;
    i += j;
    display.textContent = i;
    return i;
}