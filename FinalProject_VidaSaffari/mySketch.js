//VARIABLES
	var song; //variable for background narrative
	var tweet; //declare array for tweet images popping up
	var global; //declare array for global warming images popping up
	var effects; //declare array for effects of global warming images popping up 
	var sceneId = 0; //variable for switching screens 

	var oldSceneId=-1; //variable to change screens from old to new 
	var subcanvas; //variable for subcanvas

//TEAR VARIABLES 
	var rightTearY = 150; //right tear at 200
	var leftTearY = 150; //left tear at 200

//SUN VARIABLES
	var sunW = 300; //sun width
	var sunH = 300; //sun height 

//IMAGE VARIABLES 
	var earthmap; //earth map image variable
	var firesincali; //fires in cali photo 
	var seastats; //seastats photo
	var penguins; //penguins photo
	var windy; //winds photo 
	var deadtrees; //dead trees photo 
	var timearticle; //time article photo
	var californiamap; //california map photo 
	var firetracker; //california firetracker photo
	var globe; //globe image 

//FIRE VARIABLES  
	var fire1; //fire1
	var fire2; //fire2 

//WAVES FOR RISING SEA LEVELS VARIABLE 
		var yoff = 0; //declare y offset variable

//STRONG WIND VARIABLES 
		var _xstart; 
		var _xnoise; 
		var _xstart; 
		var _ynoise;
		var _xstartNoise; 
		var _ystartNoise;

//SUN NOISE VARIABLES 
	var n = 0.001; 
	var n2 = 0;
	var noize = 0; 
	var noize2 = 0;
	var delta_n = 0.002; 
	var delta_n2 = 0.052;
	var max_size= 400; //maximum size of sun 
	var max_iterations = 500; //maximum iterations of lines created 
	var points = 100;
	var counter = 0;

function preload() {
	//preload sound file 
	song = loadSound('DearFutureGenerations.mp3'); //load Dear Future Generations Sorry
	
	//preload map material image 
		earthmap = loadImage("map.jpg");  
	
	//preload images: 
		firesincali = loadImage("firesincali.jpg");
		seastats = loadImage("seastats.png"); 
		penguins = loadImage("penguins.jpg");
		windy = loadImage("windy.jpg"); 
		deadtrees = loadImage("deadtrees.jpg"); 
		timearticle = loadImage("timearticle.jpg");
		californiamap = loadImage("californiamap.png"); 
		firetracker = loadImage("firetracker.jpg");
		globe = loadImage("globe.jpg"); 
		
	
}//end bracket of function preload  

function setup() {
	createCanvas(windowWidth,windowHeight);
  subcanvas = createGraphics(windowWidth,windowHeight,WEBGL);
	
	//Play song
		song.play(); //play song
	
	//PERLIN NOISE VARIABLES
	pixelDensity(1); //density of pixels
	noiseDetail(5); //how sharp noise is 
	
	//array of images of global warming on planet 
		global = [
			{name:"california wildfires",time:150,x:50,y:0,width:windowWidth,height:windowHeight,color:30,
			 image:loadImage("californiawildfires.jpg")}, //california wildfire photo paramaters
			{name:"california wildfires 2",time:280,x:0,y:0,width:windowWidth,height:windowHeight,color:30,
			 image:loadImage("californiawildfires2.jpg")}, //california wildfires photo 2 paramaters
			{name:"polar bears",time:410,x:0,y:0,width:windowWidth,height:windowHeight,color:30,
			 image:loadImage("polarbears.jpg")} //polar bear photo paramaters 

			] //closing bracket for global array
		
	
	//array of tweet images popping up at different times 
		tweet = [
			{name:"tweet 1",time:570,x:0,y:150,width:30,height:30,color:30,
			 image:loadImage("tweet1.png")}, //tweet 1 paramaters
			{name:"tweet 2", time:870,x:700, y:100, width:30,height:40, color:200,
			image: loadImage("tweet2.png")}, //tweet 2 paramaters
			{name:"tweet 3", time:1170,x:300,y:200,width:15,height:15,color:30,
			 image:loadImage("tweet3.png")}, //tweet 3 paramaters
			{name: "tweet 4", time:1470,x:200,y:400,width:10,height:10,color:30,
			 image:loadImage("tweet4.png")}, //tweet 4 paramaters
			{name: "tweet 5", time:1770,x:550,y:300,width:20,height:20,color:30,
			 image:loadImage("tweet5.png")} //tweet 5 paramters 
		
		] // closing bracket for tweet array 
		
		//SETUP for wildfires 
				noSmooth();
				fire1 = new Fire(500,300); //first fire 
				fire2 = new Fire(800,400); //second fire  
				angleMode(DEGREES);
				rectMode(CENTER, CENTER);
	
}//closing bracket for function setup 

function draw() {
	//frameCount = 4600; //TODO remove this
	//PAGE 0: COVER PAGE: Climate Change is Real By Vida Saffari
			if (sceneId==0){
				//Framecount display text
				background(84,171,255); //dark blue background 
				//fill(0); //black text
				//text(frameCount,50,50); //display frame count
				
				background(84,171,255); //dark blue background
	
						//string to display title text:" "Climate Change is Real" 
								var real = "Climate Change is Real";  
								fill(0); //fill black text
								textFont('Times New Roman'); //text font Times New Roman 
								textSize(100); //text size 32 (as title)
								textAlign(CENTER,CENTER); //align text in center of page 
								text(real,700,200); //display string in middle of page 

						//string to display name: "By: Vida Saffari" 
								var name = "By: Vida Saffari"; 
								fill(0); //fill white text 
								textFont('Times New Roman'); //text font Times New Roman 
								textSize(100); //text size 28 
								textAlign(CENTER,CENTER); //align text in center of page 
								text(name,700,400); //display text below title 
				
			}//end bracket of sceneId=0 
	
	//PAGE 1: DEAR FUTURE GENERATIONS... "SORRY" WITH FIRE/PERLIN NOISE BACKGROUND 
				if (sceneId==1){
						background(184,67,52); //clear screen to red color
					
					//SMOKE PERLIN NOISE: attempt 2
						//variables for smoke perlin noise 
						var increment = 0.012; //increment pixels 
						var ysc = 300; 
					
							//load pixels 
								loadPixels();
										for (var x = 0; x < width; x+=1) { //increment x until width 
											var xsc = 10;
											for (var y = 0; y < height; y+=1) {
												var index = (x + y * width) * 2;
												var smoke = noise(xsc, ysc) * 350; 
													pixels[index + 2] = smoke;
													pixels[index + 1] = smoke;
													pixels[index + 2] = smoke;
													pixels[index + 4] = 300;
												
												xsc += increment;
												
											} //closing bracket of second for loop 
											
												ysc += increment;
											
										} //closing bracket of first for loop 
					
								//update smoke pixels 
										updatePixels();
						
						//string to display text:"Dear Future Generations"
						var t = "Dear Future Generations...";  
							fill(0); //fill black text
							textFont('Times New Roman'); //text font Times New Roman 
							textSize(100); //text size 32 (as title)
							textAlign(CENTER,CENTER); //align text in center of page 
							text(t,700,200); //display string at bottom of page  
					
						//string to display text: "SORRY" --MAKE IT POP UP ON SCREEN HUGE
						var sorry = "SORRY"; 
							fill(255); //fill white text
							textFont('Times New Roman'); //text font Times New Roman
							textSize(200); //make larger text size to emphasize 
							textAlign(CENTER,CENTER);
					
						//make letters move around 
						sorry.split("").forEach((letter,lid)=>{
							text(letter,300+lid*150,350 + sin(lid +frameCount/7)*500);
						})
						 
					
				}//end bracket of sceneId=1 
	
	//PAGE 2: IMAGES OF GLOBAL WARMING ARRAY
		if (sceneId==2){
						background(75,94,191); //clear screen to dark purple color
	
		for (var i =0;i<global.length; i++){
								if (global[i].time<frameCount){ //display array when time is less than frame count 
									fill(global[i].color)
									//rect(tweet[i].x,tweet[i].y,tweet[i].width,tweet[i].height)
									image(global[i].image,global[i].x,global[i].y) //draws image 
								} //closing bracket of if statement
							}//closing bracket of for loop
			
			} //closing bracket of sceneId = 2
	
		//PAGE 3: WHAT OUR PRESIDENT SAYS ABOUT CLIMATE CHANGE (INSERT QUOTES AND TWEETS) 
				if (sceneId==3){
						background(75,94,191); //clear screen to dark purple color
						
							//string to display text:"What Our President Says About Climate Change..."
								var p = "What Our President Says About Climate Change...";  
								fill(255); //fill blue text
								textFont('Times New Roman'); //text font Times New Roman 
								textSize(28); //text size 32 (as title)
								textAlign(CENTER,CENTER); //align text in center of page 
								text(p,300,50); //display string at top of page
					
							//display array of tweet images 
								for (var i =0;i<tweet.length; i++){
									if (tweet[i].time<frameCount){ //display array when time is less than frame count 
										fill(tweet[i].color)
										//rect(tweet[i].x,tweet[i].y,tweet[i].width,tweet[i].height)
										image(tweet[i].image,tweet[i].x,tweet[i].y) //draws image 
									} //closing bracket of if statement
								}//closing bracket of for loop
					
				} //closing bracket of sceneId = 3
	
	//PAGE 4: EARTH IMAGERY WITH "WHAT IS ACTUALLY HAPPENING TEXT..."
			if(sceneId==4){
				background(0); //black background of space
				
				//string to display text: "But What Is The Reality Of The Situation?"  
						var e = "But What Is The Reality Of The Situation?";  
						fill(255); //fill white text
						textFont('Times New Roman'); //text font Times New Roman 
						textSize(40); //text size 32 (as title)
						//textAlign(CENTER,CENTER); //align text in center of page 
						text(e,400,100); //display string in middle of page
				
				//earth that rotates 
						subcanvas.translate(0,0,0);
						subcanvas.fill(40,38,191);
						subcanvas.push(); //push matrix
						subcanvas.rotateZ(frameCount * 0.1);
						subcanvas.rotateX(frameCount * 0.1);
						subcanvas.rotateY(frameCount * 0.01);
						subcanvas.texture(earthmap); //draw earth's texture with uploaded earthmap image 
						subcanvas.sphere(200); //draw sphere
						subcanvas.pop(); //pop matrix 
						image(subcanvas,0,0); //draw image on subcanvas  
		
			} //closing bracket of sceneId = 4
	
		//SCREEN 5: RISING TEMPERATURES ICECREAM IMAGERY 
				if(sceneId==5){ 
					background(215,255,230); //light green background
					//fr = 20; //setting framerate
					
					
					//ICECREAM POSITION VARIABLES 
						var x= 200;
						var y= 150;
						var w= 100;
						var h= 50; 

					//string to display text: "Over the century, there has been a temperature increase of"  
						var century = "Over the century, there has been a temperature increase of"; 
						fill(255,83,100); //fill red text
						textFont('Times New Roman'); //text font Times New Roman 
						textSize(40); //make larger text size to emphasize 
						//textAlign(CENTER,CENTER); 
						text(century,500,50); 
	
					//string to display text: "1.4 degrees Celcius"
										var temperature = "1.4 degrees Celcius"; 
										fill(255,83,100); //fill red text
										textFont('Times New Roman'); //text font Times New Roman 
										textSize(50); //make larger text size to emphasize 
										//textAlign(CENTER,CENTER); 
										text(temperature,1170,50); 
			
								//CONE
								strokeWeight(5);
								fill(222,155,121); //brow cone color 
								noStroke();
								triangle(x-50,y+100,x,y+250,x+50,y+100);//cone

								//ICECREAM 
								fill(255,237,200);//vanilla color 
								ellipse(x,y+50,w+40,h+50);//ice cream

								//CHERRY 
								fill(255,83,100);//red cherry color 
								noStroke(); 
								ellipse(x,y-20,w-60,h-10);//cherry

								//CHERRY STEM 
								stroke(133,57,69); //dark red cherry stem
								line(x+20,y-70,x,y-40);//cherry stem

									//increment size of sun 
										sunW += 2.3; //increment sun width
										sunH+= 2.3; //increment sun height

								//ICECREAM MELTING 
										//RIGHT TEAR 1
										drawRightTear(280,rightTearY,30,30,color(255,237,200),1);
										rightTearY = rightTearY + 2.5;
											if(rightTearY>350){ //within borders of cone
												rightTearY=250; 
												}
											//else if(rightTearY>400){ //stop drip 
												//noLoop();
											//}
									//LEFT TEAR 2
										drawLeftTear(120,leftTearY,30,30,color(255,237,200),1);
										leftTearY = leftTearY + 2.5;
											if(leftTearY>350){ //within borders
												leftTearY=250;
												}
											//else if (leftTearY>300){ //stop drip
												//noLoop();
													//} 
					
						//ENLARGING SUN DRAW: 
										noStroke(); //no outline
										fill(232,243,109); //yellow sun
										ellipse(700,450,sunW,sunH); 

				} //closing bracket of sceneId = 5

	
	//SCREEN 6: DISPLAY IMAGE OF FIRES IN CALIFORNIA 
		if(sceneId==6){
			background(232,243,109); //yellow sun background color 
			
			//call image 
			image(firesincali,60,30,windowWidth/1.1,windowHeight/1.1); //display image 
			
		} //closing bracket of sceneId = 6
	
	//SCREEN 7: DISPLAY QUOTE WITH WILDFIRE STATS  
			if(sceneId==7){
				background(255);
				
				image(firetracker,0,0,windowWidth,windowHeight); //display image as background
				
				//draw string "Since 2002,California Alone Has Had 20 Wildfires"
						var ca = "Since 2002,California Alone Has Had 20 Wildfires"; 
													noStroke(); 
													strokeWeight(0.5); 
													fill(186,35,9); //fill red text
													textFont('Times New Roman'); //text font Times New Roman 
													textSize(20); //text size 32 (as title)
													//textAlign(CENTER,CENTER); //align text in center of page 
													text(ca,1100,450); //display string at top of page
	
				//draw string "...That Have Burned Over 100,000 Acres"
							var fire = "...That Have Burned Over 100,000 Acres"; 
													noStroke(); 
													strokeWeight(0.5); 
													fill(186,35,9); //fill red text
													textFont('Times New Roman'); //text font Times New Roman 
													textSize(20); //text size 32 (as title)
													//textAlign(CENTER,CENTER); //align text in center of page 
													text(fire,1130,500); //display string at top of page
				
				
				} //closing bracket of sceneId = 7
	
	//SCREEN 8: DISPLAY FIRE OBJECTS ON MAP BACKGROUND IMAGE
			if(sceneId==8){
				
				scale(2); 
				background(255); //white background
				
				//call image for background
					image(californiamap,85,0,windowWidth/5,windowHeight/2); 
				
				//call method of x and y of fire 
				
				fire1.x = 100; //x position of fire 
				fire1.y = 100; //y position of fire

				fire2.x = 100; 
				fire2.y = 300; 

				//call to method of running fire 
				fire1.run();
				fire2.run(); 

				//call to method of drawing fire 
				fire1.draw();
				fire2.draw(); 
				
				} //closing bracket of sceneId = 8 
		
	//SCREEN 9: RISING SEA LEVELS WAVE IMAGERY
			if(sceneId==9){ 
				
			//draw wave shape 
				beginShape(wave);
				stroke(20, random(150), random(150,200), 40); //random colors between blue 
				noFill();
				strokeWeight(random(0.5,3)); //random thickness of lines  
	
			 var xoff= 40; //declare x variable 
				
			//wave for loop 
				for (var x = 0; x <= width; x += 7) {
		
				//Map noise value (between 0 and 1) to y-value of canvas
					var y = map(noise(xoff, yoff), 0, 1, 100, 600);
					
					//label vertex 
					vertex(x, y); 
					xoff += 0.08;
		
					} //closing bracket of for loop 
    
				//establish variables for speed of wave 
						yoff += 0.005;
				// console.log(yoff);
						vertex(x, height);
						vertex(0, height);
					endShape(CLOSE);
	
			//draw string "Global Average Sea Levels Have Risen 7 to 8 Inches"
					var wave = "Global Average Sea Levels Have Risen 7 to 8 Inches"; 
												noStroke(); 
												strokeWeight(0.5); 
												fill(255); //fill blue text
												textFont('Times New Roman'); //text font Times New Roman 
												textSize(35); //text size 32 (as title)
												textAlign(CENTER,CENTER); //align text in center of page 
												text(wave,400,50); //display string at top of page 

		} //closing bracket of sceneId = 9
	
	//SCREEN 10: IMAGE OF PENGUINS AND SEA LEVEL STATS
		if(sceneId==10){
			background(181,200,255); //blue background 
			
			//call seastats image 
			image(seastats,575,150,seastats.width/5,seastats.height/5); 
			
			//call penguins image 
			image(penguins,25,30,penguins.width * 1.1,penguins.height * 1.1);
			
		} //closing bracket of sceneId = 10
	
	//SCREEN 11: IMAGES OF STRONG WINDS AND DEAD TREES 
			if(sceneId==11){
				background(181,200,255); //blue background
				
				//draw string "Winds Are Stronger Than Ever Before"
					var winds = "Winds Are Stronger Than Ever Before"; 
					fill(0); //fill black text
					textFont('Times New Roman'); //text font Times New Roman 
					textSize(35); //text size 32 (as title)
					textAlign(CENTER,CENTER); //align text in center of page 
					text(winds,1100,100); //display string at top of page
			
				//call strong winds image 
					image(windy,100,0,windy.width/1.2,windy.height/1.2);
				
				//call dead trees image 
					image(deadtrees,800,250,deadtrees.width/2,deadtrees.height/2); 
	
			} //closing bracket of sceneId = 11
	
	//SCREEN 12: DON'T LET THE FEDERAL GOVERNMENT CUT THE FUNDING WE NEED TO SAVE OUR PLANET
		if(sceneId==12){
			
			background(181,200,255); //blue background
			
			var funding = "Don't Let President Trump Cut The Funding We Need to Save Our Planet"; 
											noStroke(); 
											strokeWeight(0.5); 
											fill(186,35,9); //fill red text
											textFont('Times New Roman'); //text font Times New Roman 
											textSize(40); //text size 32 (as title)
											textAlign(CENTER,CENTER); //align text in center of page 
											text(funding,700,50); //display string at top of page
	
		//call time article image 
			image(timearticle,500,100,timearticle.width,timearticle.height); 
	
		} //closing bracket of sceneId = 12

	//SCREEN 13: TAKE A STAND BEFORE ITS TOO LATE...
			if(sceneId==13){
					background(181,200,255); //blue background
				
								var late = "Take A Stand Before It's Too Late..."; 
									fill(0); //fill black text
									textFont('Times New Roman'); //text font Times New Roman 
									textSize(40); //text size 32 (as title)
									textAlign(CENTER,CENTER); //align text in center of page 
									text(late,500,100); //display string at top of page
				
								//clock 
								fill(0,73,255); 
								ellipse(700,340,300,300); //blue clock 
			
						//seconds hand moves
								sec = map(second(),0,100,0,10*PI)
								push();
								noFill();
								translate (width/2, height/2);
								rotate(sec * 20); //make it speed up
								strokeWeight(5);
								stroke(255); //white color 
								line(0,0,0,120);
								pop();
		
		} //closing bracket of sceneId = 13
	

	//SCREEN 14:INCREMENT ELLIPSE OF DESTROYED EARTH TO BLACK SCREEN  
			if(sceneId==14){
				
				background(0); //black background of space
				
				//string to display text: "But What Is The Reality Of The Situation?"  
						var save = "Let's Not Be Sorry...Let's Promise to Save Our Only Home";  
						fill(255); //fill white text
						textFont('Times New Roman'); //text font Times New Roman 
						textSize(40); //text size 32 (as title)
						//textAlign(CENTER,CENTER); //align text in center of page 
						text(save,550,100); //display string in middle of page
				
				//sun explosion
				
					//setup 
					background(0); //black background 
					blendMode(ADD);
					noFill();
					stroke(500,100,8,30); //sun lines that will be redrawn 
	
					//drawing sun shape 
						translate(width/2.5, height/2.5);
				
					//if less than maximum, begin creating shape 
						if(counter <= max_iterations){
								beginShape(); //sun shape 
							
						//start array of sun enlarging 
						for(var i = 0 ; i < points; i++){
							n +=  delta_n; 
							n2 += delta_n2;
							noize = noise(n) * max_size;
							noize2 = noise(n2) * random(0,4 * PI); //make random noise levels 
							curveVertex(noize * cos(i * noize2 ), noize * sin(i * noize2 )); //variables of sun 
						}  
						 endShape(CLOSE); //end of shape 
						}
						else{
							noLoop(); //stop iterating if 
						}
						counter += 1;

						background(0); //redraw black background 

			} //closing bracket of sceneId = 14

	
	//SCREEN 15:FINAL BLACK PAGE   
			if(sceneId==15){
				
				background(0); //black background of space
				
			} //closing bracket of sceneId = 15 
	
	//SCREEN INCREMENTS ARRAY TO LOOP THROUGH TIME 
	
		var changeCondition = [80,120,150,530,1860,2360,2960,3360,3860,4360,4860,5360,5860,6360,6860,7500]
			for(var i=changeCondition.length-1;i>=0;i--){
				if (changeCondition[i]<frameCount){
					sceneId=i
					break;
				}
			}
	
	//refresh background so that waves show up properly 
		if (oldSceneId != sceneId && sceneId == 9){
			background(181,200,255); //blue background
		}
	
	
		//make music stop at end 
			if (oldSceneId != sceneId && sceneId == 15){
			background(0); //black background
			song.stop(); //stop playing song 
		}
	
		oldSceneId = sceneId
		
} //end bracket of function draw

//ICECREAM TEAR DROP FUNCTIONS 

		function drawRightTear(rightTearX,rightTearY,rightTearW,rightTearH,color11,thickness){
				stroke(color11);
				strokeWeight(thickness);
				fill(color11);
				ellipse(rightTearX,rightTearY,rightTearW,rightTearH);
			}

		function drawLeftTear(leftTearX,leftTearY,leftTearW,leftTearH,color12,thickness){
				stroke(color12);
				strokeWeight(thickness);
				fill(color12);
				ellipse(leftTearX,leftTearY,leftTearW,leftTearH);
		}