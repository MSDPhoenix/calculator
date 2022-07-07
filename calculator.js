const displayDiv = document.querySelector("#display");
let finished = true;
let last_pressed = '0';
let equation = '0';
let operators = '+ - x ÷';
let operators2 = '+ - * /';
let should_calculate = false;

function press(element,digit) {
    flash_yellow(element);
    if (finished == true){                                  // first number key pressed after calculator is reset  
        displayDiv.innerText = digit;                       // overwrites the current equation, display
        equation = String(digit);
        finished = false;
    } else {                                                // if it's not the first number key pressed, 
        if (displayDiv.innerText.length < 12) {             // it adds to the end of equation
            displayDiv.innerText += digit;
            equation += digit;
        }
    }
    last_pressed = digit;
}

function setOP(element,operator) {
    if (displayDiv.innerText.length < 11) {                 // limit the length of the equation to display width (11 characters + operator + 1 characters)
        flash_yellow(element);
        finished = false;
        if (operators.includes(last_pressed)) {             // if operator button pressed 2 times, remove last operator, (add new operator below)
            equation = equation.slice(0,equation.length-1);     
            displayDiv.innerText = displayDiv.innerText.slice(0,displayDiv.innerText.length-1);                                 
        }
        for (let i = 0; i < operators2.length; i++) {
            if (equation.includes(operators2[i])) {          // is there already an operator in the equation?
                should_calculate = true;
            }
        } 
        if (should_calculate == true) {                      // if so, evaluate equation and display result
            equation = find_answer();
            should_calculate = false;      
        } 
        last_pressed = operator;
        if (equation != 'NaN'){                                     // outliers: (Infinity x 0) or (0/0) = NaN => 'broke my brain'
            if (operator == '+' || operator == '-') {                               
                equation += operator;                               // add new operator to equation
            } else if (operator == 'x') {
                equation += '*';
            } else {
                equation += '/';
            }
            displayDiv.innerText += operator;                       // add new operator to  display
        }
    } 
}

function clr(element){                                      // reset all values
    flash_yellow(element);
    displayDiv.innerText = 0;
    finished = true;
    last_pressed = '0';
    equation = '0';
}

function calculate(element) {
    let end_of_equation = equation.slice(equation.length-1,equation.length)  
    if (operators2.includes(end_of_equation) == false) {        // doesn't run if equation ends with operator
        flash_yellow(element);
        equation = find_answer();                               // if a number is pressed immediately after 0, then equation is over-written by the first number pressed
        finished = true;                                        // if an operator is pressed immediately after '=', then the equation keeps the value given here 
    }
}

function find_answer() {
    answer = String(eval(equation));
    if (answer == "NaN"){                               // any number divided by 0 is infinity or -infinity (8 0r 9 characters)
        displayDiv.innerText = 'broke my brain';        // 0 divided by 0 = NaN, infinity x 0 = NaN 
    } else {
        displayDiv.innerText = answer.substring(0,9);
    }
    return answer
}

function scale(element,value){                          // animations
    element.style.transform = "scale("+value+")";
}

function flash_yellow(element) {
    element.classList.add("flash_yellow");
    setTimeout(remove_yellow,600,element);
}
function remove_yellow(element) {
    element.classList.remove("flash_yellow");
}


