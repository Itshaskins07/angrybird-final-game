class Slingshot{

    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04,    
        }
        this.slingshot=Constraint.create(options)
        World.add(world,this.slingshot);
    }
    display(){
       if(this.slingshot.bodyA!=null){

        
        var positionA=this.slingshot.bodyA.position;     
        var positionB=this.slingshot.pointB;
        push();
        strokeWeight(5);
        stroke("red");
        line(positionA.x,positionA.y,positionB.x,positionB.y);
        pop();
       }
    }

    fly(){
this.slingshot.bodyA=null;

}

}


