var bg;
var tunnel;
var tool1,tool2,tool3,tool4;
var bgImg;
function preload() 
{
  player_img=loadAnimation("image/one.png")
  player_img1=loadAnimation("image/two.png");
  player_img2 = loadImage("image/four.png");
  player_img3 = loadImage("image/five.png");
 // bg=loadImage("images/Background.png");
 // tunnel =loadImage("images/tunnel2.png");
  //tree=loadImage("images/Tile_34.png");
  tool1 = loadImage("carbon.png");
  tool2 = loadImage("helium.png");
  tool3 = loadImage("nitrogen.png");
  tool4 = loadImage("hydrogen.png");
  bgImg = loadImage("space bg.jpg");


}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(500,100);
  player.addAnimation("one",player_img);
  player.addAnimation("two",player_img1);
  player.addAnimation("three",player_img2);
  player.addAnimation("four",player_img3);
  player.scale=4;
  player.velocityY=2;
  tools =createSprite(0,random(100,800),50,50);
  tools.addImage(tool1)
  tools.visible=false;
  next=createButton("can i see stellar nebula")
  next.position(displayWidth-200,displayHeight-200);

}

function draw() {
  background(bgImg);
  //image(tree,100,250);
 // image(tunnel,displayWidth-500,100,200,600)
 next.mousePressed(()=>{
   location.replace("2nd.html");
 })
 if (keyWentDown("space")) {
 
    
  player.changeAnimation("two");
  
 }
 player.x=mouseX;
 player.y=mouseY;
if(frameCount% 150 === 0){
  spawnTools();
}
if(player.x > 500){
  player.changeAnimation("three");
}
if(player.x < 500){
player.changeAnimation("four");
}
  drawSprites();
}
function spawnTools()
 {
   
   tools.visible=true;
   tools.y=random(100,800);
      tools.scale=0.5
  
  
   var rand = Math.round(random(1,4));
   if(rand === 1){
    tools.addImage(tool1);
 
   }
    
   if(rand === 2){
    tools.addImage(tool2);
    tool1 = loadImage("helium.png");

  }

  if(rand === 3){
    tools.addImage(tool3);
    tool1 = loadImage("nitrogen.png");

  }
  if(rand===4){
    tools.addImage(tool4);
    tool1 = loadImage("hydrogen.png");

  }

  

  tools.velocityX=2;
   
 }
 