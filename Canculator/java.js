// creates an object to keep track of values 
const Calculator = {
    // this is display 0 on the screen
    Display_Value: '0'
    // this wil hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    //  this will hold the operator, we set it to nullfor now
    operator: null,

};


// this modifies values each time a button is cliked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we qare checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrites Display_Value if the current value is 0
        // otherwise is adds onto it 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;

    }
}


// this section handkes decimal points
function Input_Decimal(dot) {
    // this ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // we are saying that if the Display_Value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value + - dot;
    }
}


// this section handles operaytors
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when an operator key is pressed, we convert the current number
    // displayed on the screen to a number and then store the result in 
    // Calculatopr.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Diplay_Value);
    // checks if an operator already exist and if Wait_Second_Operand is true,
    // then updates the operator and exists from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;

    } else if (operator) {//checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup is performed for the operator
        // in the pERFORM_cALCULATION OBJECT AND THE FUNCTION that matches the
        // operator is exexuted
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // here we add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // this will remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = 
