const displayDiv = document.querySelector("#display");
let finished = true;
let last_pressed = '0';
let equation = '0';
let operators = '+ - x ÷';
let operators2 = '+ - * /';
let should_calculate = false;

function press(element,digit) {
    flash_yellow(element);
    // if (digit == 0 && displayDiv.innerText == "0"){                 // if the display = 0 and the 0 key is pressed first
    //     console.log("don't start with '0");
    // } else 
    if (displayDiv.innerText == "0" || finished == true){           // first number key pressed (that is not 0) after calculator is reset using "C" button 
        displayDiv.innerText = digit;
        equation = String(digit);
        finished = false;
    } else {                                                        // if it's not the first number key pressed
        if (displayDiv.innerText.length < 12) {
            displayDiv.innerText += digit;
            equation += digit;
        }
    }
    last_pressed = digit;
}

function setOP(element,operator) {
    if (displayDiv.innerText.length < 11) {                   // limit the length of the equation to display width (12 digits)
        flash_yellow(element);
        finished = false;
        console.log(operators.includes(last_pressed));
        if (operators.includes(last_pressed)) {    
            console.log(equation);                                     
            equation = equation.slice(0,equation.length-1);     // if operator button pressed 2 times, remove last operator
            console.log(equation); 
            displayDiv.innerText = displayDiv.innerText.slice(0,displayDiv.innerText.length-1);                                 
        }
        for (let i = 0; i < operators2.length; i++) {
            if (equation.includes(operators2[i])) {          // is there already an operator in the equation?
                should_calculate = true;
            }
        } 
        if (should_calculate == true) {                      // if so, evaluate equation and display result
            equation = String(eval(equation));
            displayDiv.innerText = equation.substring(0,11);    
            should_calculate = false;      
        } 
        if (operator == '+' || operator == '-') {
            equation += operator;
        } else if (operator == 'x') {
            equation += '*';
        } else {
            equation += '/';
        }
        displayDiv.innerText += operator;
        last_pressed = operator;

    } // if (last_pressed != undefined)
}

function clr(element){                                              // reset all values
    flash_yellow(element);
    displayDiv.innerText = 0;
    equation = '0';
    last_pressed = '0';
}

function calculate(element) {
    let end_of_equation = equation.slice(equation.length-1,equation.length)  
        if (operators2.includes(end_of_equation) == false) {        // doesn't run if equation ends with operator
            flash_yellow(element);
            answer = String(eval(equation));
            displayDiv.innerText = answer.substring(0,5);
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
