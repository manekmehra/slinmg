var bird, slingshot;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  bird = new Bird(200,50);
  slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw() {
  background(255,255,255);  
  
  bird.display();
  slingshot.display(); 
  drawSprites();
}