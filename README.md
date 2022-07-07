# calculator
This is a simple javascript calculator app with no backend or framework.
The main point of this project was to practice DOM manipulation and simple animations, but I found the logic surprisingly more complex than I thought it would be.
I used helper functions in order to follow the 'DRY' principle ('Don't Repeat Yourself').
I displayed the traditional symbols for mathematical operations ( + - x ÷ ) instead of the symbols used by JavaScript ( + - * / ), so it was necessary to keep track of two parallel equations; the visible equation in the DOM and the unseen equation in the JavaScript.

After the calculator is reset using "C", or after the "=" button is pushed: 
The first time a number key is pressed, it will overwrite the existing number ('0' or result) in both the JavaScript equation and the DOM equation.
All subsequent number key presses will add to the end of the number like a real calculator would, rather than overwrite the existing number.
In order to balance style with function, the number of characters in the display is limited to the width of the display; about 13 characters.

If an operator key is pressed, it will be added to the end of the equation, but the '=' button will not function if the equation ends with an operator.
If an operator key is pressed two times in a row, then the second operator pressed will replace the first operator.
If an operator key is pressed, and there is already an operator in the equation, (1+1 or 9÷3), then the equation will calculate the answer, and add the new operator to the end of the answer (2+ or 3÷).

Anything divided by 0 = Infinity or -Infinity, but there are 3 outliers:
'0/0', 'Infinity x 0', and '-Infinity x 0' all result in 'NaN'.
For these three outliers, the app will display 'broke my brain', and will not function until the 'C' button is pressed.

The 'C' button resets all variables to their original values.

Both the '=' button and the operator buttons use a helper function to calculate the answer to the equation and manipulate the DOM.
This avoids repeating the same code multiple times.

After the '=' button is pressed, the result of the equation is displayed.
If a number key is pressed immediately after the '=' key, then that number will overwrite the displayed result.
If an operator key is pressed immediately after the '=' key, then that operator will append to the end of the displayed result rather than overwrite it.

