let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  if (timer > 60 && timer < 100) {
    text("Hi!", 200, 200);
  }
  timer++;

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

  //cat selection
  if (greenFruit == true && red) {
    clickedMatchaTea = !clickedMatchaTea; 
  } else if (greyRat == true && blue) {
    clickedLondonFog = !clickedLondonFog;
  } else if (orangeFish == true && yellow) {
    clickedThaiTea = !clickedThaiTea;
  } else {

  }
}


