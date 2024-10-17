// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 100;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let cnt = 0; cnt < NUM_OBJS; cnt++) { //i doesnt mean anything, they can be named as counter
    let aCircle ={
      x: random(width),
      y: random(height),
      d: random(50, 100),
      a: 0, //alpha
      da: random(1, 10), //how much I want to change alpha per frame
      dx: random(-5, 5),
      dy: random(-5, 5),
    }; //each time this for loop runs, it gives a circle that contains a 5 parameters

    //taking a temp variable (aCircle) and then pushing them into a list
circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(220, 20, 220);
  for(let idx = 0; idx < circles.length; idx++) {
    let mCircle = circles[idx];
    fill(255, mCircle.a);
    ellipse(circles[idx].x, mCircle.y, mCircle.d);

    mCircle.a = (mCircle.a + mCircle.da) % 255;

    mCircle.x = mCircle.x + mCircle.dx;
    mCircle.y = mCircle.y + mCircle.dy;

   
  }  
}
