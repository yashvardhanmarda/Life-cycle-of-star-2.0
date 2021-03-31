var bg;
var tunnel;
var tool1,tool2,tool3,tool4;
var bgImg;
var stgif;
function preload() 
{
bgImg=loadImage("bg2.jpg");
stgif=createImg("stellar-nebula-unscreen.gif");



}

function setup() {
  createCanvas(displayWidth,displayHeight);
  


}

function draw() {
  background(bgImg);
  stgif.position(100,displayHeight/2);
  stgif.scale=0.5
 }
 