const display = document.getElementById('display');

function append(input) {
    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        let result = eval(display.value);

        if (result.toString().includes('.')) {
            result = parseFloat(result.toFixed(4));
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

/* ✅ KEYBOARD SUPPORT (ADDED) */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers (0-9)
    if (!isNaN(key)) {
        append(key);
    }

    // Operators
    else if (["+", "-", "*", "/"].includes(key)) {
        append(key);
    }

    // Decimal
    else if (key === ".") {
        append(".");
    }

    // Enter = calculate
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = delete
    else if (key === "Backspace") {
        backspace();
    }

    // Escape or Delete = clear
    else if (key === "Escape" || key === "Delete") {
        clearDisplay();
    }
});