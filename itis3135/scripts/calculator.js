let displayValue = 0;
let firstValue = 0;
let secondValue = 0;
let numDecimalSpots = 0;
let decimalUsed = false;
let repeat = false;
let action = "";

function updateDisplay() {
    document.getElementById("calculator-display").innerHTML = displayValue;
}

function clearDisplay() {
    displayValue = 0.0;
    updateDisplay();
    firstValue = 0;
    secondValue = 0;
    numDecimalSpots = 0;
    decimalUsed = false;
    repeat = false;
    console.log("cleared!");
}

function toggleSign() {
    displayValue *= -1;
    updateDisplay();
}

function percentage() {
    displayValue /= 100;
    updateDisplay();
}

function updateAction(buttonAction) {
    action = buttonAction
    firstValue = displayValue;
    displayValue = null;
    numDecimalSpots = false;
    decimalUsed = false;
    updateDisplay();
    console.log(action);
    displayValue = 0;
    repeat = false;
}

function addToDisplay(num) {
    if (!decimalUsed) {
        displayValue *= 10;
        displayValue += num;
    } else {
        numDecimalSpots++;
        let numToAdd = num;
        for (let i = 0; i < numDecimalSpots; i++) {
            numToAdd /= 10;
        }
        displayValue += numToAdd;
        displayValue = parseFloat(displayValue.toFixed(numDecimalSpots));
    }
    updateDisplay();
}

function decimal() {
    decimalUsed = true;
}

function equals() {
    secondValue = displayValue;
    switch(action) {
        case "add":
            displayValue = firstValue + secondValue;
            break;
        case "subtract":
            displayValue = firstValue - secondValue;
            break;
        case "multiply":
            displayValue = firstValue * secondValue;
            break;
        case "divide":
            displayValue = firstValue / secondValue;
            break;
    }
    updateDisplay();
    repeat = true;
}

window.onload = function() {
    document.getElementById("calculator-clear").onclick = clearDisplay;
    document.getElementById("calculator-sign").onclick = toggleSign;
    document.getElementById("calculator-percentage").onclick = percentage;
    document.getElementById("calculator-divide").onclick = function() { updateAction("divide") };
    document.getElementById("calculator-multiply").onclick = function() { updateAction("multiply") };
    document.getElementById("calculator-subtract").onclick = function() { updateAction("subtract") };
    document.getElementById("calculator-add").onclick = function() { updateAction("add") };
    document.getElementById("calculator-0").onclick = function() { addToDisplay(0) };
    document.getElementById("calculator-1").onclick = function() { addToDisplay(1) };
    document.getElementById("calculator-2").onclick = function() { addToDisplay(2) };
    document.getElementById("calculator-3").onclick = function() { addToDisplay(3) };
    document.getElementById("calculator-4").onclick = function() { addToDisplay(4) };
    document.getElementById("calculator-5").onclick = function() { addToDisplay(5) };
    document.getElementById("calculator-6").onclick = function() { addToDisplay(6) };
    document.getElementById("calculator-7").onclick = function() { addToDisplay(7) };
    document.getElementById("calculator-8").onclick = function() { addToDisplay(8) };
    document.getElementById("calculator-9").onclick = function() { addToDisplay(9) };
    document.getElementById("calculator-decimal").onclick = decimal;
    document.getElementById("calculator-equals").onclick = equals;
}