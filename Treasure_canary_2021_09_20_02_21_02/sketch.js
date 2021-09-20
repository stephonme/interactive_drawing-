let color1 = 0;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(0,0,0);
  stroke(255,192,203);
  fill(255,192,203);
  textSize(50);
  text('Heartbeat', 90, 50);
  
  
  stroke(255,0,0);
  fill(color1 ,0 ,0);
  ellipse(170, 195, 60);
  ellipse(230, 195, 60);
  fill(color1,0,0);
  triangle(140, 200, 200 ,300 , 260, 200);
}

function mouseMoved() {
  color1 = color1 + 5;
  if (color1 > 255) {
    color1 = 0;
    }
  }
  

	
    
	
