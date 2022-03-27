  var object 
  function preload()
  {
    bush = loadImage("bush-clipart.png");
  cop = loadAnimation("cop-1.png","cop-1.png","cop-1.png","cop-1.png","cop-1.png","cop-2.png","cop-3.png","cop-4.png");
  robber_running = loadAnimation("robber-0.png","robber-2.png","robber-3.png","robber-4.png","robber-5.png","robber-6.png","robber-7.png","robber-8.png","robber-9.png","robber-10.png");
  bg = loadImage("background.png");
  } 

  function setup() { 
    createCanvas(800, 600); 
    bgSprite = createSprite(300,250,800,600); 
    bgSprite.addImage(bg); 
    bgSprite.x= bgSprite.width/1.2;
  bgSprite.scale= 1.8;
  copSprite = createSprite(700,500); copSprite.addAnimation("cop_shooting",cop); 
  copSprite.scale= 0.7;
  copSprite.velocityX = -3;
  robberSprite = createSprite(100,500); 
  robberSprite.addAnimation("robber_running",robber_running); 
  robberSprite.scale = 0.4
  robberSprite.velocityX = 0.6 

  bushSprite = createSprite(600,540); 
  bushSprite.addImage("bush",bush) 
  bushSprite.scale= 0.3
  bushSprite.velocityX = -3 
  ground = createSprite(10,590,800,10);
  ground.velocityX = -2;
  }
  
  function draw() { 
    background(0); 
    bgSprite.velocityX=-1
    robberSprite.collide(ground)
    if(bgSprite.x<260)
    { 
      bgSprite.x  = bgSprite.width/1.2;
    }
    if(keyDown("space") && robberSprite.y  >= 159) 
    { 
      robberSprite.velocityY = -12;
    } 

     if(ground.x<400){
       ground.x=ground.width/2
     }
    robberSprite.velocityY = robberSprite.velocityY+0.5
    drawSprites();
  }
