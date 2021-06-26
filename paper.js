class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            friction:0,
            restitution:0.3,
            density:1.2	
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options);
        this.image = loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			//rect(0,0,this.w, this.h);
            image(this.image,0,0,this.r,this.r)
			pop()
			
	}

}