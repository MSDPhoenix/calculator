const displayDiv = document.querySelector("#display");
let finished = true;
let last_pressed;
let equation = '';
let operators = '+ - x ÷';
let operators2 = '+ - * /';
let should_calculate = false;

function press(element,digit) {
    flash_yellow(element);
    if (digit == 0 && displayDiv.innerText == "0"){                 // if the display = 0 and the 0 key is pressed first
        console.log("don't start with '0");
    } else if (displayDiv.innerText == "0" || finished == true){    // first number key pressed (that is not 0) after calculator is reset using "C" button 
            displayDiv.innerText = digit;
            equation = String(digit);
            finished = false;
    } else {                                                        // if it's not the first number key pressed
        if (equation.length < 12) {
            displayDiv.innerText += digit;
            equation += digit;
        }
    }
    last_pressed = digit;
}

function setOP(element,operator) {
    if (equation.length < 11) {                                     // limit the length of the equation to display width (12 digits)
        flash_yellow(element);
        finished = false;
        if (operators.includes(last_pressed) == false && last_pressed != undefined) {  // will not run if operator pressed 2x in a row or if operator pressed first after reset 
            for (let i = 0; i < operators2.length; i++) {
                if (equation.includes(operators2[i])) {             // is there already an operator in the equation?
                    should_calculate = true;
                }
            } 
            if (should_calculate == true) {                         // if so, evaluate equation and display result
                equation = String(eval(equation));
                displayDiv.innerText = equation;          
            } 
            displayDiv.innerText += operator;
            if (operator == '+' || operator == '-') {
                equation += operator;
            } else if (operator == 'x') {
                equation += '*';
            } else {
                equation += '/';
            }
        }
        last_pressed = operator;
    }
}

function clr(element){                                              // reset all values
    flash_yellow(element);
    displayDiv.innerText = 0;
    equation = '';
    last_pressed = undefined;
}

function calculate(element) {
    let end_of_equation = equation.slice(equation.length-1,equation.length)  
        if (operators2.includes(end_of_equation) == false) {        // doesn't run if equation ends with operator
            flash_yellow(element);
            answer = String(eval(equation));
            displayDiv.innerText = answer.substr(0,13);
            finished = true;                                        // if an operator is pressed immediately after '=', then the equation keeps the value given here 
            equation = answer;                                      // if a number is pressed immediately after 0, then equation is over-written by the first number pressed
        }
}

function scale(element,value){
    element.style.transform = "scale("+value+")";
}

function flash_yellow(element) {
    element.classList.add("flash_yellow");
    setTimeout(remove_yellow,600,element);
}
function remove_yellow(element) {
    element.classList.remove("flash_yellow");
}
