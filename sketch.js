var monkey , monkey_running;
var monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup;
var obstacleGroup;
var score;
var ground;




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  monkey=createSprite(30,330,70,70);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.25
  monkey.velocityY=-12;
  monkey.velocityX=0;
 
  
  ground=createSprite(200,370,400,20);
  
  
  
  foodGroup=new Group();
  obstaclesGroup=new Group();
  
  
  monkey.collide(ground);
}



function draw() {
  background("white")
  
  
  if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
       
        obstaclesGroup.setLifetimeEach(-1);
  }
    
    
  
  
  if(keyDown("space") && 240){
    monkey.velocityY=-10;
    
  }
   monkey.velocityY=monkey.velocityY+0.8;
  
  
  
  if(ground.x>400){
    ground.x=ground.width/2;
  
  
  }
  
  
  monkey.collide(ground);
  
  console.log(monkey.y);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

   banana();
   obstacle();
  
  
  

  
  
  drawSprites();
}



function banana(){
  if(frameCount % 80=== 0){
    var banana=createSprite(200,100,20,20);
    banana.addImage("banana",bananaImage);
    banana.y=Math.round(random(120,200))
    banana.scale=0.15;
    banana.velocityX=-10;
    
    banana.lifetime=134;
    
    banana.depth=monkey.depth
    banana.depth=banana.depth + 1
  
  }
  
  
}

function obstacle(){
 if(frameCount % 300===0){
   var obstacle=createSprite(200,340,20,20);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX=-10;
   obstacle.scale=0.15;

   obstacle.lifetime=300;
   obstaclesGroup.add(obstacle);
  
 }
  
  
}