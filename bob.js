class bob {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.2,
            density:1.2
        }
        
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body)
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}