class alien{
    constructor(x,y){
        this.x=x
        this.y=y
        
        
          this.a=  createSprite(this.x,this.y)
           this.a.addImage(alienimg)
           this.a.scale=0.1

           

    }
   move(x,y){

    this.a.velocityX=x
    this.a.velocityY=y
    //drawSprites()
    

    

   }



   alienbounce(){
this.a.bounceOff(ground)
this.a.bounceOff(ground1)
this.a.bounceOff(ground2)
this.a.bounceOff(ground3)
   }
}