

function preload(){
  // put preload code here
}



function setup() {
  // setup the workspace
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);

  // higher value = animation more fluid
  frameRate(24);



}

function draw() {

  // object position centered
  translate(width/2,height/2);
  // possible transformation (?)
  rotate(frameCount*2)



  // cos/sin function to generate the figure, they're mirrored
  line(width/5,0,(cos (frameCount*4)*width/5),(sin (frameCount*4)*width/5));
  line(width/-5,0,(cos (frameCount*4)*width/-5),(sin (frameCount*4)*width/-5));



  // color effects: blend two colors
  stroke(lerpColor(color('gold'), color('hotpink'), frameCount/60));

  strokeWeight(1);

  // to stop the animation and don't overlap colors
  if(frameCount == 90)
      noLoop();



}
