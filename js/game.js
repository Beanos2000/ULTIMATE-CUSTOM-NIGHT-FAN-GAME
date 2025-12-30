// ---HTML elements--- \\
const office = document.getElementById("office");
const menu = document.getElementById("menu");
const cameras = document.getElementById("camera");

const ventButton = document.getElementById("ventButton");
const maskButton = document.getElementById("maskButton");
const lightButton = document.getElementById("lightButton");

const startButton = document.getElementById("startButton");

const powerDisplay = document.getElementById("power");
const timer = document.getElementById("time");

// Freddy
const increaseFreddyButton = document.getElementById("increaseFreddy");
const decreaseFreddyButton = document.getElementById("decreaseFreddy");
const freddyDifficultyText = document.getElementById("freddyDiffiulty");
let freddyDifficultyValue = 0;

// Bonnie
const increaseBonnieButton = document.getElementById("increaseBonnie");
const decreaseBonnieButton = document.getElementById("decreaseBonnie");
const bonnieDifficultyText = document.getElementById("bonnieDiffiulty");
let bonnieDifficultyValue = 0;

//Chicka
const increaseChickaButton = document.getElementById("increaseChicka");
const decreaseChickaButton = document.getElementById("decreaseChicka");
const ChickaDifficultyText = document.getElementById("ChickaDiffiulty");
const cupcakeButton = document.getElementById("cupcakeButton");
let chickaDifficultyValue = 0;

//Foxy
const increaseFoxyButton = document.getElementById("increaseFoxy");
const decreaseFoxyButton = document.getElementById("decreaseFoxy");
const FoxyDifficultyText = document.getElementById("FoxyDiffiulty");
let foxyDifficultyValue = 0;

// ---Game Variables--- \\
let power = 100;
let time = 0;

let ventClosed = false;
let maskOn = false;
let lightOn = false;

let loseReason = "";

// -----Animatronics----- \\

// Freddy
let freddy = {
    name: "Freddy",
    position: 0,
    difficulty: 0,
    moveInterval: 8000,
    timer: null,
    attackTimer: null
};

increaseFreddyButton.addEventListener("click", () => {
    if (freddyDifficultyValue < 20) {
        freddyDifficultyValue++;
        freddyDifficultyText.textContent = freddyDifficultyValue;
    }
})

decreaseFreddyButton.addEventListener("click", () => {
    if (freddyDifficultyValue > 0) {
        freddyDifficultyValue--;
        freddyDifficultyText.textContent = freddyDifficultyValue;
    }
})

function startFreddy() {
    freddy.timer = setInterval(() => {

        const chance = Math.random() * 20;

        if (chance < freddy.difficulty) {
            freddy.position++;

            if (freddy.position >= 3) {
                console.log("Freddy is approaching the office, close the vent");
                
                freddy.attackTimer = setTimeout(() => {
                    if (ventClosed) {
                        freddy.position = 0;
                        clearInterval(freddy.attackTimer);
                        console.log(freddy.name + " Was blocked by the vent");
                    } else {
                        loseReason = "Freddy, he bit your arm off and crushed your whole body"
                        gameOver();
                    }
                }, 5000);
            }
        }
    }, freddy.moveInterval);
};

// Bonnie
let bonnie = {
    name: "Bonnie",
    position: 0,
    difficulty: 0,
    attackInterval: 12000,
    timer: null,
    attackTimer: null
}

increaseBonnieButton.addEventListener("click", () => {
    if (bonnieDifficultyValue < 20) {
        bonnieDifficultyValue++;
        bonnieDifficultyText.textContent = bonnieDifficultyValue;
    }
})

decreaseBonnieButton.addEventListener("click", () => {
    if (bonnieDifficultyValue > 0) {
        bonnieDifficultyValue--;
        bonnieDifficultyText.textContent = bonnieDifficultyValue;
    }
})

function startBonnie() {
    bonnie.timer = setInterval(() => {
        const chance = Math.random() * 25;

        if (chance < bonnie.difficulty) {
            bonnie.position++;
            console.log("Bonnie is in office, put on the mask");

            if (bonnie.position >= 1) {
                bonnie.attackTimer = setTimeout(() => {
                    if (maskOn) {
                        bonnie.position = 0;
                        bonnie.attackTimer = null;
                        clearInterval(bonnie.attackTimer);
                        console.log("Bonnie was fooled by the mask");
                    } else {
                        bonnie.attackTimer = null;
                        clearInterval(bonnie.attackTimer);
                        loseReason = "Bonnie, he ripped your head off";
                        gameOver();
                    }
                }, 2000);
            }
        }
    }, bonnie.attackInterval);
}

// Chicka
let chicka = {
    name: "Chicka",
    position: 0,
    difficulty: 0,
    attackInterval: 18000,
    cupcake: false,
    timer: null,
    attackTimer: null
}

increaseChickaButton.addEventListener("click", () => {
    if (chickaDifficultyValue < 20) {
        chickaDifficultyValue++;
        ChickaDifficultyText.textContent = chickaDifficultyValue;
    }
})

decreaseChickaButton.addEventListener("click", () => {
    if (chickaDifficultyValue > 0) {
        chickaDifficultyValue--;
        ChickaDifficultyText.textContent = chickaDifficultyValue;
    }
})

function startChicka() {
    chicka.timer = setInterval(() => {
        const chance = Math.random() * 25;

        if (chance < chicka.difficulty) {
            chicka.position++;

            if (chicka.position >= 1) {
                cupcakeButton.style.display = "block";
                console.log("Feed chicka her cupcake");

                chicka.attackTimer = setTimeout(() => {
                    if (chicka.cupcake) {
                        chicka.cupcake = false;
                        chicka.position = 0;
                        clearInterval(chicka.attackTimer);
                        console.log("Chicka ate the cupcake");
                    } else {
                        loseReason = "Chicka, she thought your head was her cupcake and ate it";
                        gameOver();
                    }
                }, 5000);
            }
        }
    }, chicka.attackInterval);
}

// Foxy
let foxy = {
    name: "Foxy",
    position: 0,
    difficulty: 0,
    attackInterval: 15000,
    timer: null,
    attackTimer: null
}

increaseFoxyButton.addEventListener("click", () => {
    if (foxyDifficultyValue < 20) {
        foxyDifficultyValue++;
        FoxyDifficultyText.textContent = foxyDifficultyValue;
    }
})

decreaseFoxyButton.addEventListener("click", () => {
    if (foxyDifficultyValue > 0) {
        foxyDifficultyValue--;
        FoxyDifficultyText.textContent = foxyDifficultyValue;
    }
})

function startFoxy() {
    foxy.timer = setInterval(() => {
        const chance = Math.random() * 25;

        if (chance < foxy.difficulty) {
            foxy.position++;

            if (foxy.position >= 2) {
                console.log("Foxy is here, shine your light");

                foxy.attackTimer = setTimeout(() => {
                    if (lightOn) {
                        foxy.position = 0;
                        clearInterval(foxy.attackTimer);
                        console.log("Foxy was scared by the light");
                    } else {
                        loseReason = "Foxy, he torn you apart and hung you in his cove";
                        gameOver();
                    }
                }, 3000);
            }
        }

    }, foxy.attackInterval);
}

// -----Game Logic----- \\

// Winning and Losing
function stopAllIntervals() {
    clearInterval(gameLoop);
    clearInterval(startFreddy);
    clearInterval(startBonnie);
    clearInterval(startChicka);
    clearInterval(startFoxy);
}

function startAllIntervals() {
    // Start Animatronics
    freddy.difficulty = freddyDifficultyValue;
    if (freddy.difficulty > 0) startFreddy();

    bonnie.difficulty = bonnieDifficultyValue;
    if (bonnie.difficulty > 0) startBonnie();

    chicka.difficulty = chickaDifficultyValue;
    if (chicka.difficulty > 0) startChicka();

    foxy.difficulty = foxyDifficultyValue;
    if (foxy.difficulty > 0) startFoxy();

    // Start Main Game Loop
    setInterval(gameLoop, 1000);
}

function gameOver() {
    stopAllIntervals();

    alert("You lost to " + loseReason);
    location.reload();
}

function gameWin() {
    stopAllIntervals();

    alert("YOU SURVIVED");
    location.reload();
}

// Start The Game
startButton.addEventListener("click", () => {
    menu.style.display = "none";
    office.style.display = "block";

    startAllIntervals();

    // Mask
    maskButton.addEventListener("mouseover", function () {
        maskOn = !maskOn;
        maskButton.style.display = "none";
        console.log("Mask ON: " + maskOn);

        if (maskOn) {
            office.style.backgroundColor = "brown";
        } else {
            office.style.backgroundColor = "black";
        }

        const maskInterval = setInterval(() => {
            maskButton.style.display = "block";
            clearInterval(maskInterval);
        }, 1000);
    });

    // Vent Door
    ventButton.addEventListener("click", function () {
        ventClosed = !ventClosed;

        if (ventClosed) {
            office.style.backgroundColor = "darkgray";
        } else {
            office.style.backgroundColor = "black";
        }

        console.log("Vent closed: " + ventClosed);
    })

    // Light Button
    lightButton.addEventListener("mousedown", function () {
        lightOn = true;
        office.style.backgroundColor = "gray";
        console.log("Light on: " + lightOn);
    })

    lightButton.addEventListener("mouseup", function () {
        lightOn = false;
        office.style.backgroundColor = "black";
        console.log("Light on: " + lightOn);
    })

    // Chicka Cupcake
    cupcakeButton.addEventListener("click", function () {
        chicka.cupcake = true;

        cupcakeButton.style.display = "none";
    })
})

// Main Game Loop
function gameLoop() {
    // Time
    time += 4;

    let minutes = Math.floor(time / 60);

    const formattedTime = `${minutes}AM`;

    timer.textContent = formattedTime;

    if (minutes >= 6) {
        minutes = 0;
        time = 0;
        gameWin();
        return;
    }

    // Drain Power
    power -= .5;
    if (ventClosed) power -= 1;
    if (lightOn) power -= .5;


    if (power <= 0) {
        power = 100;
        loseReason = "You ran out of power";
        gameOver();
        return
    }
    powerDisplay.textContent = `Power: ${Math.floor(power)}%`;
};