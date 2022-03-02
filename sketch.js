var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg,zombie;
var zombieGroup;
var heart1Img,heart2Img,heart3Img;
var heart1,heart2,heart3;
var loseSound,winSound,explosionSound
var bulletGroup,bulletImg,bullet;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
  heart1Img =loadImage("assets/heart_1.png");
  heart2Img =loadImage("assets/heart_2.png");
  heart3Img =loadImage("assets/heart_3.png");
  loseSound = loadSound("assets/lose.mp3");
  winSound = loadSound("assets/win.mp3");
  explosionSound = loadSound("assets/explosion.mp3");
  bulletImg = loadImage("assets/Bullet.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,500)

   heart1 = createSprite(displayWidth-150,50,20,20);
   heart1.addImage("heart1",heart1Img)
   heart1.scale=0.3
   heart1.visible=false

   heart2 = createSprite(displayWidth-100,100,20,20);
   heart2.addImage("heart2",heart2Img)
   heart2.scale=0.3
   heart2.visible=false

   heart3 = createSprite(displayWidth-150,150,20,20);
   heart3.addImage("heart3",heart3Img)
   heart3.scale=0.3

zombieGroup = new Group() ;
bulletGroup = new Group() ;

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();
spawnZombies();
spawnBullets();
}
function spawnZombies(){

if(frameCount % 70 ===0){
  zombie = createSprite(1600,random(100,800), 40,40)
  zombie.addImage(zombieImg);
  zombie.velocityX=-3
  zombie.setCollider("rectangle",0,0,400,900)
  zombie.debug=true
  zombie.scale=0.15
  zombieGroup.add(zombie)
  
}


}
function spawnBullets(){
  if(keyWentDown("space")){
bullet = createSprite(player.x+40,player.y-25,20,20)
bullet.velocityX=5
bullet.addImage(bulletImg)
bulletGroup.add(bullet);
bullet.scale=0.1
  }
}