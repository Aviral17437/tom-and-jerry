var bgimg;
var cat;


function preload() {
    //load the images here
 bgimg = loadImage("garden.png");
 catimg1 = loadAnimation("cat1.png");
 mouseimg1 = loadAnimation("mouse1.png");
 catimg2 = loadAnimation(cat2.png,cat3.png);
 mouseimg2 = loadAnimation(mouse2.png,mouse3.png);

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
createsprite = cat(20,30,90,20);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
 cat.addAnimation(cat2.png,catimg2);
 cat.changeAnimation("cat2.png")

}

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
 mouse.addAnimation("mouse3.png".mouseimg2);
 mouse.changeAnimation("mouse3.png");
 mouse.frameDelay = 25;
 }

if(keyCode === LEFT_ARROW){
 mouse.addAnimation("mouse3.png".mouseimg2);
 mouse.changeAnimation("mouse3.png");
 mouse.frameDelay = 25;
 }
}
