
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball, ball1, ball2, ball3, ball4, roof;
var rope1, rope2, rope3,rope4, rope5;
var engine, world


function setup() {
	createCanvas(1270, 620);


	engine = Engine.create();
	world = engine.world;
//rectMode(CENTER)
	//Create the Bodies Here.

	ball = new Bob(200,470,50);
	ball1 = new Bob(300,470,50);
	ball2 = new Bob(400,470,50);
	ball3 = new Bob(500,470,50);
	ball4 = new Bob(600,470,50);

	

	roof = new Roof(400,150,500,20);


	



	rope1 = new Rope(ball.body,roof.body,-100*2,0);
	rope2 = new Rope(ball1.body,roof.body,-50*2,0);
	rope3 = new Rope(ball2.body,roof.body,-0*2,0);
	rope4 = new Rope(ball3.body,roof.body,50*2,0);
	rope5 = new Rope(ball4.body,roof.body,100*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(169, 169, 169);
 

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-100,y:-100})
		console.log("up arrow pressed")
	}
}

