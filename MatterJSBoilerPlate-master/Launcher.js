class Launcher{
    constructor(body,point){
        var options = {
            bodyA : body,
            pointB : point,
            stiffness :0.04,
            length :1
        }
        this.bodyA = body;
        this.pointB = point;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        if(this.launcher.bodyA){
            var posA = this.bodyA.position;
            var posb = this.pointB;
            strokeWeight(2)
            line(posA.x,posA.y,posb.x,posb.y);
        }
    }
}