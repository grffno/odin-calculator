const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');

btns.forEach(btn => btn.addEventListener('click', userInput));

//test

let a = "";
let b = "";
let operator = "";
let result = "";

function userInput() {

    const input = this.textContent;

    if (!isNaN(input)) {
        if (operator === "") {
            a += input;
            display.textContent = a;
        } else {
            b += input;
            display.textContent = b;
        }
    } else if (input === ".") {
        if (operator === "" && !a.includes(input)) {
            a += input;
            display.textContent = a;
        } else if (!b.includes(input)) {
            b += input;
            display.textContent = b;
        }
    } else if (["+", "-", "x", "÷"].includes(input)) {
        if (operator === "") {
            operator = input;
        } else {
            // if an operator has previously been selected, run the operation
            a = operate();
            display.textContent = a;
            // Assign the new operator from user input
            operator = input;
            // Clear b so that the next number will be assigned to b
            b = "";
        }
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
    console.log(a, b);


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

const round = number => {
    if (number.toString().includes(".") && number.toString().split(".")[1].length > 5) {
        return parseFloat(number.toFixed(5));
    } else {
        return number;
    }
}

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => round(a * b);

const divide = (a, b) => round(a / b);

const percentage = (a, b) => {
    if (b === 0) {
        return a * 0.01;
    } else {
        return b * 0.01;
    }
}