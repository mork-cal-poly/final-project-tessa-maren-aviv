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

  backpack();
  toys();

}


