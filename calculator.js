const displayDiv = document.querySelector("#display");
let finished = true;
let result;
let last_pressed;
let equation = ""
let operators = '+ - x ÷'

function press(digit) {
    console.log('finished',finished);
    if (digit == 0 && displayDiv.innerText == "0"){
        console.log("don't start with '0");
    } else if (displayDiv.innerText == "0" || finished == true){
            console.log("hello");
            result = 0;
            displayDiv.innerText = digit;
            equation = String(digit);
            finished = false;
    } else {
        displayDiv.innerText += digit;
        equation += digit;
    }
    console.log('equation',equation);
    last_pressed = digit;
}

function setOP(operator) {
    finished = false;
    console.log('last_pressed',last_pressed);
    if (operators.includes(last_pressed) == false && last_pressed != undefined){
        console.log('hello');
        displayDiv.innerText += operator;
        if (operator == '+' || operator == '-') {
            equation += operator;
        } else if (operator == 'x') {
            equation += '*';
        } else {
            equation += '/';
        }
        console.log('equation',equation);
    // } else if (equation.slice(equation.length-1,equation.length) != "-" && operator=="-"){
    //     if (last_pressed == undefined){
    //         displayDiv.innerText = operator;
    //         equation = operator;
    //     } else {
    //         displayDiv.innerText += operator;
    //         equation = +operator;
    //     }
    }
    last_pressed = operator;
}

function clr(){
    displayDiv.innerText = 0;
    equation = '';
    last_pressed = undefined;
}

function calculate() {  
    answer = eval(equation);
    displayDiv.innerText = answer;
    finished = true;
    equation = String(answer);
    console.log(equation);
}
