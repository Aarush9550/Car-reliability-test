var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);

  //Car sprite
  car=createSprite(50, 200, 50, 50);

  //Wall Sprite
  wall=createSprite(1500, 200, 60, height/2);
}

function draw() {
  background(rbg(0, 0, 0));  

  //Setting up random speed and weight
  speed=random(55, 90);
  weight=random(400, 1500); 

  //Car's velocity
  car.velocityX=speed;

  //Deformation calculation
  deformation=(0.5*wight*speed*speed)/22500;

  if(car.isTouching(wall)){
    car.velocityX=0;

    //Conditions
      if(deformation>180){
        car.shapeColor(rgb(255, 0, 0))
      }

      if(100<=deformation<=180){
        car.shapeColor(rgb(230, 230, 0))
      }

      if(deformation<100){
        car.shapeColor(rgb(0, 255, 0))
      }
  }
  drawSprites();
}