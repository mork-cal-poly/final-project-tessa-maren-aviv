
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  if (menuRoom == true) {
    text("Hi!", 200, 200);
  }

  greyRoom();
  backpack();
  toys();
}

function mouseClicked() {
  //hotbar selection
  if (mouseY >= 500){
    if(mouseX > 300 && mouseX < 400) {
      orangeFish = !orangeFish;
      greenFruit = false;
      greyRat = false;
    }else if (mouseX > 400 && mouseX < 500) {
      greenFruit = !greenFruit;
      orangeFish = false;
      greyRat = false;
    }else if (mouseX > 500 && mouseX < 600) {
      greyRat = !greyRat;
      greenFruit = false;
      orangeFish = false;
    }
  }

  //room selection
  if( mouseX > 350 && mouseX < 550) {
    if (mouseY ) {

    } else if (mouseY) {

    }else if (mouseY) {

    }
  }

  //cat selection
  if (greenFruit == true && matchaRoom == true) {
    clickedMatchaTea = !clickedMatchaTea; 
  } else if (greyRat == true && londonRoom == true) {
    clickedLondonFog = !clickedLondonFog;
  } else if (orangeFish == true && thaiRoom == true) {
    clickedThaiTea = !clickedThaiTea;
  } else {

  }
}


