//Triángulo Grande 1:
var  angleT = 3.1415/4;
var  posxT = 100;
var  posyT = 100;

//Paralelogramo:
var  angleP = 0;
var  posxP = 300;
var  posyP = 80;

function keyReleased() {
	if((dist(posxT,posyT,mouseX,mouseY)<20)&&(keyIsPressed)){
    if(key=='a'){
		angleT = angleT + radians(45);
		for (let i = 0; i < 290000; i++) 
          var mil = millis()
	  }
      
	if(key=='s'){
	  angleT = angleT - radians(45);
	  		for (let i = 0; i < 290000; i++) 
          var mill = millis()
  }
  }
  if((dist(posxP,posyP,mouseX,mouseY)<20)&&(keyIsPressed)){
	if(key=='a'){
	angleP = angleP + radians(45);
			for (let i = 0; i < 290000; i++) 
          var milo = millis()
	}
	if(key=='s'){
	angleP = angleP - radians(45);
			for (let i = 0; i < 290000; i++) 
          var mils = millis()
  } 
}
  
  }
  
function pintarTriangulo(){
  keyReleased();
  if((dist(posxT,posyT,mouseX,mouseY)<20)&&(mouseIsPressed)){
  posxT = mouseX;
  posyT = mouseY;


  }
  fill(210,50,60);
  push();
  translate(posxT,posyT);
  rotate(angleT);
  triangle(-30,-30,70,-30,-30,70);
  fill(200,45,65);
  noStroke();
  circle(0,0,20);
  pop();
}

//Programación paralelogramo
function pintarParalelogramo(){
  
  if((dist(posxP,posyP,mouseX,mouseY)<20) && (mouseIsPressed)){  
  posxP = mouseX;
  posyP = mouseY;

  }
  fill(80,20,170);
  push();
  translate(posxP,posyP);
  rotate(angleP);
  quad(-50,-25,0,-25,50,25,0,25);
  fill(70,20,190);
  noStroke();
  circle(0,0,20);
  pop();
}


function setup(){ 
  createCanvas(400,300);
}

function draw(){  
  background(215,120,63);
  pintarTriangulo();
  pintarParalelogramo();
}