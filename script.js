// Define ball and shuffle button elements
const ball = document.getElementById('ball');
const shuffleButton = document.getElementById('shuffleButton');

// Predefined positions for the ball (matching invisible cup positions)
const positions = [250, 350, 450]; // Cup 1, Cup 2, Cup 3 positions in px

// Shuffle Logic
function shuffleBall() {
    // Pick a random position for the ball
    const randomIndex = Math.floor(Math.random() * positions.length);
    const newPosition = positions[randomIndex];

    // Move the ball smoothly
    ball.style.transform = `translate(${newPosition}px, -50%)`;
}

// Attach Shuffle Button Event Listener
shuffleButton.addEventListener('click', shuffleBall);

