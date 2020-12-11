var wall, bullet, damage;
var speed, weight, thickness;
var bulletRightEdge, wallleftEdge;
function setup() {
  createCanvas(1600,400);
  thickness=Math.round(random(22,83));
  wall=createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(200,200,50,10);
  wall.shapeColor="black";
  bullet.shapeColor="yellow";
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  

}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed;
  if(collisionDetection(bullet,wall)){
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage<=10){
      bullet.shapeColor="green";
    }
    else if(damage>10){
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}
function collisionDetection(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallleftEdge=wall.x;
  if(bulletRightEdge>=wallleftEdge){
    return true;
  }
  return false;
  
}

