// wall and floor base
background(191, 123, 63); //floor
noStroke();
fill(178, 108, 41); //wall
rect(0, 0, width, 3 * height / 4);
triangle(0, height, 0, 3 * height / 4, width / 6, 3 * height / 4);
 triangle(width, height, width, 3 * height / 4, 5 * width / 6, 3 * height / 4);
stroke(140, 64, 20);
strokeWeight(1);
rect(0, 0, width / 6, 3 * height /4);
rect(5 * width / 6, 0, width / 6, 3 * height / 4);

// shelf
noStroke();
fill(140, 64, 20);
rect(width / 6, height / 4, width / 4,  height / 2 );
fill(242, 214, 189);
rect(10 + width / 6, 10 + height / 4, 130, 62.5);
rect(10 + width / 6, 10 + 3 * height / 8, 130, 62.5);
rect(10 + width / 6, 10 + height / 2, 130, 62.5);
rect(10 + width / 6, 10 + 5 * height / 8, 130, 62.5);

//framed picture
push();
translate(0, 60);
stroke(140, 64, 20);
strokeWeight(4);
quad(0.75 * width / 6, height / 4, 0.75 * width / 6, 3 * height / 8, 0, 3 * height / 6, 0, height / 6); 
pop();

//inside picture
push();
translate(0, 110);
scale(0.75);
fill(64, 49, 30);
quad(0.75 * width / 6, height / 4, 0.75 * width / 6, 3 * height / 8, 0, 3 * height / 6, 0, height / 6); 
pop();

//rug
fill(242, 214, 189);
stroke(64, 49, 30);
strokeWeight(7);
quad(1.5 * width / 6, 25 * height / 32, 1.5 * width / 3, 25 * height / 32, 5 * width / 6, height, width / 6, height);

//window (doesn't change)
fill(120, 150, 200);
ellipse(2 * width / 3, height / 4, 175);
fill(255, 255, 255, 100)
ellipse(2 * width / 3, height / 4, 175);

//cat tower
noStroke();
fill(64, 49, 30);
ellipse(width / 2, height / 2, 70);
rect(width / 2, height / 2, 75, 20);
rect(width / 2, height / 2, 20, 100);
ellipse(75 + width / 2, 100 + height / 2, 80);
rect(width / 2, 100 + height / 2, 75, 20);
fill(217, 157, 85);
ellipse(width / 2, height / 2, 55);
ellipse(75 + width / 2, 100 + height / 2, 65);

//table
push();
translate(70, 360);
scale(0.2);
image(imgthaitea, 0, 0);
pop();

//pillow
push();
translate(350, 350);
scale(0.14);
image(imgthaitea2, 0, 0);