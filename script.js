let screenvalue = '';

function chuttikar(number) {
  screenvalue = screenvalue + number;
  document.getElementById('display').value = screenvalue;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

// function clearDisplay() {
//   const display = document.getElementById('display');
//   display.value = ''; // Clear the display
//   display.focus(); // Set focus to the input element to prevent old data from reappearing
// }

function kaamkar(operation) {
  if (operation === '*') {
    screenvalue += ' x ';
  } else {
    screenvalue += ' ' + operation + ' ';
  }
  document.getElementById('display').value = screenvalue;
}

function backspace() {
  if (screenvalue.length > 0) {
    screenvalue = screenvalue.slice(0, -1);
    document.getElementById('display').value = screenvalue;
  }
}

function jawabnikalkada() {
  const expression = screenvalue;

  if (!expression) {
    alert("Enter an expression.");
    return;
  }

  try {
    // Replace 'x' with '*' for evaluation
    const evalExpression = expression.replace(/x/g, '*');
    const result = eval(evalExpression);

    if (isNaN(result)) {
      alert("Invalid expression.");
      return;
    }

    screenvalue = result.toString();
    document.getElementById('display').value = screenvalue;
  } catch (error) {
    alert("An error occurred while evaluating the expression.");
  }
}


function calculateTrig(func) {
  const angleString = document.getElementById('display').value;

  if (!angleString) {
    alert(`Enter an angle in degrees for ${func}:`);
    return;
  }

  const angle = parseFloat(angleString);


  switch (func) {
    case 'cos':
      const cosValue = Math.cos((angle * Math.PI) / 180);
      screenvalue = cosValue.toString();
      break;
    case 'sin':
      const sinValue = Math.sin((angle * Math.PI) / 180);
      screenvalue = sinValue.toString();
      break;
    case 'tan':
      const tanValue = Math.tan((angle * Math.PI) / 180);
      screenvalue = tanValue.toString();
      break;
    default:
      alert("Invalid function.");
      return;
  }

  document.getElementById('display').value = screenvalue;
}




// For changing heading color:
const heading = document.getElementById('changing-heading');
const colors = ['color-change1', 'color-change2', 'color-change3', 'color-change4', 'color-change5', 'color-change6'];
let currentIndex = 0;

setInterval(() => {
  heading.classList.remove(colors[currentIndex]);
  currentIndex = (currentIndex + 1) % colors.length;
  heading.classList.add(colors[currentIndex]);
}, 700); // Change color every 0.7 second (adjust timing as needed)



// For animated text
const letters = document.querySelectorAll('.marquee-letter');

        letters.forEach((letter, index) => {
            const delay = index * 100; // Adjust the delay as needed
            const animationDuration = 900; // Adjust the animation duration as needed
            const translateY = '10px'; // Adjust the vertical movement as needed

            letter.style.animation = `wave ${animationDuration}ms infinite ${delay}ms`;
            letter.style.animationTimingFunction = 'linear';
            letter.style.transform = `translateY(${translateY})`;
        });