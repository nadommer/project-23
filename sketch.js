const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var car,wall
var speed, weight
function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;
    speed = random(55,90)
 weight = random(400,1500)
 car = createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,height/2)
 car.velocityX = speed;
}

function draw(){
    background(0);
    Engine.update(engine);

if (wall.x - car.x < (car.width=wall.width)/2)
{
car.velocityX = 0;
var deformation = 0.5* wieght*speed*speed/22509;
if (deformation > 100)
(
    car.shapeColor = color(255,0,0)
)
if (deformation < 100 && deformation>100)
{
    car.shapeColor = color(230,230,0)
}
if (deformation<100)
{
    car.shapeColor = color(0,255,0);
}
}
}