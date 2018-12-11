//DECLARE FIRE FUNCTION 
		function Fire(x, y) {
			this.fire = []; //array of fire 
	
	//method for drawing fire array 
		this.draw = function() {
			for(var i = 1;i < this.fire.length;i ++){ //increase fire's length
				this.fire[i].draw(); //draw fire 
			} //end bracket of for loop 
		}//end bracket of draw fire method 
		
		
	//method for running fire array 
		this.run = function() {
			for(var i = 0;i < this.fire.length;i ++){ //increase fire's length
				this.fire[i].run(); //run fire 
				if(this.fire[i].hue >= 255){
					this.fire.splice(i, 1); //change colors 
				}//end bracket of second for loop 
		}//end bracket of first for loop 
		
		//for loop to create new particles with fire object 
		for(var i = 0;i < 10;i ++) {
			this.fire.push(new Particle(this.x, this.y, random(-2, 3), random(-2, 1), 0));
		}
	}//end bracket of run fire method
		
} //end bracket of function Fire