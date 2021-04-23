
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg,platform;
var constrainedLog;

function preload(){
 backgroundImg = loadImg(sprites/backgroundImg.png);	
}

function setup() {
	createCanvas(800, 700);
    var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



