

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  let c = map(mouseX, 0, width, 0, 175);
  
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  scAngle = map(sc,0,60,0,360);
  push();
  
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(-400,-200,100,0); 
  pop();
  drawSprites();
}