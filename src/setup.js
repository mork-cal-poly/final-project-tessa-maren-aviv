var backgroundImage = [];

function preload() {

}

function backpack() {

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