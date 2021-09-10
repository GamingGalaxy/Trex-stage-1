var trex,ground
var trex_running,groundImg


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg=loadImage("ground2.png")
}



function setup(){
  createCanvas(600,200);

  trex=createSprite(50,160,20,30)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5;

  ground=createSprite(300,180,1200,10)
  ground.addImage(groundImg)
  ground.velocityX=-4
}

function draw(){
  background(180)
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY+=0.9
  console.log(trex.y)
  trex.collide(ground)
  drawSprites()
}