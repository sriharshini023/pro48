var boy;



function preload(){

}



function setup(){
createCanvas(displayWidth,displayHeight)
boy=createSprite(displayWidth/2,displayHeight/2,10,10)
}


function draw(){
background("red")
textSize(20)
text("the boy is sleeping  , he is more intrested in spaceships,space , aliens and that night he got a dream in which he was landing on mars and he couldclearly see the path from mars to earth but he cant reach earth because there are several aliens roaming on that path . The aliens want the boy to stay in mars itself they dont want to send me to earth ",100,50)

drawSprites()

}