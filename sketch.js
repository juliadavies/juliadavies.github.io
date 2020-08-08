var s;
var food;
var scl = 20;
var gameOver = false;
var grid = [];

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  food = new Food();
  frameRate(10);
}

function draw() {
  if (gameOver) {
    background("#FF0000");  
  }
  else {
    background(50);
    s.update();
    s.show();
    food.show();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  }
  else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  }
  else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
  else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}