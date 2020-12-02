
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

	blip = new Paper(200, 670, 20, 20);
	blop = new Ground(400, 690, 800, 20);
	boingo = new Trash(700, 600, 150, 180)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  blip.display();
  blop.display();
  boingo.display();

  if (keyCode === DOWN_ARROW) {
	  Matter.Body.applyForce(blip.body, blip.body.position, {x:2,y:-2})
  }
  if(blip.body.position.x >600 && blip.body.position.y<500){
    Matter.Body.applyForce(blip.body, blip.body.position, {x:-2,y:2})
  }
  
  drawSprites();
 
}



