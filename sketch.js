var fixedRect , movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500,100,40,40);

  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouse.x;
  movingRect.y = mouse.y;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRecy.x <= fixedRect.width/2 + movingRect.width./2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  drawSprites();
}