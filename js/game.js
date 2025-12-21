// HTML elements \\
const menu = document.getElementById("menu");
const office = document.getElementById("office");
const startButton = document.getElementById("startBtn");
const leftDoorButton = document.getElementById("leftDoor");
const powerDisplay = document.getElementById("power");

// Game variables \\
let power = 100;
let leftDoorClosed = false;
let FredbearHere = false;

// Start Night \\
startButton.addEventListener('click', () => {
    menu.style.display = 'none';
    office.style.display = 'flex';
    setInterval(gameLoop, 1000);
});

// Closing the door \\
leftDoorButton.addEventListener("mousedown", () => leftDoorClosed = !leftDoorClosed);

// Game Loop \\
function gameLoop() {
    
}