let positionsX = 
[425, 433, 444, 458, 482, 493, 502, 532, 541, 550, 563, 578, 590, 664, 729, 743, 755, 781, 793, 856, 863, 876, 937, 947, 983, 995,
433, 458, 475, 496, 552, 588, 658, 673, 748, 788, 869, 942, 956, 990,
437, 464, 493, 552, 578, 652, 676, 750, 782, 869, 942, 962, 990,
440, 466, 488, 549, 563, 577, 650, 658, 666, 678, 753, 778, 869, 942, 972, 990,
447, 484, 552, 594, 645, 682, 757, 771, 869, 942, 982, 990,
451, 480, 538, 550, 563, 578, 594, 637, 648, 676, 685, 694, 763, 856, 863, 876, 941, 949, 956, 989, 

461, 489, 663, 734, 746, 760, 861, 934, 947, 959, 972, 986,
450, 475, 489, 658, 670, 750, 776, 847, 876, 933, 957, 986, 
440, 652, 674, 750, 785, 840, 934, 957, 986,
438, 648, 678, 750, 758, 768, 779, 847, 860, 957,
442, 470, 480, 496, 644, 663, 680, 750, 783, 878, 957,
446, 487, 642, 683, 750, 786, 840, 879, 957,
452, 462, 475, 633, 643, 653, 673, 686, 692, 738, 748, 753, 762, 774, 851, 865, 943, 959, 972,

440, 450, 466, 479, 563, 656, 667, 736, 744, 759, 774, 791, 855, 864, 878, 966,
448, 482, 557, 568, 641, 687, 734, 763, 792, 865, 946, 978,
448, 462, 472, 550, 574, 633, 686, 763, 864, 938, 987,
448, 479, 545, 562, 577, 632, 763, 864, 936, 988,
448, 480, 541, 580, 637, 763, 864, 940, 986, 
440, 450, 462, 482, 491, 534, 548, 574, 580, 590, 653, 663, 678, 750, 763, 777, 852, 864, 871, 955, 963, 972,

432, 444, 472, 483, 492, 649, 662, 674, 740, 754, 778, 788, 966,
444, 452, 483, 662, 749, 759, 785, 960, 972,
444, 464, 483, 662, 749, 769, 785, 957, 975,
444, 473, 483, 662, 749, 785, 952, 967, 978,
444, 483, 662, 749, 785, 944, 984,
436, 443, 452, 483, 649, 662, 673, 741, 755, 786, 936, 948, 953, 978, 985, 995,

431, 443, 453, 480, 492, 555, 568, 583, 649, 662, 674, 735, 746, 758, 770, 786, 835, 845, 853, 880, 890, 940, 952, 964, 976, 988,
442, 453, 487, 545, 584, 663, 746, 785, 845, 856, 889, 940, 964, 988,
442, 463, 487, 538, 663, 746, 770, 845, 860, 889, 964, 
442, 473, 487, 537, 663, 746, 754, 760, 769, 845, 873, 889, 964, 
442, 487, 540, 586, 663, 746, 781, 845, 889, 964,
431, 442, 454, 487, 555, 565, 580, 650, 663, 674, 735, 746, 758, 770, 781, 835, 844, 890, 951, 964, 976,

445, 459, 632, 642, 689, 698, 758, 767, 840, 853, 866, 872, 937, 949, 963, 973, 984,
441, 473, 636, 647, 687, 692, 743, 784, 847, 883, 944, 984, 
447, 466, 636, 652, 676, 692, 738, 789, 846, 891, 944,
456, 478, 490, 636, 658, 672, 692, 737, 790, 846, 893, 944, 956, 968,
443, 477, 969,
433, 467, 636, 664, 692, 744, 783, 846, 887, 944, 988,
449, 459, 480, 628, 635, 642, 664, 683, 692, 699, 762, 770, 838, 848, 866, 874, 937, 950, 963, 974, 988,

431, 444, 454, 469, 532, 547, 580, 592, 762, 839, 847, 859, 869, 934, 947, 959, 972, 986,
444, 479, 540, 558, 588, 756, 770, 848, 887, 934, 961, 985,
444, 455, 470, 540, 565, 588, 752, 774, 848, 862, 869, 876, 960,
444, 477, 540, 579, 588, 747, 763, 780, 848, 881, 960,
433, 442, 452, 480, 490, 532, 540, 550, 588, 736, 747, 769, 779, 790, 839, 847, 855, 879, 889, 949, 959, 968,

];

let positionsY = 
[76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76,
90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102,
117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117, 117,
131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131,
145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145,

176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
198, 198, 198, 198, 198, 198, 198, 198, 198,
211, 211, 211, 211, 211, 211, 211, 211, 211, 211,  
223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223,
234, 234, 234, 234, 234, 234, 234, 234, 234,
243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243, 243,

276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276,
290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290, 290,
305, 305, 305, 305, 305, 305, 305, 305, 305, 305, 305,
316, 316, 316, 316, 316, 316, 316, 316, 316, 316,
328, 328, 328, 328, 328, 328, 328, 328, 328,
340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340, 340,

378, 378, 378, 378, 378, 378, 378, 378, 378, 378, 378, 378, 378,
390, 390, 390, 390, 390, 390, 390, 390, 390, 
404, 404, 404, 404, 404, 404, 404, 404, 404,
416, 416, 416, 416, 416, 416, 416, 416, 416,
431, 431, 431, 431, 431, 431, 431,
443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443, 443,

477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477, 477,
489, 489, 489, 489, 489, 489, 489, 489, 489, 489, 489, 489, 489, 489, 
502, 502, 502, 502, 502, 502, 502, 502, 502, 502, 502,
514, 514, 514, 514, 514, 514, 514, 514, 514, 514, 514, 514, 514, 
528, 528, 528, 528, 528, 528, 528, 528, 528, 528,
543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543, 543,

578, 578,  578, 578, 578, 578, 578, 578, 578, 578, 578, 578, 578, 578,  578, 578, 578, 
590, 590, 590, 590, 590, 590, 590, 590, 590, 590, 590, 590,
601, 601, 601, 601, 601, 601, 601, 601, 601, 601, 601,
612, 612, 612, 612, 612, 612, 612, 612, 612, 612, 612, 612, 612, 612,
619, 619, 619,
632, 632, 632, 632, 632, 632, 632, 632, 632, 632, 632,
645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645, 645,    

679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679, 679,
694, 694, 694, 694, 694, 694, 694, 694, 694, 694, 694, 694,
710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710, 710,
726, 726, 726, 726, 726, 726, 726, 726, 726, 726, 726, 
743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743, 743,         

];

let fontSizes = 
[20, 20, 23, 22, 19, 23, 18, 20, 24, 24, 20, 20, 23, 18, 20, 23, 22, 18, 21, 19, 22, 21, 21, 23, 21, 21,
20, 18, 18, 20, 22, 21, 19, 20, 21, 21, 18, 18, 23, 18,
23, 23, 18, 23, 19, 18, 23, 22, 19, 24, 18, 22, 19,
24, 24, 18, 18, 24, 18, 18, 18, 18, 23, 24, 18, 24, 18, 24, 18,
24, 19, 24, 18, 18, 24, 23, 23, 18, 24, 19, 22,
18, 21, 20, 20, 21, 22, 23, 24, 24, 22, 24, 22, 20, 23, 24, 24, 18, 18, 22, 23,

18, 20, 24, 20, 24, 21, 23, 23, 24, 22, 20, 24,
23, 20, 18, 19, 23, 22, 24, 24, 19, 19, 24, 19,
24, 18, 24, 23, 24, 24, 18, 24, 18,
24, 19, 24, 24, 19, 20, 19, 23, 24, 23,
20, 23, 24, 24, 18, 19, 24, 24, 24, 24, 24,
19, 24, 18, 24, 24, 24, 19, 23, 23, 
19, 18, 18, 18, 19, 18, 19, 19, 18, 21, 23, 21, 21, 18, 22, 20, 20, 22, 20,

18, 19, 20, 20, 18, 21, 18, 24, 23, 23, 20, 20, 22, 24, 21, 18,
23, 24, 18, 23, 20, 19, 23, 24, 19, 21, 23, 22,
23, 18, 18, 18, 23, 24, 24, 24, 24, 24, 24,
21, 21, 20, 18, 24, 24, 23, 23, 24, 23,
23, 20, 18, 23, 22, 19, 23, 20, 20,
18, 23, 22, 18, 20, 20, 22, 22, 23, 18, 18, 20, 18, 21, 20, 20, 23, 22, 22, 18, 18, 19,

23, 23, 22, 22, 23, 20, 22, 20, 18, 22, 21, 22, 18,
18, 21, 18, 24, 21, 24, 20, 18, 21,
18, 24, 19, 24, 18, 23, 19, 18, 23,
19, 22, 18, 24, 18, 21, 19, 21, 24,
19, 18, 24, 18, 21, 19, 23,
19, 23, 18, 21, 20, 21, 21, 22, 22, 18, 22, 19, 22, 22, 24, 19, 19, 20, 19,

23, 19, 19, 22, 21, 18, 18, 20, 19, 20, 21, 18, 22, 18, 19, 19, 22, 22, 18, 18, 21, 21, 19,
18, 22, 20, 21, 23, 23, 22, 23, 18, 24, 18, 19, 22, 18,
18, 24, 18, 22, 24, 23, 18, 18, 22, 18, 23,
19, 22, 18, 24, 22, 22, 19, 19, 23, 18, 24, 18, 21,
20, 23, 23, 23, 22, 22, 18, 21, 23, 22,
18, 23, 23, 23, 22, 22, 18, 19, 20, 21, 23, 22, 19, 22, 24, 18, 19, 20, 18, 22, 21,

19, 22, 18, 24, 18, 21, 19, 21, 24, 19, 19, 23, 18, 18, 19, 22, 22,
21, 19, 24, 18, 18, 24, 23, 23, 18, 24, 19, 22, 
18, 19, 24, 18, 24, 24, 24, 19, 23, 23, 22, 
22, 22, 23, 23, 20, 20, 22, 24, 21, 18, 18, 24, 19, 24,
21, 18, 18,
23, 20, 18, 19, 23, 22, 24, 24, 19, 19, 24,
18, 23, 20, 19, 23, 24, 19, 21, 23, 22, 21, 23, 22, 21, 18, 18, 19, 22, 22, 22, 21,

18, 20, 24, 20, 24, 21, 23, 23, 24, 22, 20, 24, 21, 18, 18, 24, 22, 20,
18, 21, 18, 24, 21, 24, 20, 18, 21, 19, 19, 24, 
20, 19, 18, 20, 20, 22, 22, 23, 18, 18, 20, 18, 21, 
22, 23, 24, 18, 23, 20, 19, 23, 24, 19, 19,
21, 19, 18, 23, 22, 19, 24, 18, 22, 19, 18, 22, 19, 24, 18, 24, 24, 21, 22, 19, 18, 21, 24, 21, 22, 

]

// Define p5 sketch in instance mode
const sketch = (p) => {
    let rectWidth = 600;
    let rectHeight = 700;
    let rectX;
    let rectY;
    let btn;

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight); // Make canvas size of window
        p.fill(0);
        p.rectMode(p.CENTER);
        rectX = p.width / 2; // Set rectX to the center of the canvas
        rectY = p.height / 2; // Set rectY to the center of the canvas
        p.noFill();
        p.noStroke();
        p.rectMode(p.CENTER);
        p.rect(rectX, rectY, rectWidth, rectHeight);
        add(rectX, rectY);
        addNewSymbols(); 
    };
    

    p.draw = function() {
        // You can add drawing logic here if needed
        // p.background('#FAF7F3');
        p.noFill();
        p.strokeWeight(3);
        addNewSymbols() ;
    };

    function addNewSymbols() {
        // If all input fields are filled, proceed to display symbols
        for (let i = 0; i < fontSizes.length; i++) {
            p.textSize(fontSizes[i]); 
            p.fill('#000000');       
            p.stroke('#000000');
            p.strokeWeight(0.35);
            p.text("+", positionsX[i], positionsY[i]);
        }
    }
    function add(x,y) {

        let rectX = x;
        let rectY = y;
            
                
        let textX = rectX - rectWidth / 2 + 2; // Adjust x position
        let textY = rectY - rectHeight / 2 + 22; // Adjust y position

        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+2, textY);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX+11, textY+1.5);
        p.text("≡", textX+25, textY+1.5);
            
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX+40, textY-12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+55, textY);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX+65, textY+1.5);
        p.text("≡", textX+79, textY+1.5);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX+15, textY); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX+35, textY+2); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+51, textY+12);
        p.text("+", textX+76, textY+13);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX+18, textY+12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX+45, textY+25);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+70, textY+25);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX+22, textY+25); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX+52, textY+28); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX+65, textY+40);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+37, textY+45);
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX+25, textY+55);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX+59, textY+43); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX+30, textY+66);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX+57, textY+67);
    
    let textX2 = rectX - rectWidth / 2 + 104; 
    let textY2 = rectY - rectHeight / 2 + 22; 
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX2+11, textY2+1.5);
        p.text("≡", textX2+25, textY2+1.5);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX2+45, textY2);
        p.text("×", textX2+57, textY2);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX2+70, textY2+1);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX2+70, textY2+2); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX2+27, textY2+6); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX2+27, textY2+22); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX2+38, textY2+36);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX2+55, textY2+13); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX2+54, textY2+34);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX2+55, textY2+35); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX2+28, textY2+50);
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX2+15, textY2+70);
        p.text("≡", textX2+30, textY2+70);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX2+45, textY2+68);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX2+55, textY2+70);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX2+71, textY2+59);
        p.text("+", textX2+71, textY2+68);
    
    let textX3 = rectX - rectWidth / 2 + 205; 
    let textY3 = rectY - rectHeight / 2 + 22; 
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX3+38, textY3+1.5);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX3+31, textY3+15);
        p.text("+", textX3+27, textY3+25);
        p.text("+", textX3+23, textY3+38);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX3+48, textY3+13);
        p.text("×", textX3+53, textY3+33);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX3+20, textY3+44); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX3+62, textY3+44); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX3+31, textY3+47);
        p.text("+", textX3+46, textY3+47);
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX3+10, textY3+70);
        p.text("≡", textX3+25, textY3+70);
        p.text("≡", textX3+50, textY3+70);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX3+63, textY3+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX3+73, textY3+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX4 = rectX - rectWidth / 2 + 310; 
    let textY4 = rectY - rectHeight / 2 + 22; 
    
        p.textSize(28); 
        p.stroke('#EBE6DF');
        p.fill('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX4, textY4+1.5);
        p.text("≡", textX4+15, textY4+1.5);
        p.text("≡", textX4+28, textY4+1.5);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX4+55, textY4);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX4+65, textY4+3);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX4+18, textY4+12);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX4+55, textY4+13);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX4+22, textY4+16); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX4+26, textY4+30); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX4+50, textY4+28);
        p.text("+", textX4+46, textY4+40);
        p.text("+", textX4+28, textY4+58);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX4+40, textY4+46); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX4+33, textY4+58); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX5 = rectX - rectWidth / 2 + 400; 
    let textY5 = rectY - rectHeight / 2 + 22; 
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX5+33, textY5-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX5+44, textY5-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX5+55, textY5+3);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX5+50, textY5+3); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX5+50, textY5+26);
        p.text("×", textX5+50, textY5+40);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX5+50, textY5+53);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX5+50, textY5+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX5+38, textY5+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX5+59, textY5+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX6 = rectX - rectWidth / 2 + 513; 
    let textY6 = rectY - rectHeight / 2 + 22; 
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX6, textY6+3);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX6+17, textY6);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX6+45, textY6+3);
        p.text("≡", textX6+62, textY6+3);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX6+10, textY6+3); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX6+25, textY6+15);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX6+55, textY6+17);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX6+10, textY6+18); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX6+33, textY6+30);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX6+55, textY6+32);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX6+12, textY5+34); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX6+40, textY6+34); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX6+55, textY6+45);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX6+12, textY5+45); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX6+56, textY5+45); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX6+10, textY6+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX6+19, textY6+70);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX6+28, textY6+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX6+56, textY5+59); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX7 = rectX - rectWidth / 2 + 10; 
    let textY7 = rectY - rectHeight / 2 + 120; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX7+33, textY7+0);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX7+48, textY7+2);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX7+20, textY7+8);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX7+58, textY7+0);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX7+58, textY7+14);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX7+14, textY7+10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX7+10, textY7+35);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX7+11, textY7+33); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX7+40, textY7+46);
        p.text("≡", textX7+52, textY7+46);
        p.text("≡", textX7+66, textY7+46);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX7+16, textY7+47); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX7+24, textY7+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX7+33, textY7+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX7+46, textY7+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX7+57, textY7+48); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX8 = rectX - rectWidth / 2 + 212; 
    let textY8 = rectY - rectHeight / 2 + 120; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX8+33, textY8+0);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX8+24, textY8+16);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX8+38, textY8+12);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX8+18, textY8+28);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX8+41, textY8+15); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX8+16, textY8+30); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX8+29, textY8+42);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX8+46, textY8+28); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX8+12, textY8+53);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX8+49, textY8+53);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX8, textY8+65);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX8+11, textY8+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX8+22, textY8+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX8+39, textY8+68);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX8+52, textY8+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX8+62, textY8+67);
    
    let textX9 = rectX - rectWidth / 2 + 320; 
    let textY9 = rectY - rectHeight / 2 + 120; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX9, textY9+0);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX9+9, textY9-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX9+20, textY9-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX9+35, textY9+4);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX9+42, textY9+20);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX9+43, textY9+30);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX9+9, textY9+11);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX9+10, textY9+10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX9+10, textY9+22); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX9+21, textY9+25); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX9+28, textY9+38);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX9+9, textY9+47);
        p.text("+", textX9+9, textY9+56);
        p.text("+", textX9+9, textY9+68);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX9+42, textY9+48);
        p.text("≡", textX9+45, textY9+58);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX9, textY9+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX9+20, textY9+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX9+30, textY9+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX9+39, textY9+66);
    
    let textX10 = rectX - rectWidth / 2 + 420; 
    let textY10 = rectY - rectHeight / 2 + 120; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX10+13, textY10+5);
        p.text("×", textX10+25, textY10);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX10+38, textY10+5);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX10+1, textY10+20);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX10+7, textY10+33);
        p.text("≡", textX10+25, textY10+37);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX10+40, textY10+42);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX10+41, textY10+56);
        p.text("+", textX10+35, textY10+67);
        p.text("+", textX10+25, textY10+70);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX10+9, textY10+70);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX10, textY10+53); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX10, textY10+42); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX11 = rectX - rectWidth / 2 + 500; 
    let textY11 = rectY - rectHeight / 2 + 120; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX11+13, textY11);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX11+24, textY11+2);
        p.text("≡", textX11+38, textY11+2);
        p.text("≡", textX11+51, textY11+2);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX11+67, textY11-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX11+67, textY11+2); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX11+13, textY11+15);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX11+66, textY11+23);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX11+38, textY11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX11+38, textY11+11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX11+38, textY11+25); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX11+39, textY11+51);
        p.text("×", textX11+39, textY11+67);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX11+23, textY11+70);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX11+52, textY11+68);
    
    let textX12 = rectX - rectWidth / 2 + 17; 
    let textY12 = rectY - rectHeight / 2 + 222; 
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX12, textY12);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX12+11, textY12-12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX12+22, textY12);
        p.text("+", textX12+33, textY12);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX12+44, textY12+10);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX12+11, textY12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX12+11, textY12+12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX12+11, textY12+23); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX12+47, textY12+8); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX12+24, textY12+18); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX12+34, textY12+18); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX12+38, textY12+40);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX12+11, textY12+47);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX12+43, textY12+37); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX12+11, textY12+47);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX12, textY12+62);
        p.text("×", textX12+11, textY12+62);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX12+21, textY12+65);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX12+45, textY12+62);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX12+54, textY12+62);
    
    let textX13 = rectX - rectWidth / 2 + 100; 
    let textY13 = rectY - rectHeight / 2 + 222; 
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX13+43, textY13);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX13+37, textY13+13);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX13+49, textY13+1); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(20); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.text("+", textX13+30, textY13+27);
        
                p.textSize(24); 
                p.fill('#EBE6DF');
                p.noStroke();
                p.push(); // Save the current transformation state
                p.translate(textX13+54, textY13+15); // Move the origin to the text position
                p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
                p.text("≡", 0, 0); // Draw the text at the p.rotated position
                p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX13+26, textY13+39);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX13+41, textY13+39);
        p.text("≡", textX13+55, textY13+39);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX13+20, textY13+48);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX13+63, textY13+40); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX13+13, textY13+52); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX13+21, textY13+52); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX13+31, textY13+52); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX13+52, textY13+62);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX13+64, textY13+52); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX13+72, textY13+62);
    
    let textX14 = rectX - rectWidth / 2 + 206; 
    let textY14 = rectY - rectHeight / 2 + 222; 
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX14+32, textY14);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX14+45, textY14+2);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX14+57, textY14+7);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX14+60, textY14+15);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX14+20, textY14+10);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX14+9, textY14+27);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX14+9, textY14+38);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX14+13, textY14+40); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX14+22, textY14+50); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX14+32, textY14+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
                p.textSize(24); 
                p.fill('#EBE6DF');
                p.noStroke();
                p.push(); // Save the current transformation state
                p.translate(textX14+44, textY14+54); // Move the origin to the text position
                p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
                p.text("≡", 0, 0); // Draw the text at the p.rotated position
                p.pop();
    
                p.textSize(24); 
                p.fill('#EBE6DF');
                p.noStroke();
                p.push(); // Save the current transformation state
                p.translate(textX14+55, textY14+54); // Move the origin to the text position
                p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
                p.text("≡", 0, 0); // Draw the text at the p.rotated position
                p.pop();
    
                p.textSize(24); 
                p.fill('#EBE6DF');
                p.noStroke();
                p.push(); // Save the current transformation state
                p.translate(textX14+55, textY14+42); // Move the origin to the text position
                p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
                p.text("≡", 0, 0); // Draw the text at the p.rotated position
                p.pop();
    
    let textX15 = rectX - rectWidth / 2 + 315; 
    let textY15 = rectY - rectHeight / 2 + 222; 
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX15+2, textY15-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX15+14, textY15-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX15+23, textY15+3);
        p.text("≡", textX15+39, textY15+3);
        p.text("≡", textX15+51, textY15+3);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX15+2, textY15+4); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX15+30, textY15+2); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX15+54, textY15+14);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX15+30, textY15+14); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX15+30, textY15+38);
        p.text("×", textX15+30, textY15+52);
        p.text("×", textX15+18, textY15+64);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX15+28, textY15+67);
        p.text("≡", textX15+41, textY15+67);
       
    let textX16 = rectX - rectWidth / 2 + 433; 
    let textY16 = rectY - rectHeight / 2 + 222; 
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX16, textY16-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX16+10, textY16-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); // Save the current transformation state
            p.translate(textX16+24, textY16-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("=", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX16+10, textY16+15);
        p.text("+", textX16+10, textY16+27);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX16+11, textY16+38);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX16+9, textY16+56);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX16, textY16+65);
        p.text("×", textX16+13, textY16+65);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX16+23, textY16+66);
    
    let textX17 = rectX - rectWidth / 2 + 518; 
    let textY17 = rectY - rectHeight / 2 + 222; 
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX17+25, textY17);
        p.text("+", textX17+40, textY17+4);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX17+10, textY17+5);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX17, textY17+21);
        p.text("≡", textX17-4, textY17+33);
        p.text("≡", textX17-2, textY17+46);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX17+49, textY17+7);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX17+53, textY17+18);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX17+51, textY17+30); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX17+46, textY17+55);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX17+5, textY17+44); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX17+20, textY17+66);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX17+34, textY17+53);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX18 = rectX - rectWidth / 2 + 11; 
    let textY18 = rectY - rectHeight / 2 + 322; 
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX18+5, textY18-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX18+15, textY18-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX18+43, textY18);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX18+52, textY18);
        
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX18+63, textY18);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX18+16, textY18+14);
        p.text("+", textX18+52, textY18+14);
        p.text("+", textX18+52, textY18+26);
        
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX18+25, textY18+2); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX18+18, textY18+16);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX18+18, textY18+28);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX18+33, textY18+28);
        p.text("≡", textX18+39, textY18+39);
        p.text("≡", textX18+50, textY18+42);
        p.text("≡", textX18+50, textY18+55);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX18+17, textY18+53);
        p.text("×", textX18+17, textY18+65);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX18+5, textY18+65);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX18+25, textY18+55);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX18+53, textY18+65);
    
    let textX19 = rectX - rectWidth / 2 + 227; 
    let textY19 = rectY - rectHeight / 2 + 322; 
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX19, textY19);  
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX19+16, textY19-2);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX19+28, textY19-2);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX19+14, textY19+15); 
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX19+16, textY19+14); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX19+16, textY19+25); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX19+16, textY19+38); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX19+17, textY19+54);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX19+3, textY19+54);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX19+30, textY19+54);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX20 = rectX - rectWidth / 2 + 317; 
    let textY20 = rectY - rectHeight / 2 + 322;
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX20, textY20);
        p.text("+", textX20+12, textY20);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX20+20, textY20-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX20+41, textY20-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX20+51, textY20+3);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX20+12, textY20+12);
        p.text("+", textX20+49, textY20+12);
        p.text("+", textX20+49, textY20+24);
        p.text("+", textX20+49, textY20+34);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX20+26, textY20+1); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX20+33, textY20+24);
        p.text("×", textX20+41, textY20+32);
        p.text("×", textX20+49, textY20+48);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX20+13, textY20+16);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX20+13, textY20+28);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX20+13, textY20+42);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX20, textY20+68);
        p.text("≡", textX20+15, textY20+68);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX20+50, textY20+55);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX21 = rectX - rectWidth / 2 + 514; 
    let textY21 = rectY - rectHeight / 2 + 322;
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX21+30, textY21);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX21+23, textY21+10);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX21+39, textY21);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX21+18, textY21+25);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX21+42, textY21+12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX21+45, textY21+26); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX21+13, textY21+42);
        p.text("+", textX21+30, textY21+42);
        p.text("+", textX21+8, textY21+56);
        p.text("+", textX21+38, textY21+42);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX21, textY21+66);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX21+12, textY21+66);
        p.text("+", textX21+20, textY21+66);
    
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX21+53, textY21+42);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX21+43, textY21+57);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX21+53, textY21+57);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX21+59, textY21+70);
    
    let textX22 = rectX - rectWidth / 2 + 12; 
    let textY22 = rectY - rectHeight / 2 + 422;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX22, textY22);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX22+10, textY22-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX22+19, textY22-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22+45, textY22-9);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX22+54, textY22+1);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22+65, textY22-9);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX22+10, textY22+13);
        p.text("+", textX22+10, textY22+24);
        p.text("+", textX22+10, textY22+36);
        
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX22+22, textY22+12);
        p.text("×", textX22+54, textY22+15);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX22+27, textY22+25);
        p.text("≡", textX22+33, textY22+35);
        p.text("≡", textX22+38, textY22+46);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX22+54, textY22+28);
        p.text("+", textX22+54, textY22+42);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX22+9, textY22+54);
        p.text("≡", textX22+9, textY22+69);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22, textY22+56);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22+22, textY22+56);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22+55, textY22+46);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX22+55, textY22+57);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX23 = rectX - rectWidth / 2 + 119; 
    let textY23 = rectY - rectHeight / 2 + 422;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX23+30, textY23);
        p.text("×", textX23+14, textY23+3);
        p.text("×", textX23+45, textY23+13);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX23+44, textY23+3);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX23+5, textY23+5);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX23, textY23+17); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX23, textY23+29); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX23+4, textY23+55);
        p.text("≡", textX23+15, textY23+65);
        p.text("≡", textX23+30, textY23+70);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX23+46, textY23+52);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX23+52, textY23+40);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX23+52, textY23+65);
    
    let textX24 = rectX - rectWidth / 2 + 224; 
    let textY24 = rectY - rectHeight / 2 + 422;
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX24+5, textY24);
        p.text("≡", textX24+18, textY24);
        p.text("≡", textX24+31, textY24);      
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX24+21, textY24+10);
        p.text("×", textX24+21, textY24+22);
        p.text("×", textX24+21, textY24+35);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX24+21, textY24+40);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX24+21, textY24+56);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX24+7, textY24+66);
        p.text("+", textX24+32, textY24+66);
    
    let textX25 = rectX - rectWidth / 2 + 313; 
    let textY25 = rectY - rectHeight / 2 + 422;
        
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX25, textY25);
        p.text("≡", textX25+15, textY25);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX25+30, textY25-2);
        p.text("×", textX25+42, textY25-2);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX25+52, textY25-13); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX25+52, textY25-1); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX25+14, textY25+12);
        p.text("≡", textX25+14, textY25+24);
        p.text("≡", textX25+14, textY25+37);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX25+28, textY25+20); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX25+37, textY25+25);
        p.text("+", textX25+37, textY25+34);
        p.text("+", textX25+37, textY25+42);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX25+16, textY25+39);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX25+16, textY25+56);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX25+4, textY25+56);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX25+25, textY25+69);
        p.text("≡", textX25+38, textY25+69);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX25+50, textY25+46); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX25+50, textY25+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    
    let textX26 = rectX - rectWidth / 2 + 415; 
    let textY26 = rectY - rectHeight / 2 + 422;
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26, textY26-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX26+10, textY26+1);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+21, textY26-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+45, textY26-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX26+53, textY26);
        p.text("×", textX26+62, textY26);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+11, textY26+3);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+11, textY26+14);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+54, textY26+3);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+54, textY26+16);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX26+54, textY26+24);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX26+22, textY26+15);
        p.text("≡", textX26+27, textY26+26);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX26+40, textY26+23); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX26+10, textY26+39);
        p.text("×", textX26+10, textY26+53);
        p.text("×", textX26+10, textY26+67);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX26+46, textY26+46);
        p.text("+", textX26+53, textY26+55);
        p.text("+", textX26+53, textY26+68);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX26-1, textY26+69);
    
    let textX27 = rectX - rectWidth / 2 + 522; 
    let textY27 = rectY - rectHeight / 2 + 422;
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX27, textY27-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX27+10, textY27-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX27+23, textY27+2);
        p.text("×", textX27+23, textY27+14);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX27+32, textY27+4);
        p.text("≡", textX27+45, textY27+4);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX27, textY27+13);
        p.text("×", textX27+49, textY27+13);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX27+23, textY27+16);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX27+23, textY27+28);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX27+22, textY27+51);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX27+20, textY27+61);
        p.text("≡", textX27+31, textY27+71);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX27+23, textY27+58);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX27+12, textY27+58);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX28 = rectX - rectWidth / 2 + 6; 
    let textY28 = rectY - rectHeight / 2 + 522;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX28+33, textY28);
        p.text("×", textX28+47, textY28+3);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX28+20, textY28+3);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX28+14, textY28+14);
        p.text("≡", textX28+20, textY28+27);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX28+47, textY28+4); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX28+38, textY28+24);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX28+50, textY28+18);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX28+70, textY28+19);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX28+60, textY28+30);
        p.text("+", textX28+59, textY28+40);
        p.text("+", textX28+54, textY28+50);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX28+32, textY28+38);
        p.text("×", textX28+46, textY28+50);
        p.text("×", textX28+43, textY28+63);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX28+18, textY28+44);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX28+10, textY28+40); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX28+11, textY28+50); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX28+19, textY28+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
            
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX28+32, textY28+68);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX28+54, textY28+68);
        p.text("≡", textX28+60, textY28+68);
    
    let textX29 = rectX - rectWidth / 2 + 212; 
    let textY29 = rectY - rectHeight / 2 + 522;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX29, textY29);
        p.text("×", textX29+15, textY29);
        p.text("×", textX29+18, textY29+12);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX29+54, textY29+1);
        p.text("≡", textX29+67, textY29+1);
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX29+4, textY29+14);
        p.text("+", textX29+4, textY29+25);
        p.text("+", textX29+4, textY29+38);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX29+3, textY29+53);
        p.text("≡", textX29+3, textY29+68);
        
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX29+50, textY29+10);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+60, textY29-3); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+60, textY29+10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+20, textY29+12); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+24, textY29+24); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX29+29, textY29+53);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX29+37, textY29+36);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX29+41, textY29+23);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX29+46, textY29+11);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX29+61, textY29+24);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+60, textY29+38); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX29+60, textY29+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX29-5, textY29+65);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX29+12, textY29+66);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX29+30, textY29+68);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX29+52, textY29+65);
        p.text("+", textX29+68, textY29+65);
    
    let textX30 = rectX - rectWidth / 2 + 309; 
    let textY30 = rectY - rectHeight / 2 + 522;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX30+35, textY30);
        p.text("×", textX30+49, textY30+3);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX30+20, textY30+5);
        p.text("+", textX30+12, textY30+15);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX30+8, textY30+16); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX30+8, textY30+30); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX30+62, textY30+16); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX30+62, textY30+28); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX30+13, textY30+55);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX30+60, textY30+4);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
        
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX30+56, textY30+55);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX30+48, textY30+62);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX30+24, textY30+51);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX30+34, textY30+68);
    
    let textX31 = rectX - rectWidth / 2 + 418; 
    let textY31 = rectY - rectHeight / 2 + 522;
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX31, textY31);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX31+12, textY31);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX31+28, textY31-1);
        p.text("+", textX31+40, textY31+2);
        p.text("+", textX31+48, textY31+8);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX31+54, textY31+8); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX31+57, textY31+32);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX31+55, textY31+32); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX31+50, textY31+45); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
        
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX31+10, textY31+10);
        p.text("×", textX31+10, textY31+22);
        p.text("×", textX31+10, textY31+34);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX31+11, textY31+40);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX31+11, textY31+55);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX31+20, textY31+68);
        p.text("≡", textX31+0, textY31+68);
        p.text("≡", textX31+36, textY31+66);
    
    let textX32 = rectX - rectWidth / 2 + 519; 
    let textY32 = rectY - rectHeight / 2 + 522;
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32-3, textY32-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX32+11, textY32-9);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX32+23, textY32+1);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32+35, textY32-10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX32+47, textY32+4);
        p.text("≡", textX32+47, textY32+18);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX32+6, textY32+12);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX32+8, textY32+13);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32+6, textY32+24); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32+6, textY32+34); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32+6, textY32+44); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX32-4, textY32+66);
        p.text("×", textX32+6, textY32+66);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX32+16, textY32+37);
        p.text("+", textX32+30, textY32+27);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX32+30, textY32+26);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX32+30, textY32+48);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX32+16, textY32+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX32+30, textY32+69);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX32+47, textY32+69);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX32+47, textY32+57);
    
    let textX33 = rectX - rectWidth / 2 + 13; 
    let textY33 = rectY - rectHeight / 2 + 622;
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX33, textY33);
        p.text("+", textX33+10, textY33);
        p.text("+", textX33+10, textY33+10);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX33+21, textY33-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX33+32, textY33-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX33+44, textY33-7);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX33+47, textY33+19);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX33+12, textY33+10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX33+12, textY33+23);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX33+12, textY33+42);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
        
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX33+47, textY33+19);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX33+8, textY33+69);
        p.text("≡", textX33-2, textY33+69);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX33+21, textY33+55); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX33+42, textY33+26);
        p.text("×", textX33+23, textY33+33);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX33+31, textY33+32);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX33+38, textY33+38);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX33+45, textY33+49);
        p.text("≡", textX33+47, textY33+61);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX33+49, textY33+66);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX33+57, textY33+70);
        
    let textX34 = rectX - rectWidth / 2 + 113; 
    let textY34 = rectY - rectHeight / 2 + 622;
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34, textY34-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX34+8, textY34);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+18, textY34-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+46, textY34-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+54, textY34-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+64, textY34-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX34+8, textY34+13);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+10, textY34+15);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+10, textY34+27);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+10, textY34+38);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+10, textY34+50);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX34, textY34+66);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX34+21, textY34-1); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX34+26, textY34+10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX34+33, textY34+20);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX34+40, textY34+42);
        p.text("×", textX34+55, textY34+34);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX34+55, textY34+13);
        p.text("+", textX34+55, textY34+23);
        p.text("+", textX34+48, textY34+49);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX34+53, textY34+52);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX34+53, textY34+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX35 = rectX - rectWidth / 2 + 345; 
    let textY35 = rectY - rectHeight / 2 + 622;
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX35, textY35-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX35-8, textY35+9);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX35+4, textY35+9);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX35-9, textY35+10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX35+3, textY35+22);
        p.text("≡", textX35+7, textY35+31);
        p.text("≡", textX35+11, textY35+43);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX35+20, textY35+53);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX35-15, textY35+32);
        p.text("+", textX35-19, textY35+42);
        p.text("+", textX35-23, textY35+55);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX35-33, textY35+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX35-20, textY35+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX35+10, textY35+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX35+18, textY35+54); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX35+28, textY35+68);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX35-12, textY35+48);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX35+2, textY35+38);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
    let textX36 = rectX - rectWidth / 2 + 419; 
    let textY36 = rectY - rectHeight / 2 + 622;
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36, textY36-9); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX36+11, textY36+2);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX36+22, textY36-7);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX36+34, textY36-7);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX36+47, textY36-1);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36+50, textY36+10); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36+44, textY36+20); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX36+11, textY36+16);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX36+11, textY36+26);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX36+11, textY36+38);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX36+11, textY36+50);
        p.text("×", textX36+11, textY36+60);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX36-2, textY36+70);
        p.text("≡", textX36+8, textY36+70);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX36+23, textY36+67);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX36+25, textY36+37);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX36+37, textY36+40);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX36+43, textY36+39);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36+44, textY36+50); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36+48, textY36+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX36+57, textY36+56); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
    let textX37 = rectX - rectWidth / 2 + 520; 
    let textY37 = rectY - rectHeight / 2 + 622;
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX37-3, textY37);
        
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX37+9, textY37-11); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX37+22, textY37-10);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX37+33, textY37);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX37+46, textY37);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX37-5, textY37+14);
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX37+20, textY37+11);
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX37+22, textY37+13);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
            p.textSize(18); 
            p.fill('#EBE6DF');
            p.stroke('#EBE6DF');
            p.strokeWeight(2);
            p.push(); 
            p.translate(textX37+48, textY37-2);
            p.rotate(p.HALF_PI); 
            p.text("=", 0, 0); 
            p.pop();
    
        p.textSize(20); 
        p.fill('#EBE6DF');
        p.noStroke();
        p.text("+", textX37+47, textY37+15);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX37+21, textY37+25); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX37+19, textY37+48);
        p.text("≡", textX37+19, textY37+59);
    
        p.textSize(18); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1.5);
        p.text("×", textX37+22, textY37+68);
    
        p.textSize(28); 
        p.fill('#EBE6DF');
        p.stroke('#EBE6DF');
        p.strokeWeight(1);
        p.text("≡", textX37+7, textY37+70);
    
            p.textSize(24); 
            p.fill('#EBE6DF');
            p.noStroke();
            p.push(); // Save the current transformation state
            p.translate(textX37+32, textY37+57); // Move the origin to the text position
            p.rotate(p.HALF_PI); // p.rotate by 90 degrees (PI/2 radians)
            p.text("≡", 0, 0); // Draw the text at the p.rotated position
            p.pop();

    };

}

// Attach the sketch to a container element
const containerElement = document.getElementById('p5-container');
new p5(sketch, containerElement);