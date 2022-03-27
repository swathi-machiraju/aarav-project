var object

function preload(){
  bush = loadImage("bush-clipart.png");
    cop = loadAnimation("cop-1.png","cop-2.png","cop-3.png","cop-4.png");
    robber_running = loadAnimation("robber-0.png","robber-2.png","robber-3.png","robber-4.png","robber-5.png","robber-6.png","robber-7.png","robber-8.png","robber-9.png","robber-10.png");
    bg = loadImage("background.png");
}



function setup() {
createCanvas(800, 600);
bgSprite = createSprite(300,250,800,600);
bgSprite.addImage(bg);
bgSprite.x = bgSprite.width/1.2;
bgSprite.scale = 1.8;

 
}

function draw() {
 background(0);
 bgSprite.velocityX=-1

 if(bgSprite.x<260)
 {
  bgSprite.x = bgSprite.width/1.2;

 }
  drawSprites();
}

