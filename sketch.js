var PLAY = 1;
var END = 0;
var gameState = PLAY;
var trex, trexImg;
var chicken, chickenImg;
var lettuce, lettuceImg;
var ground,invisibleGround, groundImg;
var trex_collided;
var gameOver, gameOverImg;
var chickensGroup, lettucesGroup;
var score;
function preload(){
groundImg = loadImage("ground.png");
trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png")
chickenImg = loadImage("chicken.png");
lettuceImg = loadImage("lettuce.png");
trex_collided = loadImage("trex_collided.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(400,400);
ground = createSprite(400,50);
ground.addImage(groundImg);
ground.scale =2 ;
invisibleGround = createSprite(0,400,800,10)
invisibleGround.visible = false;
 trex = createSprite(50,340,20,50);
 trex.addAnimation("running", trexImg);
 trex.addAnimation("collided", trex_collided);
 trex.scale = 0.5;
 //trex.debug = true;
 trex.setCollider("rectangle", 0,0,40,80);
 gameOver = createSprite(200,200);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.5;
 lettucesGroup = new Group()
 chickensGroup = new Group()
 score = 0;
}
function draw() {

background("white");
if(gameState === PLAY){
gameOver.visible = false;
ground.velocityX = -1
}

if(ground.x<50){ground.x = 150};
 
if(trex.isTouching(chickensGroup)){
  score = score+1;
}
if(trex.isTouching(chickensGroup)){
 chickensGroup.destroyEach()}
    if(keyDown("space")&& trex.y >= 350){
      trex.velocityY = -13;}

trex.velocityY = trex.velocityY + 0.8
trex.collide(invisibleGround);
if(lettucesGroup.isTouching(trex))
{ gameState = END;
  } 
else if (gameState === END){
gameOver.visible = true;
trex.velocityY = 0;
trex.changeAnimation("collided",trex_collided);
ground.velocityX = 0; 
lettucesGroup.setVelocityXEach(0);
chickensGroup.setVelocityXEach(0);
lettucesGroup.setLifetimeEach(0);
chickensGroup.setLifetimeEach(0);}
spawnLettuce()
spawnChicken()
drawSprites();
text("Pontuação :"+score,300,100);
}
function spawnLettuce(){
  if (frameCount % 60 === 0) {
    lettuce = createSprite(400,30,40,10);
    lettuce.y = Math.round(random(300,350));
    lettuce.addImage(lettuceImg);
    lettuce.scale = 0.08;
    lettuce.velocityX = -3;
    lettuce.lifetime = 410;
    lettucesGroup.add(lettuce);
   // lettuce.debug = true
  }
}
function spawnChicken(){
  if (frameCount % 60 === 0) {
    chicken = createSprite(400,30,40,10);
    chicken.y = Math.round(random(280,375,));
    chicken.addImage(chickenImg);
    chicken.scale = 0.08;
    chicken.velocityX = -3;
    chicken.lifetime = 410;
    chickensGroup.add(chicken);
  }
}








