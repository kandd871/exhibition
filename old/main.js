let f = 40;  // Initial font size
let col = ["beige","beige","beige","beige","beige"];
let symbols = ["+", "≡", "×", "="];
let rectWidth = 600;
let rectHeight = 700;
let boxSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  strokeWeight(3);
  rectMode(CENTER);
  let space = 15;
  
  for (let x = 0; x < width; x += space){
    for (let y = 0; y < height; y += space){
      let c = random(5);
      noStroke();
      fill(col[floor(random(5))]);
      
      if (c < 1) {
        textSize(f - 10);
        text("×", x+2, y-3);
        f = 35; // Reset font size back to the original size
      } else if (c < 2) {
        textSize(f-5);
        push(); // Save the current transformation state
        translate(x, y-20); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();
      } else if (c < 3) {
        textSize(f);
        text("≡", x, y);
      } else if (c < 4) {
        textSize(f - 10);
        text("+", x+2, y-2);
      } else if (c < 5) {
        textSize(f);
        push(); // Save the current transformation state
        translate(x+2, y-20); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop(); // Restore the previous transformation state
      }

    }
  }
  noFill();
  let rectX = width / 2;
  let rectY = height / 2;
  rectMode(CENTER);
  rect(rectX, rectY, rectWidth, rectHeight);

  // Calculate the number of rows and columns
  let numRows = floor(rectHeight / boxSize);
  let numCols = floor(rectWidth / boxSize);

//   stroke('#ABD551');
  noFill();
  strokeWeight(.5);

  // Draw the grid of boxes
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = rectX - rectWidth / 2 + boxSize / 2 + j * boxSize;
      let y = rectY - rectHeight / 2 + boxSize / 2 + i * boxSize;
      rect(x, y, boxSize, boxSize);
    }
  }


add();
}

function add(){
    let rectX = width / 2;
    let rectY = height / 2;
    
let textX = rectX - rectWidth / 2 + 2; // Adjust x position
let textY = rectY - rectHeight / 2 + 22; // Adjust y position
  
  textSize(20); 
  fill('#72C8F8');
  noStroke();
  text("+", textX+2, textY);
//   text(random(symbols), textX+2, textY);

  textSize(28); 
  fill('#ABD551');
  stroke('#ABD551');
  strokeWeight(1);
  text("≡", textX+11, textY+1.5);
  text("≡", textX+25, textY+1.5);
  
        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX+40, textY-12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX+55, textY);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX+65, textY+1.5);
    text("≡", textX+79, textY+1.5);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX+15, textY); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX+35, textY+2); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX+51, textY+12);
    text("+", textX+76, textY+13);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX+18, textY+12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX+45, textY+25);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX+70, textY+25);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX+22, textY+25); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX+52, textY+28); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX+65, textY+40);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX+37, textY+45);

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX+25, textY+55);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX+59, textY+43); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX+30, textY+66);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX+57, textY+67);

let textX2 = rectX - rectWidth / 2 + 104; 
let textY2 = rectY - rectHeight / 2 + 22; 

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX2+11, textY2+1.5);
    text("≡", textX2+25, textY2+1.5);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX2+45, textY2);
    text("×", textX2+57, textY2);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX2+70, textY2+1);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX2+70, textY2+2); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX2+27, textY2+6); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX2+27, textY2+22); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX2+38, textY2+36);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX2+55, textY2+13); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX2+54, textY2+34);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX2+55, textY2+35); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX2+28, textY2+50);

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX2+15, textY2+70);
    text("≡", textX2+30, textY2+70);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX2+45, textY2+68);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX2+55, textY2+70);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX2+71, textY2+59);
    text("+", textX2+71, textY2+68);

let textX3 = rectX - rectWidth / 2 + 205; 
let textY3 = rectY - rectHeight / 2 + 22; 

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX3+38, textY3+1.5);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX3+31, textY3+15);
    text("+", textX3+27, textY3+25);
    text("+", textX3+23, textY3+38);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX3+48, textY3+13);
    text("×", textX3+53, textY3+33);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX3+20, textY3+44); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX3+62, textY3+44); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX3+31, textY3+47);
    text("+", textX3+46, textY3+47);

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX3+10, textY3+70);
    text("≡", textX3+25, textY3+70);
    text("≡", textX3+50, textY3+70);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX3+63, textY3+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX3+73, textY3+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX4 = rectX - rectWidth / 2 + 310; 
let textY4 = rectY - rectHeight / 2 + 22; 

    textSize(28); 
    stroke('#ABD551');
    fill('#ABD551');
    strokeWeight(1);
    text("≡", textX4, textY4+1.5);
    text("≡", textX4+15, textY4+1.5);
    text("≡", textX4+28, textY4+1.5);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX4+55, textY4);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX4+65, textY4+3);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX4+18, textY4+12);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX4+55, textY4+13);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX4+22, textY4+16); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX4+26, textY4+30); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX4+50, textY4+28);
    text("+", textX4+46, textY4+40);
    text("+", textX4+28, textY4+58);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX4+40, textY4+46); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX4+33, textY4+58); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX5 = rectX - rectWidth / 2 + 400; 
let textY5 = rectY - rectHeight / 2 + 22; 

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX5+33, textY5-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX5+44, textY5-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX5+55, textY5+3);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX5+50, textY5+3); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX5+50, textY5+26);
    text("×", textX5+50, textY5+40);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX5+50, textY5+53);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX5+50, textY5+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX5+38, textY5+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX5+59, textY5+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

let textX6 = rectX - rectWidth / 2 + 513; 
let textY6 = rectY - rectHeight / 2 + 22; 

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX6, textY6+3);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX6+17, textY6);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX6+45, textY6+3);
    text("≡", textX6+62, textY6+3);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX6+10, textY6+3); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX6+25, textY6+15);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX6+55, textY6+17);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX6+10, textY6+18); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX6+33, textY6+30);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX6+55, textY6+32);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX6+12, textY5+34); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX6+40, textY6+34); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX6+55, textY6+45);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX6+12, textY5+45); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX6+56, textY5+45); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX6+10, textY6+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX6+19, textY6+70);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX6+28, textY6+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX6+56, textY5+59); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

let textX7 = rectX - rectWidth / 2 + 10; 
let textY7 = rectY - rectHeight / 2 + 120; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX7+33, textY7+0);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX7+48, textY7+2);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX7+20, textY7+8);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX7+58, textY7+0);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX7+58, textY7+14);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX7+14, textY7+10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX7+10, textY7+35);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX7+11, textY7+33); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX7+40, textY7+46);
    text("≡", textX7+52, textY7+46);
    text("≡", textX7+66, textY7+46);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX7+16, textY7+47); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX7+24, textY7+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX7+33, textY7+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX7+46, textY7+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX7+57, textY7+48); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX8 = rectX - rectWidth / 2 + 212; 
let textY8 = rectY - rectHeight / 2 + 120; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX8+33, textY8+0);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX8+24, textY8+16);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX8+38, textY8+12);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX8+18, textY8+28);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX8+41, textY8+15); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX8+16, textY8+30); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX8+29, textY8+42);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX8+46, textY8+28); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX8+12, textY8+53);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX8+49, textY8+53);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX8, textY8+65);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX8+11, textY8+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX8+22, textY8+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX8+39, textY8+68);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX8+52, textY8+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX8+62, textY8+67);

let textX9 = rectX - rectWidth / 2 + 320; 
let textY9 = rectY - rectHeight / 2 + 120; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX9, textY9+0);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX9+9, textY9-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX9+20, textY9-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX9+35, textY9+4);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX9+42, textY9+20);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX9+43, textY9+30);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX9+9, textY9+11);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX9+10, textY9+10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX9+10, textY9+22); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX9+21, textY9+25); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX9+28, textY9+38);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX9+9, textY9+47);
    text("+", textX9+9, textY9+56);
    text("+", textX9+9, textY9+68);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX9+42, textY9+48);
    text("≡", textX9+45, textY9+58);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX9, textY9+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX9+20, textY9+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX9+30, textY9+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX9+39, textY9+66);

let textX10 = rectX - rectWidth / 2 + 420; 
let textY10 = rectY - rectHeight / 2 + 120; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX10+13, textY10+5);
    text("×", textX10+25, textY10);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX10+38, textY10+5);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX10+1, textY10+20);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX10+7, textY10+33);
    text("≡", textX10+25, textY10+37);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX10+40, textY10+42);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX10+41, textY10+56);
    text("+", textX10+35, textY10+67);
    text("+", textX10+25, textY10+70);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX10+9, textY10+70);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX10, textY10+53); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX10, textY10+42); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX11 = rectX - rectWidth / 2 + 500; 
let textY11 = rectY - rectHeight / 2 + 120; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX11+13, textY11);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX11+24, textY11+2);
    text("≡", textX11+38, textY11+2);
    text("≡", textX11+51, textY11+2);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX11+67, textY11-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX11+67, textY11+2); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX11+13, textY11+15);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX11+66, textY11+23);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX11+38, textY11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX11+38, textY11+11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX11+38, textY11+25); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX11+39, textY11+51);
    text("×", textX11+39, textY11+67);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX11+23, textY11+70);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX11+52, textY11+68);

let textX12 = rectX - rectWidth / 2 + 17; 
let textY12 = rectY - rectHeight / 2 + 222; 

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX12, textY12);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX12+11, textY12-12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX12+22, textY12);
    text("+", textX12+33, textY12);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX12+44, textY12+10);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX12+11, textY12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX12+11, textY12+12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX12+11, textY12+23); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX12+47, textY12+8); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX12+24, textY12+18); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX12+34, textY12+18); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX12+38, textY12+40);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX12+11, textY12+47);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX12+43, textY12+37); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX12+11, textY12+47);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX12, textY12+62);
    text("×", textX12+11, textY12+62);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX12+21, textY12+65);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX12+45, textY12+62);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX12+54, textY12+62);

let textX13 = rectX - rectWidth / 2 + 100; 
let textY13 = rectY - rectHeight / 2 + 222; 

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX13+43, textY13);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX13+37, textY13+13);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX13+49, textY13+1); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(20); 
        fill('#72C8F8');
        noStroke();
        text("+", textX13+30, textY13+27);
    
            textSize(24); 
            fill('#CC0000');
            noStroke();
            push(); // Save the current transformation state
            translate(textX13+54, textY13+15); // Move the origin to the text position
            rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
            text("≡", 0, 0); // Draw the text at the rotated position
            pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX13+26, textY13+39);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX13+41, textY13+39);
    text("≡", textX13+55, textY13+39);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX13+20, textY13+48);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX13+63, textY13+40); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX13+13, textY13+52); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX13+21, textY13+52); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX13+31, textY13+52); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX13+52, textY13+62);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX13+64, textY13+52); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX13+72, textY13+62);

let textX14 = rectX - rectWidth / 2 + 206; 
let textY14 = rectY - rectHeight / 2 + 222; 

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX14+32, textY14);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX14+45, textY14+2);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX14+57, textY14+7);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX14+60, textY14+15);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX14+20, textY14+10);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX14+9, textY14+27);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX14+9, textY14+38);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX14+13, textY14+40); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX14+22, textY14+50); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX14+32, textY14+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

            textSize(24); 
            fill('#CC0000');
            noStroke();
            push(); // Save the current transformation state
            translate(textX14+44, textY14+54); // Move the origin to the text position
            rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
            text("≡", 0, 0); // Draw the text at the rotated position
            pop();

            textSize(24); 
            fill('#CC0000');
            noStroke();
            push(); // Save the current transformation state
            translate(textX14+55, textY14+54); // Move the origin to the text position
            rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
            text("≡", 0, 0); // Draw the text at the rotated position
            pop();

            textSize(24); 
            fill('#CC0000');
            noStroke();
            push(); // Save the current transformation state
            translate(textX14+55, textY14+42); // Move the origin to the text position
            rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
            text("≡", 0, 0); // Draw the text at the rotated position
            pop();

let textX15 = rectX - rectWidth / 2 + 315; 
let textY15 = rectY - rectHeight / 2 + 222; 

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX15+2, textY15-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX15+14, textY15-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX15+23, textY15+3);
    text("≡", textX15+39, textY15+3);
    text("≡", textX15+51, textY15+3);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX15+2, textY15+4); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX15+30, textY15+2); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX15+54, textY15+14);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX15+30, textY15+14); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX15+30, textY15+38);
    text("×", textX15+30, textY15+52);
    text("×", textX15+18, textY15+64);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX15+28, textY15+67);
    text("≡", textX15+41, textY15+67);
   
let textX16 = rectX - rectWidth / 2 + 433; 
let textY16 = rectY - rectHeight / 2 + 222; 

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX16, textY16-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX16+10, textY16-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); // Save the current transformation state
        translate(textX16+24, textY16-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("=", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX16+10, textY16+15);
    text("+", textX16+10, textY16+27);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX16+11, textY16+38);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX16+9, textY16+56);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX16, textY16+65);
    text("×", textX16+13, textY16+65);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX16+23, textY16+66);

let textX17 = rectX - rectWidth / 2 + 518; 
let textY17 = rectY - rectHeight / 2 + 222; 

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX17+25, textY17);
    text("+", textX17+40, textY17+4);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX17+10, textY17+5);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX17, textY17+21);
    text("≡", textX17-4, textY17+33);
    text("≡", textX17-2, textY17+46);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX17+49, textY17+7);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX17+53, textY17+18);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX17+51, textY17+30); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX17+46, textY17+55);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX17+5, textY17+44); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX17+20, textY17+66);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX17+34, textY17+53);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX18 = rectX - rectWidth / 2 + 11; 
let textY18 = rectY - rectHeight / 2 + 322; 

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX18+5, textY18-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX18+15, textY18-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX18+43, textY18);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX18+52, textY18);
    
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX18+63, textY18);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX18+16, textY18+14);
    text("+", textX18+52, textY18+14);
    text("+", textX18+52, textY18+26);
    
        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX18+25, textY18+2); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX18+18, textY18+16);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX18+18, textY18+28);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX18+33, textY18+28);
    text("≡", textX18+39, textY18+39);
    text("≡", textX18+50, textY18+42);
    text("≡", textX18+50, textY18+55);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX18+17, textY18+53);
    text("×", textX18+17, textY18+65);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX18+5, textY18+65);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX18+25, textY18+55);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX18+53, textY18+65);

let textX19 = rectX - rectWidth / 2 + 227; 
let textY19 = rectY - rectHeight / 2 + 322; 

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX19, textY19);  

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX19+16, textY19-2);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX19+28, textY19-2);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX19+14, textY19+15); 

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX19+16, textY19+14); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX19+16, textY19+25); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX19+16, textY19+38); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX19+17, textY19+54);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX19+3, textY19+54);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX19+30, textY19+54);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX20 = rectX - rectWidth / 2 + 317; 
let textY20 = rectY - rectHeight / 2 + 322;

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX20, textY20);
    text("+", textX20+12, textY20);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX20+20, textY20-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX20+41, textY20-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX20+51, textY20+3);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX20+12, textY20+12);
    text("+", textX20+49, textY20+12);
    text("+", textX20+49, textY20+24);
    text("+", textX20+49, textY20+34);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX20+26, textY20+1); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX20+33, textY20+24);
    text("×", textX20+41, textY20+32);
    text("×", textX20+49, textY20+48);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX20+13, textY20+16);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX20+13, textY20+28);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX20+13, textY20+42);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX20, textY20+68);
    text("≡", textX20+15, textY20+68);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX20+50, textY20+55);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX21 = rectX - rectWidth / 2 + 514; 
let textY21 = rectY - rectHeight / 2 + 322;

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX21+30, textY21);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX21+23, textY21+10);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX21+39, textY21);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX21+18, textY21+25);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX21+42, textY21+12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX21+45, textY21+26); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX21+13, textY21+42);
    text("+", textX21+30, textY21+42);
    text("+", textX21+8, textY21+56);
    text("+", textX21+38, textY21+42);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX21, textY21+66);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX21+12, textY21+66);
    text("+", textX21+20, textY21+66);


        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX21+53, textY21+42);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX21+43, textY21+57);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX21+53, textY21+57);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX21+59, textY21+70);

let textX22 = rectX - rectWidth / 2 + 12; 
let textY22 = rectY - rectHeight / 2 + 422;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX22, textY22);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX22+10, textY22-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX22+19, textY22-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22+45, textY22-9);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX22+54, textY22+1);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22+65, textY22-9);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX22+10, textY22+13);
    text("+", textX22+10, textY22+24);
    text("+", textX22+10, textY22+36);
    
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX22+22, textY22+12);
    text("×", textX22+54, textY22+15);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX22+27, textY22+25);
    text("≡", textX22+33, textY22+35);
    text("≡", textX22+38, textY22+46);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX22+54, textY22+28);
    text("+", textX22+54, textY22+42);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX22+9, textY22+54);
    text("≡", textX22+9, textY22+69);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22, textY22+56);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22+22, textY22+56);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22+55, textY22+46);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX22+55, textY22+57);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX23 = rectX - rectWidth / 2 + 119; 
let textY23 = rectY - rectHeight / 2 + 422;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX23+30, textY23);
    text("×", textX23+14, textY23+3);
    text("×", textX23+45, textY23+13);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX23+44, textY23+3);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX23+5, textY23+5);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX23, textY23+17); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX23, textY23+29); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX23+4, textY23+55);
    text("≡", textX23+15, textY23+65);
    text("≡", textX23+30, textY23+70);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX23+46, textY23+52);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX23+52, textY23+40);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX23+52, textY23+65);

let textX24 = rectX - rectWidth / 2 + 224; 
let textY24 = rectY - rectHeight / 2 + 422;

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX24+5, textY24);
    text("≡", textX24+18, textY24);
    text("≡", textX24+31, textY24);      

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX24+21, textY24+10);
    text("×", textX24+21, textY24+22);
    text("×", textX24+21, textY24+35);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX24+21, textY24+40);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX24+21, textY24+56);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX24+7, textY24+66);
    text("+", textX24+32, textY24+66);

let textX25 = rectX - rectWidth / 2 + 313; 
let textY25 = rectY - rectHeight / 2 + 422;
    
    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX25, textY25);
    text("≡", textX25+15, textY25);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX25+30, textY25-2);
    text("×", textX25+42, textY25-2);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX25+52, textY25-13); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX25+52, textY25-1); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX25+14, textY25+12);
    text("≡", textX25+14, textY25+24);
    text("≡", textX25+14, textY25+37);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX25+28, textY25+20); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX25+37, textY25+25);
    text("+", textX25+37, textY25+34);
    text("+", textX25+37, textY25+42);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX25+16, textY25+39);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX25+16, textY25+56);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX25+4, textY25+56);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX25+25, textY25+69);
    text("≡", textX25+38, textY25+69);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX25+50, textY25+46); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX25+50, textY25+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();


let textX26 = rectX - rectWidth / 2 + 415; 
let textY26 = rectY - rectHeight / 2 + 422;

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26, textY26-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX26+10, textY26+1);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+21, textY26-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+45, textY26-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX26+53, textY26);
    text("×", textX26+62, textY26);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+11, textY26+3);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+11, textY26+14);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+54, textY26+3);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+54, textY26+16);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX26+54, textY26+24);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX26+22, textY26+15);
    text("≡", textX26+27, textY26+26);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX26+40, textY26+23); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX26+10, textY26+39);
    text("×", textX26+10, textY26+53);
    text("×", textX26+10, textY26+67);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX26+46, textY26+46);
    text("+", textX26+53, textY26+55);
    text("+", textX26+53, textY26+68);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX26-1, textY26+69);

let textX27 = rectX - rectWidth / 2 + 522; 
let textY27 = rectY - rectHeight / 2 + 422;

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX27, textY27-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX27+10, textY27-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX27+23, textY27+2);
    text("×", textX27+23, textY27+14);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX27+32, textY27+4);
    text("≡", textX27+45, textY27+4);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX27, textY27+13);
    text("×", textX27+49, textY27+13);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX27+23, textY27+16);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX27+23, textY27+28);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX27+22, textY27+51);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX27+20, textY27+61);
    text("≡", textX27+31, textY27+71);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX27+23, textY27+58);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX27+12, textY27+58);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX28 = rectX - rectWidth / 2 + 6; 
let textY28 = rectY - rectHeight / 2 + 522;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX28+33, textY28);
    text("×", textX28+47, textY28+3);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX28+20, textY28+3);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX28+14, textY28+14);
    text("≡", textX28+20, textY28+27);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX28+47, textY28+4); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX28+38, textY28+24);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX28+50, textY28+18);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX28+70, textY28+19);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX28+60, textY28+30);
    text("+", textX28+59, textY28+40);
    text("+", textX28+54, textY28+50);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX28+32, textY28+38);
    text("×", textX28+46, textY28+50);
    text("×", textX28+43, textY28+63);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX28+18, textY28+44);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX28+10, textY28+40); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX28+11, textY28+50); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX28+19, textY28+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();
        
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX28+32, textY28+68);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX28+54, textY28+68);
    text("≡", textX28+60, textY28+68);

let textX29 = rectX - rectWidth / 2 + 212; 
let textY29 = rectY - rectHeight / 2 + 522;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX29, textY29);
    text("×", textX29+15, textY29);
    text("×", textX29+18, textY29+12);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX29+54, textY29+1);
    text("≡", textX29+67, textY29+1);
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX29+4, textY29+14);
    text("+", textX29+4, textY29+25);
    text("+", textX29+4, textY29+38);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX29+3, textY29+53);
    text("≡", textX29+3, textY29+68);
    
    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX29+50, textY29+10);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+60, textY29-3); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+60, textY29+10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+20, textY29+12); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+24, textY29+24); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX29+29, textY29+53);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX29+37, textY29+36);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX29+41, textY29+23);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX29+46, textY29+11);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX29+61, textY29+24);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+60, textY29+38); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX29+60, textY29+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX29-5, textY29+65);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX29+12, textY29+66);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX29+30, textY29+68);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX29+52, textY29+65);
    text("+", textX29+68, textY29+65);

let textX30 = rectX - rectWidth / 2 + 309; 
let textY30 = rectY - rectHeight / 2 + 522;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX30+35, textY30);
    text("×", textX30+49, textY30+3);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX30+20, textY30+5);
    text("+", textX30+12, textY30+15);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX30+8, textY30+16); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX30+8, textY30+30); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX30+62, textY30+16); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX30+62, textY30+28); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX30+13, textY30+55);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX30+60, textY30+4);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();
    
    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX30+56, textY30+55);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX30+48, textY30+62);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX30+24, textY30+51);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX30+34, textY30+68);

let textX31 = rectX - rectWidth / 2 + 418; 
let textY31 = rectY - rectHeight / 2 + 522;

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX31, textY31);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX31+12, textY31);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX31+28, textY31-1);
    text("+", textX31+40, textY31+2);
    text("+", textX31+48, textY31+8);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX31+54, textY31+8); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX31+57, textY31+32);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX31+55, textY31+32); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX31+50, textY31+45); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();
    
    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX31+10, textY31+10);
    text("×", textX31+10, textY31+22);
    text("×", textX31+10, textY31+34);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX31+11, textY31+40);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX31+11, textY31+55);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX31+20, textY31+68);
    text("≡", textX31+0, textY31+68);
    text("≡", textX31+36, textY31+66);

let textX32 = rectX - rectWidth / 2 + 519; 
let textY32 = rectY - rectHeight / 2 + 522;

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32-3, textY32-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX32+11, textY32-9);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX32+23, textY32+1);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32+35, textY32-10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX32+47, textY32+4);
    text("≡", textX32+47, textY32+18);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX32+6, textY32+12);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX32+8, textY32+13);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32+6, textY32+24); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32+6, textY32+34); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32+6, textY32+44); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX32-4, textY32+66);
    text("×", textX32+6, textY32+66);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX32+16, textY32+37);
    text("+", textX32+30, textY32+27);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX32+30, textY32+26);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX32+30, textY32+48);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX32+16, textY32+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX32+30, textY32+69);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX32+47, textY32+69);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX32+47, textY32+57);

let textX33 = rectX - rectWidth / 2 + 13; 
let textY33 = rectY - rectHeight / 2 + 622;

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX33, textY33);
    text("+", textX33+10, textY33);
    text("+", textX33+10, textY33+10);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX33+21, textY33-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX33+32, textY33-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX33+44, textY33-7);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX33+47, textY33+19);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX33+12, textY33+10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX33+12, textY33+23);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX33+12, textY33+42);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();
    
    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX33+47, textY33+19);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX33+8, textY33+69);
    text("≡", textX33-2, textY33+69);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX33+21, textY33+55); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX33+42, textY33+26);
    text("×", textX33+23, textY33+33);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX33+31, textY33+32);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX33+38, textY33+38);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX33+45, textY33+49);
    text("≡", textX33+47, textY33+61);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX33+49, textY33+66);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX33+57, textY33+70);
    
let textX34 = rectX - rectWidth / 2 + 113; 
let textY34 = rectY - rectHeight / 2 + 622;

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34, textY34-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX34+8, textY34);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+18, textY34-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+46, textY34-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+54, textY34-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+64, textY34-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX34+8, textY34+13);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+10, textY34+15);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+10, textY34+27);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+10, textY34+38);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+10, textY34+50);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX34, textY34+66);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX34+21, textY34-1); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX34+26, textY34+10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX34+33, textY34+20);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX34+40, textY34+42);
    text("×", textX34+55, textY34+34);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX34+55, textY34+13);
    text("+", textX34+55, textY34+23);
    text("+", textX34+48, textY34+49);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX34+53, textY34+52);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX34+53, textY34+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX35 = rectX - rectWidth / 2 + 345; 
let textY35 = rectY - rectHeight / 2 + 622;

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX35, textY35-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX35-8, textY35+9);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX35+4, textY35+9);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX35-9, textY35+10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX35+3, textY35+22);
    text("≡", textX35+7, textY35+31);
    text("≡", textX35+11, textY35+43);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX35+20, textY35+53);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX35-15, textY35+32);
    text("+", textX35-19, textY35+42);
    text("+", textX35-23, textY35+55);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX35-33, textY35+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX35-20, textY35+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX35+10, textY35+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX35+18, textY35+54); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX35+28, textY35+68);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX35-12, textY35+48);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX35+2, textY35+38);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

let textX36 = rectX - rectWidth / 2 + 419; 
let textY36 = rectY - rectHeight / 2 + 622;

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36, textY36-9); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX36+11, textY36+2);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX36+22, textY36-7);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX36+34, textY36-7);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX36+47, textY36-1);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36+50, textY36+10); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36+44, textY36+20); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX36+11, textY36+16);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX36+11, textY36+26);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX36+11, textY36+38);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX36+11, textY36+50);
    text("×", textX36+11, textY36+60);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX36-2, textY36+70);
    text("≡", textX36+8, textY36+70);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX36+23, textY36+67);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX36+25, textY36+37);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX36+37, textY36+40);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX36+43, textY36+39);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36+44, textY36+50); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36+48, textY36+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX36+57, textY36+56); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

let textX37 = rectX - rectWidth / 2 + 520; 
let textY37 = rectY - rectHeight / 2 + 622;

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX37-3, textY37);
    
        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX37+9, textY37-11); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX37+22, textY37-10);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX37+33, textY37);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX37+46, textY37);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX37-5, textY37+14);

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX37+20, textY37+11);

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX37+22, textY37+13);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

        textSize(18); 
        fill('#B29675');
        stroke('#B29675');
        strokeWeight(2);
        push(); 
        translate(textX37+48, textY37-2);
        rotate(HALF_PI); 
        text("=", 0, 0); 
        pop();

    textSize(20); 
    fill('#72C8F8');
    noStroke();
    text("+", textX37+47, textY37+15);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX37+21, textY37+25); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX37+19, textY37+48);
    text("≡", textX37+19, textY37+59);

    textSize(18); 
    fill('#C887FB');
    stroke('#C887FB');
    strokeWeight(1.5);
    text("×", textX37+22, textY37+68);

    textSize(28); 
    fill('#ABD551');
    stroke('#ABD551');
    strokeWeight(1);
    text("≡", textX37+7, textY37+70);

        textSize(24); 
        fill('#CC0000');
        noStroke();
        push(); // Save the current transformation state
        translate(textX37+32, textY37+57); // Move the origin to the text position
        rotate(HALF_PI); // Rotate by 90 degrees (PI/2 radians)
        text("≡", 0, 0); // Draw the text at the rotated position
        pop();

}

function mouseClicked() {
    add();
  }
