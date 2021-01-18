class Tree{
    constructor(x,y){
        var options = {
            isStatic : true,
           
        }
        this.x = x;
        this.y = y;
        
        this.image = loadImage("images/tree.png");
        this.body = Bodies.rectangle(this.x,this.y,1,1,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       
        imageMode(CENTER);
        image(this.image,0,0,450,600)
        pop();
    }
}                              