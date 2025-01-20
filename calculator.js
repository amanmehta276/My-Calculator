const display = document.getElementById('display');

// Append a value to the display
function append(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Remove the last character
function backspace() {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

// Calculate percentage
function percent() {
    display.textContent = parseFloat(display.textContent) / 100;
}

// Perform the calculation
function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
    } catch {
        display.textContent = 'Error';
    }
}