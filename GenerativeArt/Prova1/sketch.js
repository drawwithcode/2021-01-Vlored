let x = 650;
let y = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  translate(x, y);
  rotate(frameCount);
  noFill();
  stroke("green");
  line(0, 0, width, 0);

  if (frameCount === 360) {
    x = x - frameCount / 40;
  }
  if (frameCount === 1080) {
    noLoop();
  }
}
