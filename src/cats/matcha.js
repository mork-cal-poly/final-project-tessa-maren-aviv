let clickedMatchaTea = false;

  
  //(matchaX, matchaY)
  //matchaTeaCat(200, 200);
  //matchaSleepClick(200, 200);


function matchaSleepClick(matchaX, matchaY) {
  if (!clickedMatchaTea) {
    matchaAwake(matchaX, matchaY);
  }
  if (clickedMatchaTea){
    matchaStretch(matchaX, matchaY);
  }
}

function matchaTeaCat(matchaX, matchaY) {
  
  push();
    translate(matchaX, matchaY);
  
//ALL FOLLOWING ELEMENTS IN THIS FUNCTION DO NOT CHANGE WITH CLICK
  
//back leg
  //back
  noStroke();
  fill('rgb(70,83,43)');
  triangle(-10, 15, -60, 50, -10, 30);
  triangle(40, 0, 60, 0, 40, 50);
  
//TAIL
  stroke(122,155,48);
  strokeWeight(10);
  noFill();
  push();
  rotate(.5);
  arc(20, -50, 50, 120, 3 * PI / 2, 2 * PI);
  pop();
  
//BODY
  noStroke();
  fill(122,155,48);
  arc(0, 0, 50, 80, PI * 2, PI);
  //head
  ellipse(-30, 0, 35, 35);
  
  //ears
  push();
    rotate(.5);
    arc(-25, 0, 20, 30, 3 * PI / 2, 2 * PI);
    arc(-35, 0, 20, 30, 3 * PI / 2, 2 * PI);
  pop();
  
  rect(-55, -10, 10, 20, 2, 2, 5, 5);
  
//FACE
  //nose
  fill('pink');
  triangle(-55, -10, -45, -10, -55, 0);

  
//LEGS
  fill('rgb(169,197,106)');
  //front
  triangle(0, 10, 30, 30, -20, 50);
  triangle(-20, 50, -60, 50, -10, 30);
  
  pop();
}

function matchaAwake(matchaX, matchaY) {
push();
  translate(matchaX,matchaY);
  
  //body elongate before
  fill('rgb(122,155,48)');
  noStroke();
  arc(35, 0, 70, 120, PI, PI * 2);
  
  //legs 
  fill('rgb(169,197,106)');
  //back
  triangle(80, -30, 30, -30, 70, 20);
  triangle(70, 20, 40, 50, 55, 0);
  
  //paws
  noStroke();
   fill('rgb(70,83,43)');
  arc(-60, 50, 20, 20, PI, PI * 2);
   fill('rgb(193,211,174)');
  arc(-55, 50, 20, 20, PI, PI * 2);
    fill('rgb(70,83,43)');
   arc(35, 50, 25, 25, PI, PI * 2);
   fill('rgb(193,211,174)');
  arc(40, 50, 25, 25, PI, PI * 2);
  
  //eye
  fill(0);
  ellipse(-30, 0, 7, 7);
  
pop();
}

function matchaStretch(matchaX, matchaY) {
  
push();
  translate(matchaX, matchaY);
  noStroke();
  
  //body elongate after
  fill(122,155,48);
  noStroke();
  arc(35, 0, 65, 125, PI, PI * 2);
  
  //legs
  fill('rgb(169,197,106)');
  //back
  triangle(80, -30, 30, -30, 70, 20);
  triangle(70, 20, 40, 50, 55, 0);
  
  //paws
  fill('rgb(70,83,43)');
  arc(-65, 50, 20, 20, PI, PI * 2);
   fill('rgb(193,211,174)');
  arc(-60, 50, 20, 20, PI, PI * 2);
    fill('rgb(70,83,43)');
  arc(40, 50, 25, 25, PI, PI * 2);
   fill('rgb(193,211,174)');
  arc(45, 50, 25, 25, PI, PI * 2);
  
  //eye
  fill(0);
  stroke(0);
  strokeWeight(5);
  line(-30, 0, -35, 0);
  //mouth yawn
  fill(162,32,55);
  noStroke();
  ellipse(-45, 10, 5, 10);
  
pop();
  
}

function mouseClickedMatcha() {

clickedMatchaTea = !clickedMatchaTea; 
  
}