const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,690,800,20);

  for (var k = 0; k<=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 50; j<=width-10; j=j+50){
     plinkos.push(new Plinko(j,75));
  }
  for (var j=75; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
 }
 for (var j=75; j<=width-10; j=j+50){
   plinkos.push(new Plinko(j,375));
 }
  //Engine.run(engine);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  //drawSprites();
  Engine.update(engine);
  for (var n=0; n<divisions.length; n++){
    divisions[n].display();
  }
  if(frameCount %60 === 0){
    particles.push(new Particles(random(width/2-30,width/2+30,),10,10));
  }
  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  for (var k=0;k<plinkos.length; k++){
    plinkos[k].display();
  }

  ground.display();

}