
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  heliImg = loadImage("helicopter.png");
  heliImg1 = loadImage("helicopter1.png");
  backgroundI = loadImage("back.jpg");
  hI = loadImage("help.png");

}


function setup() {
  createCanvas(1000,700);

  heli = createSprite(60, 50, 20, 20);
  heli.addImage("heli1", heliImg1);
  heli.scale = 0.5;
  heli.velocityX = 5

  food = createSprite(heli.position.x, 50, 20, 20);
  food.velocityX = 5


  h = createSprite(500, 650, 20, 20);
  h.addImage("h1", hI);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(backgroundI);
  Engine.update(engine);
  drawSprites();

  if(heli.x === 940){
    heli.addImage(heliImg);
    heli.velocityX = -5;
  }
  
  if(heli.x === 60){
    heli.addImage(heliImg1);

    heli.velocityX = 5;
  }

  if (keyCode === 32){
    food.velocityY = 3
    food.velocityX = 0
  }
  
  if (food.isTouching(h)){
    food.visible = false;
    food = null;
    
  }
}
