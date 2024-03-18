let clickedLondonFog = false;



  
  // (fogX, fogY)
  //londonFogCat(200, 200);
  //catEyes();
 


function catEyes() {
  
  if (!clickedLondonFog) { 
    closedEyes();
  }
  
  if (clickedLondonFog) {
    openEyes();
  }
  
}

function londonFogCat(fogX, fogY){

push();
  translate(fogX, fogY);
  noStroke();

//body
  fill(120, 120, 140);
  arc(50, 50, 150, 200, PI, 2 * PI);
  fill(180, 180, 200);
  arc(5, 50, 50, 60, PI, 2 * PI);
  
//paws
  fill(255);
  //front left
  arc(-20, 50, 25, 25, PI, 2 * PI);
  //front right
  arc(25, 50, 25, 25, PI, 2 * PI);
  //back paw
  arc(85, 50, 25, 25, PI, 2 * PI);

  
//head
  fill(150, 150, 170);
  ellipse(-30, -25, 15, 25);
  ellipse(0, -25, 15, 25);
  ellipse(-15, 0, 75, 50);
  
  
//nose
  fill(241,160,178);
  triangle(-10, 5, -15, 10, -20, 5);
  
//whiskers
  strokeWeight(4);
  stroke(255);
  //left top
  line(-30, 10, -65, 15);
  //left bottom
  line(-27, 15, -55, 25);
  //right top
  line(0, 10, 35, 15);
  //right bottom
  line(-5, 15, 23, 25);

//tail
  stroke(120, 120, 140);
  strokeWeight(10);
  noFill();
  arc(120, 80, 40, 70, PI * 3 / 2, PI / 2);
  
//stripes
  stroke(140, 140, 160);
  strokeWeight(5);
  noFill();
  arc(25, -5, 25, 45, PI * 3 /2, PI / 6);
  arc(42, -15, 25, 45, PI * 3 /2, PI / 6);
  arc(60, -15, 25, 45, PI * 3 /2, PI / 6);
  

pop();
  
}

function openEyes() {
    
push();
  translate(200, 200);
  fill(0);
  ellipse(0, 0, 10, 10);
  ellipse(-30, 0, 10, 10);
  
  stroke(0);
  strokeWeight(4);
  line(-60, -20, -65, -40);
  noStroke();
  fill(0);
  ellipse(-58, -12, 7, 7);
pop(); 
  
}


function closedEyes() {
  
push();

  translate(200, 200);
  
//eyes
  stroke(0);
  strokeWeight(4);
  //right eye
  line(-5, 0, 5, 0);
  //left eye
  line(-25, 0, -35, 0);
  
//sleeping z's
  
  //bottom z
  line(-50, -20, -60, -20);
  line(-60, -20, -50, -30);
  line(-50, -30, -60, -30);
  
  //top z
  line(-70, -40, -60, -40);
  line(-70, -40, -60, -50);
  line(-60, -50, -70, -50); 
  
pop();
  
}

function mouseClickedLondonFog() {
  
  clickedLondonFog = !clickedLondonFog;
}


