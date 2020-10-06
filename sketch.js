
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,ground,invisibleGround

function preload()
{  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,250)
  
  monkey=createSprite(50,200,10,10)
  monkey.addAnimation("monkeyRunning",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,240,1500,20)
  ground.velocityX=-5
  ground.x=ground.width/2

  invisibleGround=createSprite(300,250,1500,5)
  invisibleGround. visible= false; 

  obstacleGroup=new Group()
  FoodGroup=new Group()
  
}


function draw() 
{
  background(180)
  text("score "+score,550,30)
  food();
  obstacles();
  
  if(ground.x<0)
  {
    ground.x=ground.width/2
  }  
  
  
    monkey.collide(ground)

  if(keyDown("space"))
  {
    monkey.velocityY=-10
  } 
  
    monkey.velocityY=monkey.velocityY+0.5
  
 if(obstacleGroup.isTouching(monkey)) 
   {
     ground.velocityX=0
     obstacleGroup.setVelocityXEach(0)
     FoodGroup.setVelocityXEach(0)
   }
 
 if(FoodGroup.isTouching(monkey))
   {
     score=score+2
     FoodGroup.destroyEach()
   }
  
  drawSprites();
}

function food()
{
  if(frameCount%100===0)
  {  
  banana=createSprite(600,100,10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
  FoodGroup.add(banana)
  }
  
}

function obstacles()
{
  
if(frameCount%300===0)
{
    obstacle=createSprite(600,220,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-5
    obstacleGroup.add(obstacle)    
} 
  
}

