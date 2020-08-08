const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var engine,world,ground,sphere
var box1 

var GG
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  
  


fill(0, 255, 10);
GG = new Ground(400,350,800,50)

fill(255, 0, 0);
box1 = new Box(200,20,50,50)
}


function draw() {
  background(0);  
  Engine.update(engine)
  
  box1.display()

  GG.display()
  
}