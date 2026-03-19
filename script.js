const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Note: eval() is used here for simplicity in a basic project. 
        // In advanced apps, consider writing a custom parser for security.
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error';
    }
}