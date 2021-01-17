var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup()
{
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  movingRect=createSprite(200,200,80,50);
  movingRect.shapeColor='green';
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3=createSprite(300,100,50,50);
  gameObject4=createSprite(400,100,50,50);
  gameObject1.shapeColor='green';
  gameObject2.shapeColor='green';
  gameObject3.shapeColor='green';
  gameObject4.shapeColor='green';
}
function draw()
{
  background("lightblue");
  console.log(movingRect.x-fixedRect.x);
  console.log(fixedRect.x-movingRect.x);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject1))
  {
    movingRect.shapeColor='blue';
    gameObject1.shapeColor='blue';
  }
 else
{ 
  movingRect.shapeColor='green';
  gameObject1.shapeColor='green';
} 


  drawSprites();
}
function isTouching(object1,object2)
{
  if(object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x <object1.width/2 + object2.width/2
    && object1.y-object2.y < object1.width/2 + object2.width/2
    && object2.y-object1.y <object1.width/2 + object2.width/2 )
  {
    return true;
  }
  else
  {
    return false;
  }
}