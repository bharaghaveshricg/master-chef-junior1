const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function setup() {
	createCanvas(windowWidth,windowHeight);
	// rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;
    
    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse:canvasmouse
    }

    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

	//Create the Bodies Here.
	roof1 = new Roof(width/2,100,800,40);

	bobObject1 = new Bob(450,550,50);
	bobObject2 = new Bob(550,550,50);
	bobObject3 = new Bob(650,550,50);
	bobObject4 = new Bob(750,550,50);
	bobObject5 = new Bob(850,550,50);

	rope1 = new Rope(bobObject1.body,roof1.body,-100*2,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-50*2,0);
	rope3 = new Rope(bobObject3.body,roof1.body,0,0);
	rope4 = new Rope(bobObject4.body,roof1.body,100,0);
	rope5 = new Rope(bobObject5.body,roof1.body,200,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  roof1.display();
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

  drawSprites();
stroke("white")
  textSize(30);
  fill("black")
  text("Drag the mouse!! (^-^)",windowWidth/2.5,60);
}

function keyPressed() { 
	
}
function mouseDragged(){
    Matter.body.setPosition(bob1.body,{x:mouseY,y:mouseY});
}
