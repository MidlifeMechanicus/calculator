let displayValue = "";

const display = document.getElementById("display");

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

function getNewDisplay (newString) {
    displayValue = displayValue + newString;
    let newDisplay = document.createTextNode(displayValue);
    display.removeChild(display.lastChild)
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
