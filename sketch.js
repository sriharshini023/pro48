var boy;
var gamestate=1;



function preload(){
bedroom=loadImage("images/bedroom.jpg")
boyimg=loadImage("images/boy.png")
bg=loadImage("images/background.jpg")
alienimg=loadImage("images/alien.png")
marsimg=loadImage("images/mars.png")
earthimg=loadImage("images/earth.png")


}



function setup(){
createCanvas(displayWidth,displayHeight)
backg=createSprite(displayWidth/2,displayHeight/2)
backg.addImage("backimg",bg)
backg.visible=false
boy=createSprite(0,displayHeight/3,10,10)
boy.addImage("boyimg",boyimg)
boy.visible=false
boy.scale=0.1
boy.depth=4
ground=createSprite(displayWidth/2,displayHeight/2,displayWidth-10,50)
ground.visible=false
mars=createSprite(0,displayHeight/2)
mars.addImage("marsimg",marsimg)
mars.scale=0.1
mars.visible=false
earth=createSprite(displayWidth-10,displayHeight/2)
earth.addImage("earthimg",earthimg)
earth.visible=false
earth.scale=0.5

   
   
alien1=createSprite(50,50)
alien1.addImage("alienImg",alienimg)
alien1.velocityX=1
alien1.velocityY=1
alien1.scale=0.1
alien1.bounceoff()

alien2=createSprite(100,50)
alien2.addImage("alienImg",alienimg)
alien2.velocityX=5
alien2.velocityY=5
alien2.scale=0.1

alien3=createSprite(150,50)
alien3.addImage("alienImg",alienimg)
alien3.velocityX=2
alien3.velocityY=2
alien3.scale=0.1

alien=createSprite(200,50)
alien.addImage("alienImg",alienimg)
alien.velocityX=3
alien.velocityY=3
alien.scale=0.1




}


function draw(){
background(bedroom)
textSize(40)
fill ("white")

text("little tom is sleeping  , he is more intrested in spaceships,space , \n aliens and that night he got a dream in which he was landing on\n mars and he could clearly see the path from mars to earth but he cant reach \nearth because there are several\n aliens roaming on that path . The aliens want the boy to stay in mars \nitself they dont want to send him to earth ",30,50)
fill ("black")
text("press space key to start the game",400,400)



if(gamestate===2){
//background(bg)
//background.visible=false
//backg.velocityX=1

camera.position.x = boy.x;
camera.position.y = boy.y;

mars.visible=true
earth.visible=true
ground.visible=true
backg.visible=true

boy.visible=true

if(keyDown(UP_ARROW)){
    boy.y+=-2
}
if(keyDown(DOWN_ARROW)){
    boy.y+=2
}
if(keyDown(LEFT_ARROW)){
    boy.x+=-2
}
if(keyDown(RIGHT_ARROW)){
    boy.x+=2
}
}











drawSprites()
    
}
function keyPressed(){
if(keyCode === 32){
   gamestate=2



}
}



