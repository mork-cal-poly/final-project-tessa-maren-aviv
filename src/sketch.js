
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

  //home button
  if (catRoom == true) {
    push()
    translate(35, 510)
      scale(0.25)
    image(imgHome, 0, 0);
    pop();
  }

  backpack();
  toys();
}

function mouseClicked() {
  console.log("x: " + mouseX + " y: " + mouseY + " frontroom: " + frontRoom);
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
  } 
  
  // if (mouseX > 50 && mouseX > 100 && mouseY > 530 && mouseY < 580); {
  //   thaiRoom = matchaRoom = londonRoom = catRoom = false;
  //   frontRoom = true;
  // }

  //cat selection
  if (greenFruit == true && matchaRoom == true) {
    clickedMatchaTea = !clickedMatchaTea; 
  } else if (greyRat == true && londonRoom == true) {
    clickedLondonFog = !clickedLondonFog;
  } else if (orangeFish == true && thaiRoom == true) {
    clickedThaiTea = !clickedThaiTea;
  } else if (frontRoom == true && mouseX > 100 && mouseX < 200 && mouseY > 150 && mouseY < 490) {
    clickedBarista = !clickedBarista
  }

  }



