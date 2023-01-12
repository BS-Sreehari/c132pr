img = "";
status = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload() {
    img = loadImage('OIP.jpg');
}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#fcba03")
    noFill();
    stroke("#fcba03");
    rect(99, 243, 200, 500);
    text("chair", 55, 238)
}