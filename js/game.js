// Positions
// position: 0 is Stage
// position: 1 is Hall
// position 2 is Office

// ---HTML elements--- \\
const office = document.getElementById("office");
const menu = document.getElementById("menu");

const leftDoorButton = document.getElementById("leftDoor");
const startButton = document.getElementById("startButton");

const powerDisplay = document.getElementById("power");
const timer = document.getElementById("time");

// ---Game Variables--- \\
let power = 100;
let time = 0;

let leftDoorClosed = false;

// -----Animatronics----- \\

// Freddy
let freddy = {
    name: "Freddy",
    position: 0,
    difficulty: 10,
    moveInterval: 5000,
    timer: null
};

function startFreddy() {
    freddy.timer = setInterval(() => {

        const chance = Math.random() * 20;

        if (chance < freddy.difficulty) {
            freddy.position++;
            console.log(freddy.name + " Moved To " + freddy.position);

            if (freddy.position >= 3) {
                if (leftDoorClosed) {
                    console.log(freddy.name + " Was blocked by the door");

                    freddy.position = 0;
                } else {
                    gameOver();
                }
            }
        }
    }, freddy.moveInterval);
}

// -----Game Logic----- \\

// Winning and Losing
function gameOver() {
    alert("YOU LOSE");
    location.reload();
}

function gameWin() {
    alert("YOU SURVIVED");
    location.reload();
}

// Start The Game
startButton.addEventListener("click", () => {
    menu.style.display = "none";
    office.style.display = "flex";

    // Start Animatronics
    if (freddy.difficulty > 0) startFreddy();

    // Start Main Game Loop
    setInterval(gameLoop, 1000);

    // Left Door
    leftDoorButton.addEventListener("click", function () {
        leftDoorClosed = !leftDoorClosed;
        console.log("Left door closed: " + leftDoorClosed);
    })
})

// Main Game Loop
function gameLoop() {
    // Time
    time++;

    if (time >= 270) {
        clearInterval(gameLoop);
        gameWin();
        return;
    }

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")} AM`;

    timer.textContent = formattedTime;

    // Drain Power
    power -= .5;
    if (leftDoorClosed) power -= 1;

    if (power <= 0) {
        power = 0;
        gameOver();
    }
    powerDisplay.textContent = `Power: ${Math.floor(power)}%`;
};