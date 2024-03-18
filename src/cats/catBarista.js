let clickedBarista = false;
let rotateBaristaCatArm = -0.7;
//bca stands for barista cat arm
let bcaMoveLeft = true;

function catBaristaArmAnimation() {
  
    if (clickedBarista) {
    
    if (bcaMoveLeft) {
      rotateBaristaCatArm = rotateBaristaCatArm - 0.02;
    } else {
      rotateBaristaCatArm = rotateBaristaCatArm + 0.02;
    }
    if (rotateBaristaCatArm <= -0.7) {
      bcaMoveLeft = false;
    }
    if (rotateBaristaCatArm >= 0) {
      bcaMoveLeft = true;
    }
    }
    
  }
  
  function catBarista(baristaX, baristaY) {
  
  push();
    translate(baristaX, baristaY);
  
    //body
    noStroke();
    fill('rgb(119,54,54)');
    rect(-40, -100, 80, 100, 25, 25, 0, 0);
    //belly
    fill('rgb(160,109,109)');
    rect(-20, -75, 40, 75, 25, 25, 0, 0);
    //apron
    fill('rgb(25,112,25)');
    rect(-40, -40, 80, 40);
    rect(-20, -100, 10, 60);
    rect(10, -100, 10, 60);
    rect(-10, -55, 20, 30);
    //pocket
    fill('rgb(17,80,17)');
    rect(-10, -35, 20, 25, 0, 0, 25, 25);
  
    //head
      //neck
    fill('rgb(119,54,54)');
    rect(-10, -110, 20, 10);
      //main head
    rect(-40, -160, 80, 55, 0, 0, 25, 25);
    //ears
      //left
    triangle(-40, -150, -40, -180, -15, -150);
      //right
    triangle(40, -150, 40, -180, 15, -150);
    
    //eyes
    fill(0);
    ellipse(-15, -135, 10, 10);
    ellipse(15, -135, 10, 10);
    //mouth
    strokeWeight(3);
    stroke(0);
    line(0, -125, 0, -112);
    
    
    //whiskers
    stroke(255);
    //left
    line(-15, -120, -50, -125);
    line(-15, -115, -50, -110);
    //right
    line(15, -120, 50, -125);
    line(15, -115, 50, -110);
    
    //nose
    noStroke();
    fill('rgb(241,198,206)');
    triangle(-7, -130, 7, -130, 0, -120);
    //fill(241,198,206, 75);
    //ellipse(-15, -128, 15, 5);
    //ellipse(15, -128, 15, 5);
    
      
    //arms
    //right, other arm is written in separate function so it can be animated
     fill('rgb(119,54,54)');
    rect(30, -90, 20, 50, 0, 10, 10, 10);
    //coffee cup
    fill(255);
    rect(10, -70, 20, 30, 0, 0, 10, 10);
    stroke(255);
    noFill();
    ellipse(10, -60, 15, 10, 3*PI / 2, PI / 2);
    //paw
    noStroke();
    fill('rgb(190,111,111)');
    rect(15, -60, 20, 20, 10, 0, 0, 10);
    
  
  
  pop();
    
  }
  
  function catBaristaArm(baristaArmX, baristaArmY){
    
  push();
    translate(baristaArmX, baristaArmY);
    rotate(rotateBaristaCatArm);
    
    //origin check
    //fill('red');
    //noStroke();
    //ellipse(0, 0, 10, 10);
    
    //arm, left
    noStroke();
    fill('rgb(119,54,54)');
     rect(-10, -70, 20, 70, 10, 10, 0, 0);
    fill('pink');
    ellipse(0,-55, 10, 10);
    ellipse(-5, -63, 4, 5);
    ellipse(0, -65, 4, 5);
    ellipse(5, -63, 4, 5);
    
  pop();
    
  }