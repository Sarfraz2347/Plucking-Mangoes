
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	mango1 = new Mango(900,200,30)
	mango2 = new Mango(1000,300,35)
	mango3 = new Mango(900,250,25)
	mango4 = new Mango(1100,150,15)
	mango5 = new Mango(900,150,30)
	mango6 = new Mango(1200,225,20)
	mango7 = new Mango(1150,205,20)
	mango8 = new Mango(1050,125,20)
	tree  = new Tree(1050,300)
	stone = new Stone(235,420,30)
	ground = new Ground(width/2,600,width,20)
	launcher = new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,340,200,300)
  text("press space to get another chance")
  drawSprites();
  rectMode(CENTER)
  tree.display();
  mango1.display();

  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  ground.display();
launcher.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);

 }

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
  function keyPressed(){
	  if(keyCode === 32){
		  Matter.Body.setPosition(stone.body,{x:235,y:420});
		  launcher.attach(stone.body);
	  }
  }
