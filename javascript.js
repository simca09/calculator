console.log("Sheesh")

let startValue  = "";
let secondValue = "";
let operator = "";


document.addEventListener("DOMContentLoaded", function(){

// Store all components of HTML in JS
const screen = document.querySelector("#screen");
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const allClear = document.querySelector("#allClear");
const clear = document.querySelector("#clear");
const subtraction = document.querySelector("#subtraction");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const addition = document.querySelector("#addition");
const equals = document.querySelector("#equals");
const period = document.querySelector(".period");
const nine = document.querySelector("#buttonNine");
const eight = document.querySelector("#buttonEight");
const seven = document.querySelector("#buttonSeven");
const six = document.querySelector("#buttonSix");
const five = document.querySelector("#buttonFive");
const four = document.querySelector("#buttonFour");
const three = document.querySelector("#buttonThree");
const two = document.querySelector("#buttonTwo");
const one = document.querySelector("#buttonOne");
const zero = document.querySelector("#buttonZero");



// Number functions 1/2
numbers.forEach((numb) => numb.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        screenOne.textContent = startValue;
    }))

// Operator functions 1/2
operators.forEach((ope) => ope.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        screenTwo.textContent = secondValue + " " + opa;
        screenOne.textContent = startValue;
    }))



// All-Clear function
allClear.addEventListener("click", function(){
    startValue = "";
    secondValue = "";
    opa = "";
    screenTwo.textContent = startValue;
    screenOne.textContent = startValue;
})

// Equals function 1/2
equals.addEventListener("click", function(){
    if (startValue != "" && secondValue != ""){
        calculate();
        screenTwo.textContent = "";
        if (secondValue.length <=5) {
        screenOne.textContent = secondValue;
        } else {
            screenOne.textContent = secondValue.slice(0,5) + "...";
        }
    }
})


period.addEventListener("click", function(){
    addDecimal()
})



})

// Number functions 2/2
function handleNumber(num) {
    if (startValue.length <= 5) {
        startValue += num;
    }
    
}


// Operator functions 2/2

function handleOperator(op){
    console.log(op)
    opa = op;
    secondValue = startValue;
    startValue = "";

}

// Equals function 2/2

function calculate() {
    secondValue = Number(secondValue);
    startValue = Number(startValue);
    
    if (opa === "+") {
        secondValue += startValue;
    } else if (opa === "-") {
        secondValue -= startValue;
    } else if (opa === "x") {
        secondValue *= startValue;
    } else if (opa === "/") {
        secondValue /= startValue;
    }
    
    secondValue = roundNumber(secondValue)
    secondValue = secondValue.toString();
    startValue = startValue.toString();

}

function roundNumber(num){
    return Math.round(num * 1000) /1000;
}


function addDecimal() {
    if(!startValue.includes(".")){
        startValue += ".";
    }
}






// Calculator options
// const add = (num1, num2) => num1 + num2;
// const minus = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;


