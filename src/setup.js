var backgroundImage = [];
var grenFruit = true;
var greyRat = false;
var orangeFish = false;


function preload() {

}

function backpack() {
  fill('beige');
  stroke('brown');
  strokeWeight(10);
  rect(300, 500, 100);
  rect(400, 500, 100);
  rect(500, 500, 100);
  goldfish(335, 550, 0.8, 0);
  fruit(465, 530, 0.5, 0);
  rat(545, 550, 0.6, 0);
}

function toys() {
  if (orangeFish == true) {
    
  } else if (greyRat == true) {

  }else if (greenFruit == true) {
    fruit(mouseX, mouseY, 0.5, 0);
  }

}

function goldfish(x, y, s, rot) {
    noStroke();
    
    push();
      translate(x, y);
      scale(s);
      rotate(rot);
    
    fill('orange');
    arc(0, 0, 40, 40, PI / 2, 3 * PI / 2, PIE);
    arc(0, 0, 80, 40, 3 * PI / 2, PI / 2, PIE);
    fill('black');
    ellipse(-5, -5, 10);
    fill('darkorange');
    arc(45, 0, 30, 30, 5 * PI / 6, 11 * PI / 6, CHORD);
    arc(45, 0, 30, 30, PI / 6, 7 * PI / 6, CHORD);
    arc(15, 10, 25, 25, PI / 6, 7 * PI / 6, CHORD);
    
    pop();
  }

function fruit(x, y, s, rot) {
  noStroke();
  
push();
  translate(x, y);
  scale(s);
  rotate(rot);

fill('lightgreen');
arc(-40, 40, 80, 60, PI, 2 * PI );
arc(-40, 40, 80, 90, 2 * PI, PI);

fill('green');
arc(0, 0, 40, 40, PI / 2, 3 * PI / 2, PIE);
arc(0, 0, 80, 40, 3 * PI / 2, PI / 2, PIE);

noFill();
stroke('green');
strokeWeight(8);
arc(-20, 15, 30, 30, 5 * PI / 5, 11 * PI / 6);

stroke('darkgreen');
arc(10, -10, 80, 30, PI / 4, 5 * PI / 6);
  
pop();
}
function rat(x, y, s, rot) {
  noStroke();
  
push();
  translate(x, y);
  scale(s);
  rotate(rot);

fill('grey');
arc(0, 0, 100, 40, PI / 2, 3 * PI / 2, PIE);
arc(0, 0, 50, 40, 3 * PI / 2, PI / 2, PIE);
ellipse(-20, -15, 25);
ellipse(-30, -14, 20);

noFill();
stroke('pink');
strokeWeight(10);
arc(40, 0, 20, 20, PI, 2 * PI);
arc(60, 0, 20, 20, 2 * PI, PI);

noStroke();
fill('pink');
ellipse(-50, 0, 10)
ellipse(10, 20, 40, 10)

fill('darkgrey');
ellipse(15, 0, 40);

fill('black');
ellipse(-25, -10, 10);

pop();
}