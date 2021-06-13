var helicopter,helicopterImg;
var bg,bgImg;
var building,buildingImg;
var ground;
var bird,birdImg;
var ufo,ufoImg;
var life,lifeImg;
var score=0;
function preload(){
  helicopterImg=loadAnimation("assets/helicopter.gif");
  bgImg=loadImage("assets/background3.jpg");
  buildingImg=loadImage("assets/building0.png");
  birdImg=loadImage("assets/bird.png");
  ufoImg=loadImage("assets/ufo1.png");
  lifeImg=loadImage("assets/life1.png");

}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200,400,200);
  bg.addImage("abcd",bgImg);
  bg.scale=0.29;

  //creating ground
  ground=createSprite(400,370,1600,20);
  ground.shapeColor="brown";
  ground.velocityX=-3;
  ground.x=ground.width/2;

  //creating helicopter
 helicopter=createSprite(150, 200, 50, 50);
 helicopter.addAnimation("abc",helicopterImg);
 helicopter.scale=0.7;

 score=0;
}

function draw() {
  background("aqua");  
 
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  if(keyDown("UP_ARROW")){
  helicopter.velocityY=-10;
  }
  helicopter.velocityY=helicopter.velocityY+0.8
 
  
  score = score + Math.round(getFrameRate()/60);
  spawnBuildings();
  spawnBird();
  spawnLife();
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
  textSize(20);
  fill("red");
  text("Score: "+ score, 700,50);


}
function spawnBuildings(){
  if(frameCount%120===0){
  building=createSprite(800,270,20,40);
  building.velocityX=-4;
  building.addImage("hi",buildingImg);
 building.scale=0.5;
  } 
}

function spawnBird(){
if(frameCount%80===0){
bird=createSprite(800,50,20,20);
bird.velocityX=-3;
bird.addImage("abcd",birdImg);
bird.scale=0.2;
}

if(frameCount%160===0){
  ufo=createSprite(800,50,20,20);
  ufo.velocityX=-3;
  ufo.addImage("abcde",ufoImg);
  ufo.scale=0.2;
  }
}

function spawnLife(){
  if(frameCount%500===0){
    life=createSprite(800,150,20,20);
    life.velocityX=-6;
    life.addImage("abcdeg",lifeImg);
    life.scale=0.1;
    }


}