let displayValue = "";

const display = document.getElementById("display");

const buttonOne = document.getElementById("btn1");
buttonOne.addEventListener("click", () => {
    displayValue = displayValue + "1";
    let newDisplayValue = document.createTextNode(displayValue);
    display.removeChild(display.lastChild)
    display.appendChild(newDisplayValue);
})

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
