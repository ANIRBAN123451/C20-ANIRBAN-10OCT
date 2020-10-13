var rect1,rect2;
function setup() {
  createCanvas(2000,2000);
  rect1=createSprite(200,200,100,40);
  rect2=createSprite(200,200,100,40);
  rect1.shapeColor="red";
  rect2.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  rect1.y=World.mouseY;
  rect1.x=World.mouseX;
  if(rect1.x-rect2.x < rect1.width/2 + rect2.width/2 
    && rect2.x-rect1.x < rect1.width/2 + rect2.width/2 
    && rect2.y-rect1.y < rect1.height/2 + rect2.height/2 
    && rect1.y-rect2.y < rect1.height/2 + rect2.height/2){
   rect1.shapeColor="blue";
   rect2.shapeColor="blue";
  }
  else{
    rect1.shapeColor="red";
    rect2.shapeColor="red";
  }
  drawSprites();
}