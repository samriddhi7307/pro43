function preload(){
ludoimg = loadImage("background.png");
diceimg = loadImage("dice.png");
diceoneimg = loadImage("diceone.png");
dicetwoimg = loadImage("dicetwo.png");
dicethreeimg = loadImage("dicethree.png");
dicefourimg = loadImage("dicefour.webp");
dicefiveimg = loadImage("dicefive.webp");
dicesiximg = loadImage("dicesix.webp");
rriderimg = loadImage("red.png");
griderimg = loadImage("green.png");
briderimg = loadImage("blue.png");
yriderimg = loadImage("yellow.png");
}
function setup() {
  createCanvas(700,500);
  bg=createSprite(250, 250, 800, 800);
  bg.addImage(ludoimg);
  bg.scale = 2;

  dice = createSprite(600,250,100,100);
  dice.addImage(diceimg);
  dice.scale = 0.5

  dice1 = createSprite(600,250,100,100);
 // dice1.addImage(diceoneimg);
  dice1.scale = 0.1
  
  /*dice2 = createSprite(600,250,100,100);
  dice2.addImage(dicetwoimg);
  dice2.scale = 0.3

  dice3 = createSprite(600,250,100,100);
  dice3.addImage(dicethreeimg);
  dice3.scale = 0.3

  dice4 = createSprite(600,250,100,100);
  dice4.addImage(dicefourimg);
  dice4.scale = 0.3

  dice5 = createSprite(600,250,100,100);
  dice5.addImage(dicefiveimg);
  dice5.scale = 0.3

  dice6 = createSprite(600,250,100,100);
  dice6.addImage(dicesiximg);
  dice6.scale = 0.3*/


  rrider1 = createSprite(93,83,10,10);
  rrider1.addImage(rriderimg);
  rrider1.scale = 0.3
  rrider2 = createSprite(150,83,10,10);
  rrider2.addImage(rriderimg);
  rrider2.scale = 0.3
  rrider3 = createSprite(94,140,10,10);
  rrider3.addImage(rriderimg);
  rrider3.scale = 0.3
  rrider4 = createSprite(150,140,10,10);
  rrider4.addImage(rriderimg);
  rrider4.scale = 0.3

  grider1 = createSprite(350,81,10,10);
  grider1.addImage(griderimg);
  grider1.scale = 0.3
  grider2 = createSprite(408,81,10,10);
  grider2.addImage(griderimg);
  grider2.scale = 0.3
  grider3 = createSprite(350,137,10,10);
  grider3.addImage(griderimg);
  grider3.scale = 0.3
  grider4 = createSprite(407,138,10,10);
  grider4.addImage(griderimg);
  grider4.scale = 0.3

  brider1 = createSprite(93,340,10,10);
  brider1.addImage(briderimg);
  brider1.scale = 0.3
  brider2 = createSprite(150,340,10,10);
  brider2.addImage(briderimg);
  brider2.scale = 0.3
  brider3 = createSprite(94,395,10,10);
  brider3.addImage(briderimg);
  brider3.scale = 0.3
  brider4 = createSprite(150,395,10,10);
  brider4.addImage(briderimg);
  brider4.scale = 0.3

  yrider1 = createSprite(350,340,10,10);
  yrider1.addImage(yriderimg);
  yrider1.scale = 0.3
  yrider2 = createSprite(408,340,10,10);
  yrider2.addImage(yriderimg);
  yrider2.scale = 0.3
  yrider3 = createSprite(350,395,10,10);
  yrider3.addImage(yriderimg);
  yrider3.scale = 0.3
  yrider4 = createSprite(407,395,10,10);
  yrider4.addImage(yriderimg);
  yrider4.scale = 0.3

}

function draw() {
  background(0);
  
  if(mousePressedOver(dice)){
    dice.visible = false;
    dice1 = createSprite(600,250,100,100);
    dice1.scale = 0.1;
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: dice1.addImage(diceoneimg);
              dice1.scale = 0.4
      break;
      case 2: dice1.addImage(dicetwoimg);
              dice1.scale = 0.3 
      break;
      case 3: dice1.addImage(dicefourimg);
              dice1.scale = 0.1
      break;
      case 4: dice1.addImage(dicethreeimg);
              dice1.scale = 0.2
      break;
      case 5: dice1.addImage(dicefiveimg);
              dice1.scale = 0.4
      break;
      case 6: dice1.addImage(dicesiximg);
              dice1.scale = 0.2
      break;
      default: break; 
    }
  }
  if(dicesiximg && mousePressedOver(rrider1 )){
          rrider1.x = 79;
          rrider1.y = 215;
  }
  if(dicesiximg && mousePressedOver(rrider2 )){
        rrider2.x = 79;
        rrider2.y = 215;
}
if(dicesiximg && mousePressedOver(rrider3 )){
        rrider3.x = 79;
        rrider3.y = 215;
}
if(dicesiximg && mousePressedOver(rrider4 )){
        rrider4.x = 79;
        rrider4.y = 215;
}

if(dicesiximg && mousePressedOver(grider1 )){
        grider1.x = 280;
        grider1.y = 71;
}
if(dicesiximg && mousePressedOver(grider2 )){
      grider2.x = 280
      grider2.y = 71;
}
if(dicesiximg && mousePressedOver(grider3 )){
      grider3.x = 280;
      grider3.y = 71;
}
if(dicesiximg && mousePressedOver(grider4 )){
      grider4.x = 280;
      grider4.y = 71;
}
  drawSprites();
}