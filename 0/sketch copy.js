// TODO: add more circles using lists

let numCircles;
let ypos = []; //this y pos variable is a list of numbers but when we declare this variable we can put something inside of it

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  numCircles = int(width / 100); //int means integer, how many circles you wanna draw

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

  // ellipse(width / 2 - 100, ypos[0], 50);
  // ellipse(width / 2, ypos[1], 50);
  // ellipse(width / 2 + 100, ypos[2], 50);

  // ypos[0] += 8;
  // ypos[1] += 11;
  // ypos[2] += 17;

  // if (ypos0 > height) {
  //   ypos[0] = -50;
  // }

  // if (ypos1 > height) {
  //   ypos[1] = -50;
  // }

  // if (ypos2 > height) {
  //   ypos[2] = -50;

