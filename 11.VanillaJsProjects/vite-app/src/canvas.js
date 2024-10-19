const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
context.fillStyle = "lightgreen";
context.fillRect(0, 0, 100, 100);

context.fillStyle = "black";
context.font = "50px sans-serif";
context.fillText("JS", 30, 90, 250); // text , x,y,maxWidth
