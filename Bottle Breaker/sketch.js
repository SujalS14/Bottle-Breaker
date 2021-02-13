const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var bottle;
var rock;
function preload(){
  //bottle_img=loadImage("bottle.png");
  rock_img=loadImage("rock.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 

  bottle1 = new Bottle(300,275,30,40);
  bottle2 = new Bottle(330,275,30,40);
  bottle3 = new Bottle(360,275,30,40);
  bottle4 = new Bottle(390,275,30,40);
  bottle5 = new Bottle(420,275,30,40);
  bottle6 = new Bottle(450,275,30,40);
  bottle7 = new Bottle(480,275,30,40);

  bottle8 = new Bottle(330,235,30,40);
  bottle9 = new Bottle(360,235,30,40);
  bottle10 = new Bottle(390,235,30,40);
  bottle11 = new Bottle(420,235,30,40);
  bottle12 = new Bottle(450,235,30,40);

  bottle13 = new Bottle(360,195,30,40);
  bottle14 = new Bottle(390,195,30,40);
  bottle15 = new Bottle(420,195,30,40);
  
  bottle16 = new Bottle(390,155,30,40);

  
  rock = Bodies.rectangle(50,200,20,20);
  World.add(world,rock);
  
  slingShot = new Slingshot(this.rock,{x:100,y:200});

}
function draw() {
  background("green"); 
 
  
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the rock to destroy the bottles",300,30);
  textSize(10);
  text("Press SPACE to play again!",650 ,350);
  ground.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  
  bottle1.display();
  bottle2.display();
  bottle3.display();
  bottle4.display();
  bottle5.display();
  bottle6.display();
  bottle7.display();
  
  bottle8.display();
  bottle9.display();
  bottle10.display();
  bottle11.display();
  bottle12.display();
  
  bottle13.display();
  bottle14.display();
  bottle15.display();
  
  bottle16.display();
  
  bottle1.display();
  bottle2.display();
  bottle3.display();
  bottle4.display();
  bottle5.display();
  
  bottle6.display();
  bottle7.display();
  bottle8.display();
  
  bottle9.display();
  
  imageMode(CENTER)
  image(rock_img ,rock.position.x,rock.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.rock);
  }
  drawSprites()
  }
