// setup() is called once at page-load

let squareSize = 720;
let cent = squareSize / 2;

function setup() {
  createCanvas(squareSize, squareSize);
}

// draw() is called 60 times per second
function draw() {
  let hr = hour();
  let min = minute();
  let sec = second();

  background(0, 0, 52);

  // circuits
  stroke(255, 255, 255, 150);
  strokeWeight(1);
  noFill();
  ellipse(cent, cent, 100, 100);
  ellipse(cent, cent, 300, 300);
  ellipse(cent, cent, 500, 500);

  // hour
  push();
  ellipseMode(CENTER);
  let v1 = p5.Vector.fromAngle(map(hr, 0, 24, 0 - PI / 2, 2 * PI - PI / 2), 50);
  translate(v1);
  drawingContext.shadowBlur = 25;
  drawingContext.shadowColor = 'white';
  noStroke();
  fill(102, 178, 255);
  ellipse(cent, cent, 45, 45);
  pop();

  // minute
  push();
  ellipseMode(CENTER);
  let v2 =
      p5.Vector.fromAngle(map(min, 0, 60, 0 - PI / 2, 2 * PI - PI / 2), 150);
  translate(v2);
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'green';
  noStroke();
  fill(153, 255, 51);
  ellipse(cent, cent, 30, 30);
  pop();

  // second
  push();
  ellipseMode(CENTER);
  let v3 =
      p5.Vector.fromAngle(map(sec, 0, 60, 0 - PI / 2, 2 * PI - PI / 2), 250);
  translate(v3);
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'yellow';
  noStroke();
  fill(255, 204, 0);
  ellipse(cent, cent, 20, 20);

  // millis
  ellipseMode(CENTER);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'orange';
  noStroke();
  fill(255, 128, 0);
  ellipse(cent, cent, 10, 10);
  pop();
}
