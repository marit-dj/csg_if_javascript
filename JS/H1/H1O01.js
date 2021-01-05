function setup() {
  canvas = createCanvas(1000,450);
  background('grey');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke();
  fill('green');
  ellipse(275,225,400);

  noStroke();
  fill("white");
  ellipse(275,225,300);
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(175,125,200,200);  
}
