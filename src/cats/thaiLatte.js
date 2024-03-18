let clickedThaiTea = false;
let catTailRotation = 0;
let tailMoveDown = true;



  
  //(thaiX, thaiY);
 // thaiTeaCat(200, 200);
  //thaiTailAnimation();


function thaiTailAnimation() {

if (clickedThaiTea) {
  
  if (tailMoveDown) {
    catTailRotation = catTailRotation - 0.025;
  } else {
    catTailRotation = catTailRotation + 0.025;
  }
  if (catTailRotation <= -0.5) {
    tailMoveDown = false;
  }
  if (catTailRotation >= 0) {
    tailMoveDown = true;
  }
  }

  
}



function thaiTeaCat(thaiX, thaiY) {

push();
  translate(thaiX, thaiY);
  scale(1.5);
  
  //tail
  push();
    translate(-20, -30);
    strokeWeight(5);
    stroke('orange');
    noFill();
    rotate(catTailRotation);
    arc(0, 0, 30, 50, PI / 2, 3 * PI /2);
  //arc(-27, -30, 20, 50, PI / 2, 3 * PI/ 2);
  //rotate(-0.4);
  //arc(-20, -40, 30, 50, 3 * PI / 2, PI / 2);
  pop();

  //body
  noStroke();
  fill('#FF9800');
  arc(0, 0, 50, 100, PI, 2 * PI);
  arc(20, 0, 30, 130, PI, 2 * PI);
  strokeWeight(3);
  stroke('#C57704');
  noFill();
  arc(-10, -10, 30, 40, 3 * PI / 2, 0);
  line(27, -1, 25, -30);
  line(23, -33, 25, -30);
  line(25, -30, 28, -33);
  
  //paws
  noStroke();
  fill(248,220,170)
  arc(35, 0, 15, 20, PI, 2 * PI);
  arc(20, 0, 15, 20, PI, 2 * PI);
  arc(-5, 0, 15, 20, PI, 2 * PI);
  
  //head

  fill('#FF9800')
  ellipse(25, -60, 30, 30);
  fill('#FCBF65')
  ellipse(20, -50, 10, 10);
  ellipse(30, -50, 10, 10);
  ellipse(25, -55, 10, 10);
  fill('rgb(201,104,121)');
  triangle(20, -55, 25, -50, 30, -55);
  
  //eyes
  fill(0);
  ellipse(17, -60, 5, 5);
  ellipse(33, -60, 5, 5);
  
  //ears
  fill('#FDBB5A');
  triangle(10, -65, 12,-80, 20, -75);
  triangle(30, -75, 40, -80, 40, -65);
  
  //whiskers
  strokeWeight(2);
  stroke(255);
  noFill();
  line(20, -50, 13, -45);
  line(18, -53, 11, -50);
  line(30, -50, 37, -45);
  line(32, -53, 38, -50);

}

 

function mouseClickedThaiTea() {

    clickedThaiTea = !clickedThaiTea;
  
}