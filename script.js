let displayValue = "";
let firstInput;
let operatorInput;
let secondInput;

// Need inputdisplay and function display!!!!

const display = document.getElementById("display");
const functionDisplay = document.getElementById("functionDisplay");

const buttonOne = document.getElementById("btn1");
buttonOne.addEventListener("click", () => {
    getNewDisplay("1");
})

const buttonTwo = document.getElementById("btn2");
buttonTwo.addEventListener("click", () => {
    getNewDisplay("2");
})

const buttonThree = document.getElementById("btn3");
buttonThree.addEventListener("click", () => {
    getNewDisplay("3");
})

const buttonFour = document.getElementById("btn4");
buttonFour.addEventListener("click", () => {
    getNewDisplay("4");
})

const buttonFive = document.getElementById("btn5");
buttonFive.addEventListener("click", () => {
    getNewDisplay("5");
})

const buttonSix = document.getElementById("btn6");
buttonSix.addEventListener("click", () => {
    getNewDisplay("6");
})

const buttonSeven = document.getElementById("btn7");
buttonSeven.addEventListener("click", () => {
    getNewDisplay("7");
})

const buttonEight = document.getElementById("btn8");
buttonEight.addEventListener("click", () => {
    getNewDisplay("8");
})

const buttonNine = document.getElementById("btn9");
buttonNine.addEventListener("click", () => {
    getNewDisplay("9");
})

const buttonZero = document.getElementById("btn0");
buttonZero.addEventListener("click", () => {
    if (displayValue == ""){
    } else {
        getNewDisplay("0");
    }
})

const buttonPlus = document.getElementById("btn+");
buttonPlus.addEventListener("click", () => {
    getFirstInput(displayValue, "+");
})

function getNewDisplay (newString) {
    displayValue = displayValue + newString;
    let newDisplay = document.createTextNode(displayValue);
    display.removeChild(display.lastChild);
    display.appendChild(newDisplay);
    return displayValue;
};

function getFirstInput (value, operator){
    let firstInput = value;
    let operatorInput = operator;
    let displayValue = "";

    let newFunctionDisplay = document.createTextNode(firstInput + " " + operator);

    console.log(newFunctionDisplay);
    console.log(displayValue);

    functionDisplay.removeChild(functionDisplay.lastChild);
    functionDisplay.appendChild(newFunctionDisplay);

    let newDisplay = document.createTextNode(displayValue);
    display.removeChild(display.lastChild);
    display.appendChild(newDisplay);
};

function calculateAnswer(firstNumber, operator, secondNumber){
    if (operator == "+"){
        return firstNumber + secondNumber;
    } else if (operator == "-"){
        return firstNumber - secondNumber
    } else if (operator == "*"){
        return firstNumber * secondNumber;
    } else if(operator == "/"){
        if (secondNumber == 0){
            return "Nice try. No dividing by zero!"
        } else {
            return firstNumber / secondNumber;
        }
    } else {
        return "?";
    }
};

console.log(calculateAnswer(2, "+", 3));
console.log(calculateAnswer(2, "-", 3));
console.log(calculateAnswer(2, "*", 3));
console.log(calculateAnswer(10, "/", 0));
console.log(calculateAnswer(10, "+", 2));
