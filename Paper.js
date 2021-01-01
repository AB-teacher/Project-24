class Paper{

    constructor(x,y,r) {
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.8,
			}
		
        this.body=Bodies.circle(x, y, r/2, options)
        this.x=x;
		this.y=y;
		this.radius=r/2;
		World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink")
        strokeWeight(3);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop()
    }
}