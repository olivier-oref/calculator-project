// Calculator State Management
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

// Update display function
function updateDisplay() {
    const display = document.querySelector('.display-text');
    display.textContent = calculator.displayValue;
}

// Handle digit input
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

// Handle decimal input
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
    } else if (calculator.displayValue.indexOf(dot) === -1) {
        calculator.displayValue += dot;
    }
}

// Clear all (AC button)
function clear() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

// Delete last digit (DEL button)
function deleteLast() {
    const { displayValue } = calculator;
    
    if (displayValue.length > 1) {
        calculator.displayValue = displayValue.slice(0, -1);
    } else {
        calculator.displayValue = '0';
    }
}

// Perform calculation
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '×':
            return firstOperand * secondOperand;
        case '÷':
            if (secondOperand === 0) {
                return 'Error';
            }
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Handle operator input
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // Handle consecutive operators
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        
        if (result === 'Error') {
            calculator.displayValue = 'Error';
            calculator.firstOperand = null;
            calculator.operator = null;
            calculator.waitingForSecondOperand = true;
            return;
        }

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Handle equals button
function handleEquals() {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null || operator === null) {
        return;
    }

    const result = calculate(firstOperand, inputValue, operator);
    
    if (result === 'Error') {
        calculator.displayValue = 'Error';
        calculator.firstOperand = null;
        calculator.operator = null;
        calculator.waitingForSecondOperand = true;
    } else {
        calculator.displayValue = String(result);
        calculator.firstOperand = null;
        calculator.operator = null;
        calculator.waitingForSecondOperand = true;
    }
}

// Enhanced ripple effect with click position
function createRipple(event, button) {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    button.style.setProperty('--ripple-x', x + 'px');
    button.style.setProperty('--ripple-y', y + 'px');
    
    // Update CSS for positioned ripple
    const ripple = button.querySelector('::before') || button;
    
    button.classList.add('ripple-active');
    setTimeout(() => {
        button.classList.remove('ripple-active');
    }, 600);
}

// Display animation helper
function animateDisplayChange(newValue) {
    const display = document.querySelector('.display-text');
    
    if (newValue === 'Error') {
        display.classList.add('shake');
        setTimeout(() => {
            display.classList.remove('shake');
        }, 500);
    }
    
    // Subtle fade transition for normal updates
    display.classList.add('fade-out');
    setTimeout(() => {
        display.textContent = newValue;
        display.classList.remove('fade-out');
        display.classList.add('fade-in');
        setTimeout(() => {
            display.classList.remove('fade-in');
        }, 100);
    }, 50);
}

// Enhanced update display with animations
function updateDisplay() {
    const display = document.querySelector('.display-text');
    const newValue = calculator.displayValue;
    
    if (display.textContent !== newValue) {
        if (newValue === 'Error') {
            display.classList.add('shake');
            setTimeout(() => {
                display.classList.remove('shake');
                display.textContent = newValue;
            }, 250);
        } else {
            display.textContent = newValue;
        }
    }
}

// Event handlers with enhanced interactions
function handleButtonClick(event) {
    const target = event.target.closest('.button');
    if (!target) return;
    
    const action = target.dataset.action;
    if (!action) return;

    // Create ripple effect
    createRipple(event, target);
    
    // Add haptic feedback if supported
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }

    switch (action) {
        case 'number':
            inputDigit(target.dataset.number);
            break;
        case 'decimal':
            inputDecimal('.');
            break;
        case 'clear':
            clear();
            break;
        case 'delete':
            deleteLast();
            break;
        case 'operator':
            handleOperator(target.dataset.operator);
            break;
        case 'equals':
            handleEquals();
            break;
    }
    
    updateDisplay();
}

// Keyboard support
function handleKeyboard(event) {
    const key = event.key;
    
    event.preventDefault(); // Prevent default browser behavior
    
    // Find corresponding button and trigger visual feedback
    let targetButton = null;
    
    if (key >= '0' && key <= '9') {
        inputDigit(key);
        targetButton = document.querySelector(`[data-number="${key}"]`);
    } else if (key === '.') {
        inputDecimal('.');
        targetButton = document.querySelector('[data-action="decimal"]');
    } else if (key === '+') {
        handleOperator('+');
        targetButton = document.querySelector('[data-operator="+"]');
    } else if (key === '-') {
        handleOperator('−');
        targetButton = document.querySelector('[data-operator="−"]');
    } else if (key === '*') {
        handleOperator('×');
        targetButton = document.querySelector('[data-operator="×"]');
    } else if (key === '/') {
        handleOperator('÷');
        targetButton = document.querySelector('[data-operator="÷"]');
    } else if (key === 'Enter' || key === '=') {
        handleEquals();
        targetButton = document.querySelector('[data-action="equals"]');
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clear();
        targetButton = document.querySelector('[data-action="clear"]');
    } else if (key === 'Backspace') {
        deleteLast();
        targetButton = document.querySelector('[data-action="delete"]');
    }
    
    // Visual feedback for keyboard input
    if (targetButton) {
        targetButton.classList.add('ripple-active');
        targetButton.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            targetButton.classList.remove('ripple-active');
            targetButton.style.transform = '';
        }, 150);
    }
    
    updateDisplay();
}

// Swipe gesture support for display
function initSwipeGesture() {
    const display = document.querySelector('.display');
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    display.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }, { passive: true });
    
    display.addEventListener('touchend', function(event) {
        endX = event.changedTouches[0].clientX;
        endY = event.changedTouches[0].clientY;
        
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Check if it's a horizontal swipe (left)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX < -30) { // Swipe left
                deleteLast();
                updateDisplay();
                
                // Visual feedback
                display.style.transform = 'translateX(-5px)';
                setTimeout(() => {
                    display.style.transform = '';
                }, 100);
                
                // Haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate(15);
                }
            }
        }
    }, { passive: true });
}

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.buttons');
    buttonContainer.addEventListener('click', handleButtonClick);
    
    // Add keyboard support
    document.addEventListener('keydown', handleKeyboard);
    
    // Add swipe gesture support
    initSwipeGesture();
    
    // Update display initially
    updateDisplay();
    
    console.log('Material Calculator with mobile optimizations loaded');
});