class Ground
{
    constructor(x,y,width,height)
    {
        var options={'isStatic':true}
        this.image=loadImage("dustbingreen.png")
        this.body= Bodies.rectangle(x,y,width,height,options)
            World.add(world,this.body)
            this.width=width 
            this.height=height
    }
    
    display()
    {
        rectMode(CENTER)
        fill("white")
        image(this.image, 600,500,100,100)
        //rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
    
    



}