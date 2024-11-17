function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (value === '÷') {
        display.value += '/';
    } else if (value === '×') {
        display.value += '*';
    } else {
        display.value += value;
    }
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
