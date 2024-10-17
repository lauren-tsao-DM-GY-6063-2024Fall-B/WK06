// TODO: add more circles using lists

let numCircles;
let ypos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  numCircles = 10;

  for (let idx = 0; idx < numCircles; idx += 1) { //idx means index, how many things are you gonna go through, what are you skipping
   ypos.push(random(height)); // push meaning, putting the number 0 at the end of the y pos list
}
print(ypos);
}

function draw() {
  background(220, 20, 220);


  for (let idx = 0; idx < ypos.length; idx += 1) { //length of the ypos list
    let xpos = map(idx, 0, ypos.length, 0, width);
   ellipse(xpos+25, ypos)
    }
  }

  function mousePressed
