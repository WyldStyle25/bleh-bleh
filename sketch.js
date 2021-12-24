var count=0;
var form, game;
var nextbuttonimage;
var gametitle
var debrisImg

function preload(){

debrisImg=loadImage("images/Debris 1.png")

}

function setup()
{
createCanvas(windowWidth, windowHeight);
game= new Game();
form= new Form();
form.next2.hide();
}
function draw(){
background("black");
form.display();
//form.next2.click(function(){spawnDebris();})
/*if(form.next2.mousePressed()){
spawnDebris()
}*/
if(form.next1.clicked==true){
alert("next1.clicked")

}
form.next2.onMousePressed= function(){
spawnDebris();
}
drawSprites()


}
function spawnDebris(){
    var x, y
    x=Math.round(random(0,windowWidth-200));
    y=Math.round(random(0,windowHeight-200));
var debris= createSprite(x,y); 
debris.addImage(debrisImg); 
}