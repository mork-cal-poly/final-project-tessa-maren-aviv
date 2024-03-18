
function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

  //draws rooms
  if (frontRoom == true) {
    cafeRoom();
  } else if (londonRoom == true) {
    greyRoom();
  } else if (thaiRoom == true) {
    orangeRoom();
  } else if (matchaRoom == true) {
    greenRoom();
  } else {
    outside = true;
    push()
      scale(0.25)
    image(imgOutside, 0, 0);
    pop();
  }

  if (thaiRoom == true || londonRoom == true || matchaRoom == true) {
    push()
    translate(40, 520);
      scale(0.25)
    image(imgHome, 0, 0);
    pop();
  }

  backpack();
  toys();
}


function mouseClicked() {
  console.log(mouseX + " - " + mouseY);
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
  if(outside == true && mouseX > 75 && mouseX < 475 && mouseY > 175 && mouseY < 540) {
    frontRoom = true;
    outside = false;
  } else if (frontRoom == true){
    if (mouseY > 198 && mouseY < 222) {
      thaiRoom = true;
      frontRoom = londonRoom = matchaRoom = false;
    } else if (mouseY > 236 && mouseY < 259) {
      matchaRoom = true;
      frontRoom = londonRoom = thaiRoom = false;
    }else if (mouseY > 271 && mouseY < 294) {
      londonRoom = true;
      frontRoom = thaiRoom = matchaRoom = false;
    }
  } else if (frontRoom == false && outside == false && mouseX > 40 && mouseX < 90 && mouseY > 530 && mouseY < 590) {
    thaiRoom = matchaRoom = londonRoom = outside = false;
    frontRoom = true;
  }

  //cat selection
  if (greenFruit == true && matchaRoom == true && mouseX > 100 && mouseX < 410 && mouseY > 400 && mouseY < 600) {
    clickedMatchaTea = !clickedMatchaTea; 
  } else if (greyRat == true && londonRoom == true && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 500) {
    clickedLondonFog = !clickedLondonFog;

  } else if (orangeFish == true && thaiRoom == true && mouseX > 250 && mouseX < 400 && mouseY < 400 && mouseY > 200) 
  {
    clickedThaiTea = !clickedThaiTea;
  } else if (frontRoom == true && mouseX > 100 && mouseX < 200 && mouseY > 150 && mouseY < 490) {
    clickedBarista = !clickedBarista
  }

  }



