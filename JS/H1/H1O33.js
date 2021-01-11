function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('Khaki');
  rect(0,25,25,25);

  fill('LightSkyBlue');
  rect(0,0,25,25);

  fill('Plum');
  rect(25,0,25,25);

  fill('LightGreen');
  rect(25,25,25,25);

  fill('smokewhite');
  ellipse(12.5,12.5,12.5);
  ellipse(12.5,37.5,12.5);
  ellipse(37.5,12.5,12.5);
  ellipse(37.5,37.5,12.5);

  pop();
}