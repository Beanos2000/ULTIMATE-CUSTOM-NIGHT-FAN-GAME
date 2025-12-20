let power = 100;
let leftDoorClosed = false;

document.getElementById("leftDoor").onclick = () => {
    leftDoorClosed = !leftDoorClosed;
    console.log(leftDoorClosed ? "Door Closed" : "Door Open");
    
}