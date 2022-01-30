
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obImage,ob
var score = 0
var ground
var b2Image, b2
var score1 = 0
var gameState = 1
var PLAY = 1
var END = 0
var gameOverImage , gameover

function preload(){
  
  
  monkey_running =            loadAnimation("running1.png","running2.png","running3.png","running4.png","running5.png" )
  
  bananaImage = loadImage("coin.png");
  obImage = loadImage("obstacle.png");
  b2Image=loadImage("coin.png")
  gameOverImage=loadImage("gameover.png")
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(100,350,10,10)
monkey.addAnimation("moving", monkey_running)
monkey.scale=0.1
  
ground=createSprite(200,385,800,10)
  ground.velocityX=-2
  
 ob1 = new Group();
  b1= new Group ();
 
  b2=createSprite(200,60,10,10)
  b2.addImage(b2Image)
  b2.scale=0.1
  
  
}


function draw() {
background("white")
  //monkey.debug="true"
  // monkey.setCollider("rectangle",-33,0,50  ,monkey.height);
  if (gameState === PLAY){
  stroke("red")
  fill("blue")
  textSize(20)
  text("= "+score1,230,65,)
  fill("red")
  stroke("yellow")
  textSize(25)
  text("Score : " + score , 50,25 )
  
  score = score + Math.round(getFrameRate()/60);
  console.log(monkey.y)
  drawSprites();
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")&& monkey.y>=349) {
   monkey.velocityY = -15;
   
    
  }
if(frameCount % 250 ===0){
  ob2020();
} 
  if(frameCount % 100 ===0){
  banana2020();
}       
  monkey.velocityY= monkey.velocityY + 0.8 
    
    monkey.collide(ground)  
   
    if(monkey.isTouching(b1)){
       score1=score1+1;
     b1.destroyEach();        
       
       }
    if(monkey.isTouching(ob1)){
      gameState=END
    }
  }
    if(gameState === END){
      background("black")
      monkey.destroy();
      b1.destroyEach();
      ob1.destroyEach();
      fill("yellow")
      stroke("red")
      textSize(50)
     text("GAME OVER ...",40 ,200)
    }

  
  
  
}

function banana2020 (){
 banana=createSprite(370,200,10,10) 
 banana.addImage(bananaImage)
  banana.scale=0.1
 banana.velocityX=-2 
  banana.lifetime=400
  b1.add(banana)
}  

function ob2020(){
 ob=createSprite(410,370,10,10)
  ob.addImage(obImage)
  ob.scale=0.1     
  ob.velocityX=-7
  ob.lifetime=400
  ob1.add(ob)
  ob.debug=false
  //ob.setCollider("rectangle",-33,0,470  ,370);
   
}






