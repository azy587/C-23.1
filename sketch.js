const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1
var pigs1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(180,100,40,40);
    box2 = new Box (200,10,50,50);
    box3 = new Box (160,70,50,50);
    box4 = new Box (160,90,50,50);
    pigs1 = new Pigs (200,300);
    pigs2 = new Pigs (100,300);
    ground1 = new Ground(200,390, 400,10)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display()
    pigs1.display()
    box2.display()
    box3.display()
    box4.display()
    pigs2.display()
}