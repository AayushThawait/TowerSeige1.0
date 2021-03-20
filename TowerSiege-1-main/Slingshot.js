class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;   
           // if(pointA.x<220){

             
            
            strokeWeight(4);
            fill("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y)            
      

        }



    }
    
}