let displayValue = "";
let firstInput;
let operatorInput;
let secondInput;

// Todo: html/css (obviously), rounding, check early =, clear button, error message.

const inputDisplay = document.getElementById("inputDisplay");
const calculationDisplay = document.getElementById("calculationDisplay");

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

const buttonDivide = document.getElementById("btn/");
buttonDivide.addEventListener("click", () => {
    getFirstInput(displayValue, "/");
})

const buttonMultiply = document.getElementById("btn*");
buttonMultiply.addEventListener("click", () => {
    getFirstInput(displayValue, "*");
})

const buttonSubtract = document.getElementById("btn-");
buttonSubtract.addEventListener("click", () => {
    getFirstInput(displayValue, "-");
})

const buttonPlus = document.getElementById("btn+");
buttonPlus.addEventListener("click", () => {
    getFirstInput(displayValue, "+");
})

const buttonEquals = document.getElementById("btn=");
buttonEquals.addEventListener("click", () => {
    getSecondInput(displayValue, operatorInput);
})


function getNewDisplay (newString) {
    displayValue = displayValue + newString;
    let newDisplay = document.createTextNode(displayValue);
    inputDisplay.removeChild(inputDisplay.lastChild);
    inputDisplay.appendChild(newDisplay);
};

function getFirstInput (value, operator){
    // if (value == ""){
        // value = "0";
    // }
    // Above code is condensed below.
    firstInput = (value == "") ? "0" : value;
    operatorInput = operator;
    displayValue = "";

    let newCalculationDisplay = document.createTextNode(firstInput + " " + operator);
    calculationDisplay.removeChild(calculationDisplay.lastChild);
    calculationDisplay.appendChild(newCalculationDisplay);

    let newDisplay = document.createTextNode(displayValue);
    inputDisplay.removeChild(inputDisplay.lastChild);
    inputDisplay.appendChild(newDisplay);
};

function getSecondInput (value, operator){
    // if (value == ""){
        // value = "0";
    // }
    // Above code is condensed below.
    secondInput = (value == "") ? "0" : value;
    operatorInput = operator;
    displayValue = calculateAnswer(firstInput, operatorInput, secondInput).toString();

    let newCalculationDisplay = document.createTextNode(firstInput + " " + operator + "" + secondInput + " =");
    calculationDisplay.removeChild(calculationDisplay.lastChild);
    calculationDisplay.appendChild(newCalculationDisplay);

    let newDisplay = document.createTextNode(displayValue);
    inputDisplay.removeChild(inputDisplay.lastChild);
    inputDisplay.appendChild(newDisplay);

};

function calculateAnswer(firstString, operator, secondString){

    let firstNumber = parseInt(firstString);
    let secondNumber = parseInt(secondString);

    if (operator == "+"){
        return firstNumber + secondNumber;
    } else if (operator == "-"){
        return firstNumber - secondNumber
    } else if (operator == "*"){
        return firstNumber * secondNumber;
    } else if(operator == "/"){
        if (secondNumber == 0){
            alert ("Nice try. No dividing by zero!");
            return firstNumber / 1;
            // replace this once clear button active
        } else {
            return firstNumber / secondNumber;
        }
    } else {
        return "?";
    }
};