function preload() {
  img = loadImage("assets/IMG_0933.JPG");
  img2 = loadImage("assets/caverna.JPG");
  img3 = loadImage("assets/IMG_0477.png");
}

let x = 850;
let y = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(60);
  loadImage("assets/IMG_0477.png");
  loadImage("assets/caverna.JPG");
  loadImage("assets/IMG_0933.JPG");
}

function draw() {
  if (frameCount === 360) {
    image(img2, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 380) {
    image(img, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 400) {
    image(img3, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 420) {
    image(img, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 440) {
    image(img2, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 460) {
    image(img, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 480) {
    image(img2, 0, 0, windowWidth, windowHeight);
  }
  if (frameCount === 720) {
    image(img, 0, 0, frameCount, windowHeight);
  }
  image(img3, mouseX, mouseY, 150, 150);
  push();
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
  pop();
}

