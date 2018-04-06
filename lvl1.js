var player;
var coins;
var wallLeft;
var wallRight;
var wallUp;
var wallDown;
var score = 0;

function setup() {
  createCanvas(800, 700);
  player = createSprite(400, 200, 40,40);
  player.shapeColor = color(255);



  coins = new Group();

    var c = createSprite(
      (width-400),
      (height-200),
      20, 20);
      c.shapeColor = color(255, 0, 0);
      coins.add(c); 
      wallUp = createSprite( //walls
        400,-35, 800, 90);
      wallUp.shapeColor = color(0);
      wallDown = createSprite( //walls
          400,735, 800, 90);
      wallDown.shapeColor = color(0);
      
      wallLeft = createSprite( //walls
          -35,350, 90, 700);
      wallLeft.shapeColor = color(0);
      
      wallRight = createSprite( //walls
          835,350, 90, 700);
      wallRight.shapeColor = color(0);

}

function draw() {
    background(50);
    player.collide(wallUp);
    player.collide(wallDown);
    player.collide(wallLeft);
    player.collide(wallRight);
    fill(255);
    noStroke();
    drawSprites();
    player.overlap(coins, getCoin);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    if (coins.length > 0) {
        text(score, width/2, height/2);
    }else{
        win();
        }


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


