
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  createSprite(200,200,500,50)
  createSprite(120,600,50,50)
  createSprite(200,600,50,50)
  createSprite(300,600,50,50)
  createSprite(400,600,50,50)
  createSprite(40,350,10,290)
  createSprite(100,350,10,290)
  createSprite(150,350,10,290)
  createSprite(200,350,10,290)
  createSprite(250,350,10,290)
  createSprite(300,350,10,290)
  drawSprites();
 
}



