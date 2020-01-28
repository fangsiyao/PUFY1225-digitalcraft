//this set up function only gets run once
function setup() {
  createCanvas(400, 400);
}

//will continually run
function draw() {
  //color hexcode made by six digits 2 for a group
  background("#dbd1d1");
  //ellipse (x position, y position, width, height);
  rectMode(CORNER); 
  fill(255, 0, 0);
  rect(50,40, 140,140);
  fill("#f9f0f0");
  rect(0, 0, 107, 40);
  fill(0);
  rect(20, 40, 360, 7);
  fill(0);
  rect(50, 40, 7, 340);
  fill(0);
  rect(20, 130, 30, 7);
  fill(0);
  rect(20, 300, 30, 7);
  fill(0);
  rect(100, 5, 7, 40);
  fill(0);
  rect(50, 180, 180, 7);
  fill(0);
}