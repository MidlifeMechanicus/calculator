
// Get input from user
// Calculate result
//  If operand + add
// 
//  If operand - subtract
// 
//  If operand * multiply
// 
//  If operand / divide
// 
// display result
// 
// loop result into next calculation

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
