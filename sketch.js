var Shagun;
var bg;
var ground;

var treebranch,puddle,mountain;
var snowmonster;
var snowflakes;
var healthbar;
var bullet;

var  gameState="play";
var score=0;
var life=4;

function preload(){
snowmonster=loadImage("snowMonster1.png");
treebranch=loadImage("hurdl1.png");
bg=loadImage("snowImg2");
}

function setup()
{

  createCanvas(1000,600);
  
  Shagun=createSprite(70,500,55,95);
  ground=createSprite(600,590,1600,20);
}

function draw()
{
  background(bg);
  if(gameState==="play")
  {
    ground.velocityX=-3;

    if(ground.x<=0)   
     {
        ground.x=ground.width/2;

    }

    spawnObstacles();

  }

drawSprites();
}

function spawnObstacles()
{
  if (frameCount % 50 === 0)
  {
    var obstacle = createSprite(800,500,10,40);
    obstacle.velocityX = -4;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(snowmonster);
               break;
       case 2: obstacle.addImage(treebranch);
               break;
       
      default: break;
     }
  }
}