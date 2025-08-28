# Calculator WebApp - Material Design Specifications & Development Plan

## Project Overview

**Goal**: Build a beautiful, simple calculator web application using Google's Material Design 3 principles with basic arithmetic operations only.

**Tech Stack**:
- HTML5
- CSS3 with Material Design 3 guidelines
- Vanilla JavaScript (client-side only)
- Material Symbols (Google's icon font)

**Core Features**:
- Basic operations: +, -, ×, ÷
- Clear (AC) and Delete functions
- Decimal point support
- Clean Material Design 3 interface
- Mobile-responsive design

---

## Development Chunks

### 📦 Chunk 1: Project Setup & Material Design Foundation

**Claude Code Prompt:**
```
Create a simple calculator webapp with Material Design 3. Set up index.html with:
- Material Symbols font integration from Google Fonts
- Material Design 3 color system using CSS custom properties
- A card-based calculator container with elevation
- Display area with Material Design typography
- Button grid (numbers 0-9, operations +, -, ×, ÷, equals, clear, decimal point)
- Responsive meta tags and structure
```

**Acceptance Criteria:**
- [ ] Material Symbols font is loaded
- [ ] MD3 color variables defined in CSS
- [ ] Calculator in elevated card container
- [ ] Display uses MD3 typography scale
- [ ] All basic buttons present (0-9, +, -, ×, ÷, =, AC, .)
- [ ] Mobile-responsive viewport configured

**File Structure:**
```
calculator/
├── index.html
├── style.css
└── script.js
```

---

### 🎨 Chunk 2: Material Design 3 Complete Styling

**Claude Code Prompt:**
```
Style the calculator with Material Design 3 principles:
- Use MD3 color system (purple primary, proper surface colors)
- Add ripple effects on all buttons using CSS animations
- Style card with proper MD3 elevation (level 1)
- Different button styles: filled for equals, tonal for operators, text for numbers
- State layers for hover, pressed, and focus states
- 4-column responsive grid layout
- Support for automatic light/dark theme based on system preference
- Smooth transitions with MD3 motion principles
```

**Acceptance Criteria:**
- [ ] MD3 purple color scheme applied
- [ ] Ripple animation on button clicks
- [ ] Proper elevation shadow on card
- [ ] Three button variants (filled, tonal, text)
- [ ] Hover and pressed states visible
- [ ] 4-column grid layout works
- [ ] Dark mode activates automatically
- [ ] All transitions smooth (250ms standard easing)

**Color System:**
```css
:root {
  /* Light theme */
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #EADDFF;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-surface: #FEF7FF;
  --md-sys-color-surface-variant: #E7E0EC;
  --md-sys-color-outline: #79747E;
}

@media (prefers-color-scheme: dark) {
  :root {
    --md-sys-color-primary: #D0BCFF;
    --md-sys-color-on-primary: #381E72;
    --md-sys-color-primary-container: #4F378B;
    --md-sys-color-secondary-container: #4A4458;
    --md-sys-color-surface: #1C1B1F;
    --md-sys-color-surface-variant: #49454F;
    --md-sys-color-outline: #938F99;
  }
}
```

---

### ⚙️ Chunk 3: Core Calculator Logic

**Claude Code Prompt:**
```
Implement basic calculator functionality in JavaScript:
- Handle number input (0-9) and display updates
- Implement four operations: addition, subtraction, multiplication, division
- Add equals button to calculate results
- Clear (AC) button to reset everything
- Decimal point support (only one per number)
- Handle operation chaining (e.g., 2 + 2 + 2)
- Prevent errors like division by zero
- All calculations client-side, no backend needed
```

**Acceptance Criteria:**
- [ ] Numbers appear on display when clicked
- [ ] Can input multi-digit numbers
- [ ] Four operations work correctly
- [ ] Equals calculates correct result
- [ ] AC clears display and resets state
- [ ] Decimal point works (one per number)
- [ ] Can chain operations
- [ ] Division by zero shows "Error"
- [ ] No backend calls

**State Management:**
```javascript
let currentValue = '0';
let previousValue = null;
let operation = null;
let waitingForNewValue = false;
```

---

### 🎯 Chunk 4: Material Design Interactions

**Claude Code Prompt:**
```
Add Material Design interactions and polish:
- Implement proper ripple effect from click point on buttons
- Add button scale animation on press (0.95 scale)
- Display fade transition when numbers change
- Add keyboard support for all operations
- Include subtle sound feedback for button clicks (optional, off by default)
- Error shake animation for invalid operations
- Loading fade-in animation when page loads
- Smooth number transitions in display
```

**Acceptance Criteria:**
- [ ] Ripple originates from click position
- [ ] Buttons scale down slightly when pressed
- [ ] Display updates smoothly
- [ ] Keyboard input works (0-9, +, -, *, /, Enter, Escape)
- [ ] Error state has shake animation
- [ ] Page load has fade-in effect
- [ ] All animations use MD3 timing (250ms)

**Key Bindings:**
```
0-9: Number input
+: Addition
-: Subtraction
*: Multiplication
/: Division
Enter or =: Calculate
Escape or C: Clear
Backspace: Delete last digit
.: Decimal point
```

---

### 📱 Chunk 5: Responsive Design & Mobile Optimization

**Claude Code Prompt:**
```
Optimize calculator for all devices:
- Make buttons larger on mobile for easy tapping (minimum 48dp touch targets)
- Adjust calculator width for different screen sizes
- Add viewport handling for landscape orientation
- Implement touch feedback with haptic vibration (where supported)
- Prevent zoom on input focus for mobile
- Ensure display text scales appropriately
- Add swipe left gesture on display to delete last digit
- Test and optimize for tablets
```

**Acceptance Criteria:**
- [ ] Minimum 48dp touch targets on mobile
- [ ] Calculator fits well on all screen sizes
- [ ] Works in portrait and landscape
- [ ] Haptic feedback on supported devices
- [ ] No unwanted zoom on mobile
- [ ] Display text readable on all devices
- [ ] Swipe to delete works on touch devices
- [ ] Tablet layout optimized

**Breakpoints:**
```css
/* Mobile: < 600px */
/* Tablet: 600px - 1024px */
/* Desktop: > 1024px */
```

---

### ✨ Chunk 6: Final Polish & Edge Cases

**Claude Code Prompt:**
```
Add final polish and handle all edge cases:
- Limit display to prevent overflow (max 12 digits)
- Format large numbers with commas (1,000,000)
- Handle consecutive operators gracefully (replace previous)
- Add subtle shadows and depth to buttons
- Implement proper focus management for accessibility
- Add ARIA labels for screen readers
- Prevent multiple decimal points
- Handle very small/large numbers with scientific notation
- Add "Error" display for invalid operations
```

**Acceptance Criteria:**
- [ ] Display shows max 12 digits
- [ ] Numbers > 999 show commas
- [ ] Consecutive operators handled correctly
- [ ] All buttons have proper shadows
- [ ] Tab navigation works correctly
- [ ] Screen reader compatible
- [ ] Scientific notation for very large/small numbers
- [ ] Clear error messages

---

### 📝 Chunk 7: Documentation & Deployment

**Claude Code Prompt:**
```
Create documentation and prepare for deployment:
- Write a README.md with features and usage instructions
- Add inline code comments for complex logic
- Create a simple test checklist for manual testing
- Optimize performance (minify CSS/JS if needed)
- Add favicon and app icons
- Set up GitHub Pages deployment
- Include keyboard shortcuts guide
- Document any known limitations
```

**Acceptance Criteria:**
- [ ] README.md complete with screenshots
- [ ] Code has helpful comments
- [ ] Test checklist covers all operations
- [ ] Performance optimized (< 100KB total)
- [ ] Favicon and icons added
- [ ] Deployed to GitHub Pages
- [ ] Keyboard guide included
- [ ] Known issues documented

---

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#6750A4">
    <title>Material Calculator</title>
    
    <!-- Material Symbols -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    
    <!-- Google Fonts - Roboto -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <div class="display-text">0</div>
        </div>
        <div class="buttons">
            <!-- Button grid will go here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

---

## CSS Structure

```css
/* Material Design 3 Variables */
:root {
    /* Colors */
    --md-sys-color-primary: #6750A4;
    --md-sys-color-on-primary: #FFFFFF;
    --md-sys-color-primary-container: #EADDFF;
    --md-sys-color-on-primary-container: #21005D;
    --md-sys-color-surface: #FEF7FF;
    --md-sys-color-surface-variant: #E7E0EC;
    
    /* Typography */
    --md-sys-typescale-display-medium: 45px;
    --md-sys-typescale-label-large: 14px;
    
    /* Motion */
    --md-sys-motion-duration: 250ms;
    --md-sys-motion-easing: cubic-bezier(0.2, 0, 0, 1);
    
    /* Elevation */
    --md-sys-elevation-1: 0 1px 2px rgba(0, 0, 0, 0.3), 
                          0 1px 3px 1px rgba(0, 0, 0, 0.15);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --md-sys-color-primary: #D0BCFF;
        --md-sys-color-on-primary: #381E72;
        --md-sys-color-surface: #1C1B1F;
        --md-sys-color-surface-variant: #49454F;
    }
}
```

---

## JavaScript Structure

```javascript
// Calculator state
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

// Update display
function updateDisplay() {
    const display = document.querySelector('.display-text');
    display.textContent = calculator.displayValue;
}

// Handle digit input
function inputDigit(digit) {
    // Implementation
}

// Handle operators
function handleOperator(nextOperator) {
    // Implementation
}

// Perform calculation
function calculate(firstOperand, secondOperand, operator) {
    switch(operator) {
        case '+': return firstOperand + secondOperand;
        case '-': return firstOperand - secondOperand;
        case '×': return firstOperand * secondOperand;
        case '÷': return firstOperand / secondOperand;
        default: return secondOperand;
    }
}
```

---

## Testing Checklist

### Basic Operations
- [ ] Addition: 5 + 3 = 8
- [ ] Subtraction: 10 - 4 = 6
- [ ] Multiplication: 6 × 7 = 42
- [ ] Division: 15 ÷ 3 = 5

### Decimal Numbers
- [ ] 0.1 + 0.2 = 0.3
- [ ] 5.5 × 2 = 11
- [ ] 10 ÷ 4 = 2.5

### Edge Cases
- [ ] Division by zero shows "Error"
- [ ] Multiple decimals prevented (1.2.3 not allowed)
- [ ] Very large numbers display correctly
- [ ] Consecutive operators handled (5 + - 3 becomes 5 - 3)

### User Interface
- [ ] All buttons clickable
- [ ] Keyboard input works
- [ ] Display updates immediately
- [ ] Clear button resets everything
- [ ] Dark mode works automatically

---

## Deployment Steps

1. **Test Locally**
   ```bash
   # Open index.html in browser
   # Test all operations
   ```

2. **Optimize Files**
   ```bash
   # Minify CSS and JS if needed
   # Ensure total size < 100KB
   ```

3. **Deploy to GitHub Pages**
   ```bash
   git add .
   git commit -m "Material Design Calculator"
   git push origin main
   # Enable GitHub Pages in repository settings
   ```

4. **Verify Deployment**
   - Test on mobile devices
   - Check all operations work
   - Verify responsive design

---

## Success Metrics

- ✅ All basic operations work correctly
- ✅ Material Design 3 guidelines followed
- ✅ Responsive on all devices
- ✅ Page loads in < 2 seconds
- ✅ No JavaScript errors in console
- ✅ Accessible via keyboard
- ✅ Total file size < 100KB