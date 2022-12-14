// creates an object to keep track of values
const Calculator = {
    // this is displays 0 on the screen
    Dispaly_Value: '0',
    // this will hold the first operand fore any expressions, we set it to null
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, we set it to null for now
    operator: null,
};


// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const {
        Display_Value,
        Wait_Second_Oprand
    } = Calculator;
    // we are checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key thet ws clicked.
    if (Wait_Second / _Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }

} ////// <===========HERE 
//   this section handles decimal points
function Input_Decimal(dot) {
    // this ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // we are sahying that if the Display_vALUE DOES NOT CONTYAIN A DECIMAL POINT
        // WE WANT TO ADD A DECIMAL POINT
        Calculator.Display_Value += dot;
    }
}


// this section handles operators
function Handle_Operator(Next_Operator) {
    const {
        First_Operand,
        Display_Value,
        operator
    } = Calculator
    // when an operator key is presses, we convert thje current number
    // displayed on the screen to a number and then store the resulkt in
    // Calculator.Foirst_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // Checks if an operator already exists and if Wait_Second_oPERAND IS TRUE,
    // THEN UPDATED THE OPERATOR AND EXITS FROM THE FUNCTION
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // IF OPERATOR EXISTS, PROPERTY LOOKUP is premormend for the operator
        // in the Perform_Calculation object and the function thet matches the
        // operator is exscuted
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // here we add a fixed amount of numbers after the decimal
        result = (result * 1).toString()
        Calculator.First_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

}

Calculator.Wait_Second_Operand = true;
Calculator.operator = Next_Operator;


const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand

};

function Calculator_Reset() {
    Calculator.Dispaly_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the screen withj the contents of Display_Value

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.Value = Calculator.Display_Value;
}

Update_Display();
// thos section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object thet represents the element
    // thet was clicked
    const {
        target
    } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
