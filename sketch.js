
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bobObject1,bobObject2,bobObject3,bobObject5,bobObject5;
var ground;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 40;
var pendulum1;

function preload() {
}

function setup() {
	createCanvas(1200, 800);

	//ground = new Ground(1,2,3,4);

	//render = Render.create();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("skyblue");
	bobObject1 = new bob(480,500,30);
	bobObject2 = new bob(540,500,30);
	bobObject3 = new bob(600,500,30);
	bobObject4 = new bob(660,500,30);
	bobObject5 = new bob(720,500,30);

	ground = new Ground(width/2,height/4.5,400,20);


	rope1 = new Rope(bobObject1.body,ground.body,60*-2,0);
	rope2 = new Rope(bobObject2.body,ground.body,60*-1,0);
	rope3 = new Rope(bobObject3.body,ground.body,60*0,0);
	rope4 = new Rope(bobObject4.body,ground.body,60*1,0);
	rope5 = new Rope(bobObject5.body,ground.body,60*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ground.display();

  


  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:230,y:-190})
	}
}


