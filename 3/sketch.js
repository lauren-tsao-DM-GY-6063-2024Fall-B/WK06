// TODO: visualize data from JSON

let data = [];

function preload() {
  data = loadJSON("wine.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  noFill();
  stroke(255, 0, 0)

  data = Object.values(data); //this object that its loaded, give me a list of its values

  print(data[0]); //index into an object, NOT a list

  for (let idx = 0; idx < data.length; idx ++) {
    let aWine = data[idx];
    let x = map(idx, 0, data.length, 0, width);
    let d = map(aWine.price, 0, 300, 0, height) //if i had a wine that is 300 dollars, the circle will be the height of the canvas


  ellipse(x, height / 2, d);
  }

}

function draw() {}
