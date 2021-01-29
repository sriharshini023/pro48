var boy;
var gamestate=1;
var distance=4000



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

boy=createSprite(0,displayHeight/3,10,10)
boy.addImage("boyimg",boyimg)
boy.visible=false
boy.scale=0.1
boy.depth=4
ground1=createSprite(displayWidth/2,80,displayWidth-10,50)
//ground1.visible=false
ground=createSprite(displayWidth/2,displayHeight/2,displayWidth-10,50)

ground2=createSprite(100,displayHeight/2-100,50,500)
mars=createSprite(0,displayHeight/2)
mars.addImage("marsimg",marsimg)
mars.scale=0.1
mars.visible=false
earth=createSprite(displayWidth-10,displayHeight/2)
earth.addImage("earthimg",earthimg)
earth.visible=false
earth.scale=0.5
ground.visible=false
ground1.visible=false
ground2.visible=false

   
   
alien1=createSprite(displayWidth,150)
alien1.addImage("alienImg",alienimg)
alien1.velocityX=-4
alien1.velocityY=1
alien1.scale=0.1



alien2=createSprite(displayWidth,100)
alien2.addImage("alienImg",alienimg)
//alien2.velocityX=-5
//alien2.velocityY=5
alien2.scale=0.1


alien3=createSprite(displayWidth,110)
alien3.addImage("alienImg",alienimg)
alien3.velocityX=-2
alien3.velocityY=2
alien3.scale=0.1


alien=createSprite(displayWidth,170)
alien.addImage("alienImg",alienimg)
alien.velocityX=-3
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

alien3.bounceOff(ground1)
alien2.bounceOff(ground1)
alien1.bounceOff(ground1)
alien.bounceOff(ground1)
alien.bounceOff(ground)
alien3.bounceOff(ground)
alien2.bounceOff(ground)
alien1.bounceOff(ground)
alien3.bounceOff(ground2)
alien2.bounceOff(ground2)
alien1.bounceOff(ground2)
alien.bounceOff(ground2)

boy.collide(ground)
boy.collide(ground1)

if(gamestate===2){
//background(bg)
background.visible=false
//backg.velocityX=1


camera.position.x = boy.x;
camera.position.y = boy.y;

mars.visible=true
earth.visible=true

//backg.visible=true

boy.visible=true
text("distance Tom needed to reach Earth"+distance,boy.x,boy.y)

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
if(boy.x<0){
boy.x=0
}
if(boy.isTouching(alien)||boy.isTouching(alien1)||boy.isTouching(alien2)||boy.isTouching(alien3)){
    boy.x=0
    boy.y=displayHeight/3
}

}











drawSprites()
    
}
function keyPressed(){
if(keyCode === 32){
   gamestate=2



}
}



