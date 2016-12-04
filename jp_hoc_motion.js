var h = 500;
var k = h/2;
var n = 100;



function draw(){
background(255, 213, 211);
stroke(255, 255, 255);
fill(187, 247, 188);
for(var i = 1; i < 2000; i++){
  var t = i*0.01;
  var r = k*cos((n+k*n/h)*t);
  ellipse(k+sin(t)*r,k+cos(t)*r,5,5);
}
n += 0.0005;
}
