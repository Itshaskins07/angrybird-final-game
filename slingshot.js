class Slingshot{

    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04,    
        }
        this.slingshot=Constraint.create(options)
        this.sling1image=loadImage("sprites/sling1.png");
        this.sling2image=loadImage("sprites/sling2.png");
        this.sling3image=loadImage("sprites/sling3.png");
        World.add(world,this.slingshot);
        
    }
    display(){
       image(this.sling1image,200,22);
       image(this.sling2image,170,22);


       if(this.slingshot.bodyA!=null){        
        var positionA=this.slingshot.bodyA.position;     
        var positionB=this.slingshot.pointB;
        push();
        strokeWeight(10);
        stroke(48,22,8);
        line(positionA.x-20,positionA.y,positionB.x-10,positionB.y);
        line(positionA.x-20,positionA.y,positionB.x+30,positionB.y);
        image(this.sling3image,positionA.x-30,positionA.y-10,15,30);
        pop();
       }
    }

    fly(){
this.slingshot.bodyA=null;

}

}


