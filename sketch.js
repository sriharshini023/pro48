var boy;
var gamestate=1;



function preload(){
bedroom=loadImage("images/bedroom.jpg")
boyimg=loadImage("images/boy.png")
bg=loadImage("images/background.jpg")


}



function setup(){
createCanvas(800,800)
backg=createSprite(400,400)
backg.addImage("backimg",bg)
backg.visible=false
boy=createSprite(displayWidth/2,displayHeight/2,10,10)
boy.addImage("boyimg",boyimg)
boy.visible=false
boy.scale=0.1

}


function draw(){
background(bedroom)
textSize(40)
fill ("black")

text("the boy is sleeping  , he is more intrested in spaceships,space , \n aliens and that night he got a dream in which he was landing on mars and he couldclearly see the path from mars to earth but he cant reach earth because there are several\n aliens roaming on that path . The aliens want the boy to stay in mars \nitself they dont want to send me to earth ",100,50)

text("press space key to start the game",400,400)


if(gamestate===2){
//background(bg)
backg.velocityX=5
backg.visible=true

boy.visible=true

if(keyDown(UP_ARROW)){
    boy.y+=-10
}
if(keyDown(DOWN_ARROW)){
    boy.y+=10
}
if(keyDown(LEFT_ARROW)){
    boy.x+=-10
}
if(keyDown(RIGHT_ARROW)){
    boy.x+=10
}










}
drawSprites()
    
}
function keyPressed(){
if(keyCode === 32){
   gamestate=2



}
}