var angle = 0;
var offset = 150;
//how much to scale up from sin:
//this makes the wave bigger or smaller
var scalar = 100;
var speed = 0.05;

function setup() {
    createCanvas(900, 600);
    fill(0);
}

function draw() {
    background(255);
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;

    ellipse(50, y1, 100, 100);
    ellipse(150, y2, 100, 100);
    ellipse(250, y3, 100, 100);

    angle += speed;
}
