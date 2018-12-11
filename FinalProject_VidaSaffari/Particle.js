//DECLARE PARTICLE FUNCTION 
function Particle(x, y, dx, dy, hue) {
	this.x = x; //x location 
	this.y = y; //y location 
	this.dx = dx;
	this.dy = dy;
	this.hue = hue; //color 
	
	//draw particle function 
		this.draw = function(){
			fill(255, this.hue, 0, 255-this.hue);
			noStroke();
			rect(this.x, this.y, 10, 10, 3); //rectangle with x loc and y loc methods
		}//end bracket of draw function  
	
		//run particles function 
			this.run = function() {
				this.x += this.dx;
				this.y += this.dy;
		
			this.dy += 0.03 - .1; //how tall the fire is 
			
			//fire 1
			this.dx += 0.03 + (fire1.x - this.x)/90; //how wide the fire goes
			
			//fire 2
			this.dx += 0.03 + (fire2.x - this.x)/90; //how wide the fire goes 

		
			this.hue += (abs(this.dy)+abs(this.dx))*2;
		}//end bracket of particles function 
			
} //end bracket of function particle