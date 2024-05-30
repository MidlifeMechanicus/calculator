let displayValue = "";
let firstInput;
let operatorInput;
let secondInput;
let displayAnswer;
let justAnswered = false;
let isOperator = false;

// Todo: screen size adjust? numeral limit?

const inputDisplay = document.getElementById("inputDisplay");
const calculationDisplay = document.getElementById("calculationDisplay");

const buttonOne = document.getElementById("btn1");
buttonOne.addEventListener("click", () => {
    getNewDisplay("1");
})
document.addEventListener("keydown", () => {
    if (event.key === "1"){
        getNewDisplay("1");
    }
})

const buttonTwo = document.getElementById("btn2");
buttonTwo.addEventListener("click", () => {
    getNewDisplay("2");
})
document.addEventListener("keydown", () => {
    if (event.key === "2"){
        getNewDisplay("2");
    }
})

const buttonThree = document.getElementById("btn3");
buttonThree.addEventListener("click", () => {
    getNewDisplay("3");
})
document.addEventListener("keydown", () => {
    if (event.key === "3"){
        getNewDisplay("3");
    }
})

const buttonFour = document.getElementById("btn4");
buttonFour.addEventListener("click", () => {
    getNewDisplay("4");
})
document.addEventListener("keydown", () => {
    if (event.key === "4"){
        getNewDisplay("4");
    }
})

const buttonFive = document.getElementById("btn5");
buttonFive.addEventListener("click", () => {
    getNewDisplay("5");
})
document.addEventListener("keydown", () => {
    if (event.key === "5"){
        getNewDisplay("5");
    }
})

const buttonSix = document.getElementById("btn6");
buttonSix.addEventListener("click", () => {
    getNewDisplay("6");
    document.addEventListener("keydown", () => {
        if (event.key === "6"){
            getNewDisplay("6");
        }
    })
})
document.addEventListener("keydown", () => {
    if (event.key === "6"){
        getNewDisplay("6");
    }
})

const buttonSeven = document.getElementById("btn7");
buttonSeven.addEventListener("click", () => {
    getNewDisplay("7");
})
document.addEventListener("keydown", () => {
    if (event.key === "7"){
        getNewDisplay("7");
    }
})

const buttonEight = document.getElementById("btn8");
buttonEight.addEventListener("click", () => {
    getNewDisplay("8");
})
document.addEventListener("keydown", () => {
    if (event.key === "8"){
        getNewDisplay("8");
    }
})

const buttonNine = document.getElementById("btn9");
buttonNine.addEventListener("click", () => {
    getNewDisplay("9");
})
document.addEventListener("keydown", () => {
    if (event.key === "9"){
        getNewDisplay("9");
    }
})

const buttonZero = document.getElementById("btn0");
buttonZero.addEventListener("click", () => {
    if (displayValue == ""){
    } else {
        getNewDisplay("0");
    }
})
document.addEventListener("keydown", () => {
    if (event.key === "0"){
        if(displayValue == ""){
        } else {
            getNewDisplay("0");
        }
    }
})

const buttonDecimal = document.getElementById ("btnDot");
buttonDecimal.addEventListener("click", () => {
    if (displayValue.includes(".")){
    } else if (displayValue == ""){
        getNewDisplay("0.");
    } else {
        getNewDisplay(".");
    }
});
document.addEventListener("keydown", () => {
    if (event.key === "."){
        if (displayValue.includes(".")){
        } else if(displayValue == ""){
            getNewDisplay("0.");
        } else {
            getNewDisplay(".");
        }
    }
})

const buttonDivide = document.getElementById("btn/");
buttonDivide.addEventListener("click", () => {
    if (justAnswered === true){
        getFirstInput(displayAnswer, "/");
    } else {
        getFirstInput(displayValue, "/");
    }
})
document.addEventListener("keydown", () => {
    if (event.key === "/"){
        if(justAnswered === true){
            getFirstInput(displayAnswer, "/");
        } else {
            getFirstInput(displayValue, "/");
        }
    }
})

const buttonMultiply = document.getElementById("btn*");
buttonMultiply.addEventListener("click", () => {
    if (justAnswered === true){
        getFirstInput(displayAnswer, "*");
    } else {
    getFirstInput(displayValue, "*");
    }
})
document.addEventListener("keydown", () => {
    if (event.key === "*"){
        if(justAnswered === true){
            getFirstInput(displayAnswer, "*");
        } else {
            getFirstInput(displayValue, "*");
        }
    }
})

const buttonSubtract = document.getElementById("btn-");
buttonSubtract.addEventListener("click", () => {
    if (justAnswered === true){
        getFirstInput(displayAnswer, "-");
    } else {
    getFirstInput(displayValue, "-");
    }
})
document.addEventListener("keydown", () => {
    if (event.key === "-"){
        if(justAnswered === true){
            getFirstInput(displayAnswer, "-");
        } else {
            getFirstInput(displayValue, "-");
        }
    }
})

const buttonPlus = document.getElementById("btn+");
buttonPlus.addEventListener("click", () => {
    if (justAnswered === true){
        getFirstInput(displayAnswer, "+");
    } else {
        getFirstInput(displayValue, "+");
    }
})
document.addEventListener("keydown", () => {
    if (event.key === "+"){
        if(justAnswered === true){
            getFirstInput(displayAnswer, "+");
        } else {
            getFirstInput(displayValue, "+");
        }
    }
})

const buttonClear = document.getElementById("btnClear");
buttonClear.addEventListener("click", () => {
    displayValue = "";
    justAnswered = false;
    isOperator = false;
    let newDisplay = document.createTextNode(displayValue);
    inputDisplay.removeChild(inputDisplay.lastChild);
    inputDisplay.appendChild(newDisplay);"?"

    let newCalculationDisplay = document.createTextNode("");
    calculationDisplay.removeChild(calculationDisplay.lastChild);
    calculationDisplay.appendChild(newCalculationDisplay);
})
document.addEventListener("keydown", () => {
    if (event.key === "Delete"){
        displayValue = displayValue.slice(0, -1);
        displayValue = "";
        justAnswered = false;
        let newDisplay = document.createTextNode(displayValue);
        inputDisplay.removeChild(inputDisplay.lastChild);
        inputDisplay.appendChild(newDisplay);"?"

        let newCalculationDisplay = document.createTextNode("");
        calculationDisplay.removeChild(calculationDisplay.lastChild);
        calculationDisplay.appendChild(newCalculationDisplay);
    }
})

const buttonBack = document.getElementById("btnBack");
buttonBack.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    let newDisplay = document.createTextNode(displayValue);
    inputDisplay.removeChild(inputDisplay.lastChild);
    inputDisplay.appendChild(newDisplay);
})
document.addEventListener("keydown", () => {
    if (event.key === "Backspace"){
        displayValue = displayValue.slice(0, -1);
        let newDisplay = document.createTextNode(displayValue);
        inputDisplay.removeChild(inputDisplay.lastChild);
        inputDisplay.appendChild(newDisplay);
    }
})

const buttonEquals = document.getElementById("btnEql");
buttonEquals.addEventListener("click", () => {
    getSecondInput(displayValue, operatorInput);
})
document.addEventListener("keydown", () => {
    if (event.key === "=" || event.key === "Enter"){
        getSecondInput(displayValue, operatorInput);
    }
})


function getNewDisplay (newString){
    justAnswered = false;
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
    if (isOperator === true){
    } else {
        operatorInput = operator;
        displayValue = "";

        let newCalculationDisplay = document.createTextNode(firstInput + " " + operator);
        calculationDisplay.removeChild(calculationDisplay.lastChild);
        calculationDisplay.appendChild(newCalculationDisplay);

        let newDisplay = document.createTextNode(displayValue);
        inputDisplay.removeChild(inputDisplay.lastChild);
        inputDisplay.appendChild(newDisplay);

        isOperator = true;
    }
};

function getSecondInput (value, operator){
    // if (value == ""){
        // value = "0";
    // }
    // Above code is condensed below.
    secondInput = (value == "") ? "0" : value;
    if (isOperator === false){
    } else{
        operatorInput = operator;
        displayValue = "";
        displayAnswer = Math.round(calculateAnswer(firstInput, operatorInput, secondInput).toString()*100)/100;
        justAnswered = true;
        isOperator = false;

        let newCalculationDisplay = document.createTextNode(firstInput + " " + operator + " " + secondInput + " = ");
        calculationDisplay.removeChild(calculationDisplay.lastChild);
        calculationDisplay.appendChild(newCalculationDisplay);

        let newDisplay = document.createTextNode(displayAnswer);
        inputDisplay.removeChild(inputDisplay.lastChild);
        inputDisplay.appendChild(newDisplay);
    }
    

};

function calculateAnswer(firstString, operator, secondString){

    let firstNumber = Number(firstString);
    let secondNumber = Number(secondString);

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