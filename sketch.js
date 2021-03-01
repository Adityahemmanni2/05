const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ironMan,ironManImage;
var thanos,thanosImage;
function preload() {
ironManImage=loadImage("images/i3.png");
thanosImage=loadImage("images/t-removebg-preview.png")

}

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ironMan_options ={
      isStatic: true
  }

  ironMan=createSprite(76,284,20,20,ironMan_options);
  ironMan.addImage(ironManImage);
  ironMan.scale=0.1;
  World.add(world,ironMan);

  var thanos_options ={
    restitution: 1.0
}
  thanos=createSprite(204,284,20,20,thanos_options);
  thanos.addImage(thanosImage);
  thanos.scale=0.1;
  World.add(world,thanos);


}

function draw() {
  background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ironMan.position.x,ironMan.position.y);
  rect(thanos.position.x,thanos.position.y);
  
}


