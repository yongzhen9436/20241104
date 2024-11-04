let font;
let points = [];
let r = 10;
let angle = 0;

function preload() {
  font = loadFont("NotoSansTC-VariableFont_wght.ttf");
}

function setup() {
  createCanvas(windowWidth, windowWidth,WEBGL);
  points = font.textToPoints("happy", 100, 200, 200, {
    sampleFactor: 0.3
  });
  angleMode(DEGREES);
}

function draw() {
  background("#C4E1FF"); // Set the background color for the second part
  translate(-width/2,-height/2);
  noFill()
  strokeWeight(2)
  let rect_width=50;
  let bc_w=50;
  let sc_w=25;

  let scaleFactor = map(mouseY,0,height,1,2);
  rectMode(CENTER)
  for(let j =0;j <30;j++){
  for(let x =0;x <width;x+=rect_width){
    ellipse(x,25+50*j ,bc_w* scaleFactor);
    rect(x,25+50*j ,rect_width* scaleFactor);
    ellipse(25+x+rect_width,50+50* j ,sc_w* scaleFactor);
  }
}

translate(width/2,height/2);
rotateX(angle% 360);
for(let i =0;i < points.length-1; i++){
  fill("#003D79")
  ellipse(points[i].x+r*sin(angle+1*25),points[i].y +r*sin(angle+1*25),10);
  stroke("#CECEFF")
  line(points[i].x+r*sin(angle +i*25),points[i].y +r*sin(angle+1*25),points[i+1].x,points[i+1].y)
}
angle+=10;
}
