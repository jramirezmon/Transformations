var x = 100;
var y = 100;

function setup() {
  createCanvas(200,200);
}

function draw() {
  background(0);
  fill(255);
  ellipse(x,y,50,50);
}
//var sketch1 = function( p ) {
//    p.setup = function() {
//        p.createCanvas(400, 400);
//    };
//};
//var myp5_1 = new p5(sketch1, 'mysketch_id');
//var myp5 = new p5( function( sketch ) {
//
//    var x = 100; 
//    var y = 100;
//  
//    sketch.setup = function() {
//      sketch.createCanvas(200, 200);
//    };
//  
//    sketch.draw = function() {
//      sketch.background(0);
//      sketch.fill(255);
//      sketch.rect(x,y,50,50);
//    };
//  });