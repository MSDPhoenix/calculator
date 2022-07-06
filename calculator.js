const displayDiv = document.querySelector("#display");
let finished = true;
let result;
let last_pressed;
let equation = ""
let operators = '+ - x ÷'
let operators2 = '+ - * /'

function press(element,digit) {
    flash_yellow(element);
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
        if (equation.length < 12) {
            displayDiv.innerText += digit;
            equation += digit;
        }
    }
    console.log('equation',equation);
    last_pressed = digit;
}

function setOP(element,operator) {
    flash_yellow(element);
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

function clr(element){
    flash_yellow(element);
    displayDiv.innerText = 0;
    equation = '';
    last_pressed = undefined;
}

function calculate(element) {
    let end_of_equation = equation.slice(equation.length-1,equation.length)  
        if (operators2.includes(end_of_equation) == false) {
            console.log("hello");
            flash_yellow(element);
            answer = String(eval(equation));
            if (answer<1000000000000){
                displayDiv.innerText = answer.substr(0,13);
            } else {
                displayDiv.innerText = "Sorry, you broke my brain."    }
            finished = true;
            equation = answer;
            console.log(equation);
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



