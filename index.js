// Generate balloons with varied colors and positions
const balloonContainer = document.getElementById("balloon-container");
const colors = ["#ffc0cb", "#ffb6b9", "#ffcad4", "#ffe0ec", "#fadadd"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = `${random(0, 100)}vw`;
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.animationDuration = `${random(8, 16)}s`;
  balloon.style.opacity = random(0.6, 1);
  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 16000);
}

setInterval(createBalloon, 300);


function toggleLetter() {
    const letter = document.getElementById('birthday-letter');
    if (letter.style.display === 'block') {
      letter.style.display = 'none';
    } else {
      letter.style.display = 'block';
    }
  }
  