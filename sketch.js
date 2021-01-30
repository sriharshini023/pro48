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
ground1=createSprite(displayWidth/2,50,displayWidth,20)

ground=createSprite(displayWidth/2,displayHeight/2,displayWidth-10,50)

ground2=createSprite(100,displayHeight/2-100,50,500)
ground3=createSprite(displayWidth-10,displayHeight/2,20,5000)
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

 alien6=new alien(displayWidth,140)  
   alien6.move(-1,2)

   
   alien6.a.bounceOff(ground1)
   alien6.a.bounceOff(ground3)
   alien6.a.bounceOff(ground2)
   alien6.a.bounceOff(ground)
alien1=createSprite(displayWidth,150)
alien1.addImage("alienImg",alienimg)
alien1.velocityX=-1
alien1.velocityY=1
alien1.scale=0.1

alien4=createSprite(displayWidth,90)
alien4.addImage("alienImg",alienimg)
alien4.velocityX=-2
alien4.velocityY=1
alien4.scale=0.1



alien2=createSprite(displayWidth,100)
alien2.addImage("alienImg",alienimg)
alien2.velocityX=-3
alien2.velocityY=5
alien2.scale=0.1


alien3=createSprite(displayWidth,110)
alien3.addImage("alienImg",alienimg)
alien3.velocityX=-1.5
alien3.velocityY=2
alien3.scale=0.1


/*alien=createSprite(displayWidth,140)
alien.addImage("alienImg",alienimg)
alien.velocityX=-3
alien.velocityY=3
alien.scale=0.1*/


alien5=createSprite(displayWidth,100)
alien5.addImage("alienImg",alienimg)
alien3.velocityX=-2
alien5.velocityY=2
alien5.scale=0.1


}





function draw(){

    


background(bedroom)
textSize(40)
fill ("white")

text("Little Tom is sleeping  , he is more intrested in spaceships,space , \n aliens and that night he got a dream in which he was landing on\n Mars and he could clearly see the path from mars to earth but he cant reach \near Earth because there are several\n aliens roaming on that path . The aliens want the boy to stay in Mars \n itself they dont want to send him to Earth ",30,50)
fill ("black")
text("press space key to start the game",400,400)
alien6.alienbounce()
alien3.bounceOff(ground1)
alien2.bounceOff(ground1)
alien1.bounceOff(ground1)
alien4.bounceOff(ground1)
alien5.bounceOff(ground1)

alien3.bounceOff(ground)
alien2.bounceOff(ground)
alien1.bounceOff(ground)
alien4.bounceOff(ground)
alien5.bounceOff(ground)


alien3.bounceOff(ground2)
alien2.bounceOff(ground2)
alien1.bounceOff(ground2)
alien4.bounceOff(ground2)
alien5.bounceOff(ground2)

boy.collide(ground)
boy.collide(ground1)


if(gamestate===2){
background(bg)
background.visible=false
//backg.velocityX=1
if(distance===0){
    gamestate=3
    
}
distance=Math.abs(earth.x-boy.x)


camera.position.x = boy.x;
camera.position.y = boy.y;

mars.visible=true
earth.visible=true

//backg.visible=true

boy.visible=true
text("distance Tom needed to cover  :"+distance,boy.x,boy.y)

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
    boy.x+=3
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



