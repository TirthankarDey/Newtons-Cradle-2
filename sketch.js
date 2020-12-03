
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(2500,windowHeight);

	
	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
	ground = new Ground(600,height-500,700,20,ground_options);
	bobobject1 = new Bob(300,500,90);
	bobobject2 = new Bob(400,500,20);
	bobobject3 = new Bob(500,500,20);
	bobobject4 = new Bob(600,500,20);
	bobobject5 = new Bob(700,500,20);
	bobobject6 = new Bob(800,500,20);
	bobobject7 = new Bob(900,500,20);
	sling1= new Rope(bobobject1.body,ground.body,-149*2,0)

	sling2= new Rope(bobobject2.body,ground.body,-101*2,0);
	sling3= new Rope(bobobject3.body,ground.body,-52*2,0);
	sling4= new Rope(bobobject4.body,ground.body,-3*2,0);
	sling5= new Rope(bobobject5.body,ground.body,46*2,0);
	sling6= new Rope(bobobject6.body,ground.body,96*2,0);
	sling7= new Rope(bobobject7.body,ground.body,146*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("azure");
  ground.display();
  textSize(35)
  fill("black")
  text("Drag your left bob and release it to see the reaction",200,40)
  text("Newton's cradle is a device that demonstrates conservation of ",1300,80)
  text(" momentum and energy using a series of swinging spheres ",1300,130)
  text(". When one sphere at the end is lifted and released,it strikes ",1300,180)
 text("  stationary spheres, transmitting a force through the stationary",1300,230) 
 text("spheres that pushes the last sphere upward.The last sphere ",1300,280) 
 text("swings back and strikes the still nearly stationary spheres",1300,330)
 text("repeating the effect in the opposite direction. The device ",1300,380)
 text("is named after 17th-century English scientist Sir Isaac Newton",1300,430)
 text(". It is also known as Newton's pendulum, Newton's balls, Newton's",1300,480)
 text("rocker or executive ball clicker (since the device makes a",1300,530)
 text(" click each time the balls collide), which they do repeatedly in a steady rhythm",1260,580)
 text("swipe right to know all about newton's cradle>>",250,330)
  fill("grey")
  
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  bobobject6.display();
  bobobject7.display();
  fill("black");
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();
  sling7.display();
 
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(bobobject1.body,{x:mouseX,y:mouseY})
	
	}

