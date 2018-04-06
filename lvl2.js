var player;
var coins;
var wallLeft;
var wallRight;
var wallUp;
var wallDown;
var right1;
var left1;
var door2;
var door1;
var left2;
var wall6;
var right2;
var wall8;
var score = 0;

function setup() {
  createCanvas(800, 700);



  coins = new Group();
      c = createSprite(400,300,20,20);
      c.shapeColor = color(255, 0, 0);
      coins.add(c); 
      d = createSprite(400,590,20,20);
      d.shapeColor = color(255, 0, 0);
      coins.add(d); 








  door1 = createSprite( //first door 
        400,180, 50, 50);
  door1.shapeColor = color(250);
  left1 = createSprite( //first left wall 
        190,180, 360, 50);
  left1.shapeColor = color(0);
  right1 = createSprite( //first right wall
        610,180, 360, 50);
  right1.shapeColor = color(0);

  door2 = createSprite( //second door
        400,410, 50, 50);
  door2.shapeColor = color(250);
  left2 = createSprite( //walls
        190,410, 360, 50);
  left2.shapeColor = color(0);
  right2 = createSprite( //walls
        610,410, 360, 50);
  right2.shapeColor = color(0);


  unlockZone=createSprite(650,100,10,10);
  unlockZone.shapeColor = color(255,255,0);

  box=createSprite(650,300,30,30);
  box.shapeColor = color(255,255,0);  
  
  shapeUnlock2 = createSprite(250,300,40,40);
  shapeUnlock2.shapeColor= color(255,0,0);
  unlockZone2 = createSprite(250,300,30,30);
  unlockZone2.shapeColor= color(255,255,0);
  wallup = createSprite( //walls
    400,-35, 800, 90);
wallup.shapeColor = color(0);
wallDown = createSprite( //walls
    400,735, 800, 90);
wallDown.shapeColor = color(0);

wallLeft = createSprite( //walls
    -35,350, 90, 700);
wallLeft.shapeColor = color(0);

wallRight = createSprite( //walls
    835,350, 90, 700);
wallRight.shapeColor = color(0);


  player = createSprite(400, 100, 40,40);       
  player.shapeColor = color(255);


}

function draw() {
    background(50);
    player.collide(wallup);
    player.collide(wallDown);
    player.collide(wallLeft);
    player.collide(wallRight);
    player.bounce(wallup);
    player.bounce(wallDown);
    player.bounce(wallLeft);
    player.bounce(wallRight);
    
    player.collide(left1);
    player.collide(right1);
    player.collide(door1);
    player.collide(left2);
    player.collide(right2);
    player.collide(door2);
    box.bounce(wallup);
    box.bounce(wallDown);
    box.bounce(wallLeft);
    box.bounce(wallRight);

    box.bounce(wallup);
    box.bounce(wallDown);
    box.bounce(wallLeft);
    box.bounce(wallRight);
    box.bounce(left1);
    box.bounce(right1);
    box.bounce(door1);
    box.bounce(left2);
    box.bounce(right2);
    box.bounce(door2);

    box.collide(wallup);
    box.collide(wallDown);
    box.collide(wallLeft);
    box.collide(wallRight);
    box.collide(left1);
    box.collide(right1);
    box.collide(door1);
    box.collide(left2);
    box.collide(right2);
    box.collide(door2);
    player.displace(box);


    player.overlap(coins, getCoin);
    player.overlap(unlockZone,unlockP1);  
  
    box.overlap(unlockZone2,unlockP2);      

    fill(255);
    noStroke();
    drawSprites();
 
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    if (coins.length > 0) {
        text(score, 730, 650);
    }else{
        win();
        }
     
   

}



function unlockP1(player,unlockZone){
        door1.setVelocity(2,0);
        
        unlockZone.shapeColor = color(25,250,0);

}
function unlockP2(player,unlockZone2){

  door2.setVelocity(2,0);


}

function getCoin(player, coin) {
        coin.remove();
        score += 1;
}
 
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player.setSpeed(4.99, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    player.setSpeed(4.99, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    player.setSpeed(4.99, 180);
  }
  else if (keyCode == UP_ARROW) {
    player.setSpeed(4.99, 270);
  }
  else if (key == ' ') {
    player.setSpeed(0, 0);
  }
  return false;
}

    

function win() {
    
    text("you win!", width/2, height/2)
    player.friction = 1;
  

               
}


