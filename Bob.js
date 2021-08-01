class Bob{
    constructor(x,y,r){

		var options={
			isStatic:false,
			restitution:1.04,
			friction:10,
            density:4.9
        }

        this.x=x;
        this.y=y;
		this.r=100;
		this.body=Bodies.circle(this.x, this.y,this.r/2, options);
		World.add(world, this.body);

    }
    
	display(){
			
        var bobposition=this.body.position;		

		push()
        translate(bobposition.x, bobposition.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("blue");
        ellipse(0,0,100,100);
        
		pop()
			
	}
}