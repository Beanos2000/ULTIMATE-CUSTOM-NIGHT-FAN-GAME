// Positions
// position: 0 is Stage
// position: 1 is Hall
// position 2 is Office

// ---HTML elements--- \\
const office = document.getElementById("office");
const leftDoorButton = document.getElementById("leftDoor");
const powerDisplay = document.getElementById("power");
const timer = document.getElementById("time");

// ---Game Variables--- \\
let power = 100;
let time = 0;
let gameActive = true;

let leftDoorClosed = false;

// Animatronics \\

// Animatronic
let freddy = {
    name: "Freddy",
    position: 0,
    difficulty: 10,
    moveInterval: 5000,
    timer: null
};

function startFreddy() {
    freddy.timer = setInterval(() => {
        if (!gameActive) return;

        const chance = Math.random() * 20;

        if (chance < freddy.difficulty) {
            freddy.position++;
            console.log(freddy.name + " Moved To " + freddy.position);
            
            if (freddy.position >= 3) {
                if (leftDoorClosed) {
                    console.log(freddy.name + " Was blocked by the door");
                    
                    freddy.position = 0;
                } else {
                    alert("JUMPSCARE BY FREDDY");

                    location.reload();
                }
            }
        }
    }, freddy.moveInterval);
}

// ---Game Logic--- \\

if (gameActive) {
    // Check for active animatronics
    if (freddy.difficulty > 0) {
        startFreddy();
    }

    //-- Time
    const timeInterval = setInterval(() => {
        time++;

        if (time >= 270) {
            clearInterval(timeInterval);
            return;
        }

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")} AM`;

        timer.textContent = formattedTime;
    }, 1000);

    leftDoorButton.addEventListener("click", function() {
        leftDoorClosed = !leftDoorClosed;
        console.log("Left door closed: " + leftDoorClosed);
    })
}