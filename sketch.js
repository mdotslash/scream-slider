var analyzer;
var mic; 
var audioTriggerLow, audioTriggerHigh;

function preload() {
  // load image
  img = loadGif("img/radio.gif");
  img.pause();
}


function setup() {
  createCanvas(1200 , 800);
// create an audio input instance and start listening
  mic = new p5.AudioIn();
  mic.start();
  
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Record the value of the audio input "mic"
  analyzer.setInput(mic);
}

//load that image, my dude

function draw() {
  background(0,196,136);
  //image(img, 0, 0);
  if (img.loaded()) {
    image(img, 0, 0);
    audioTriggerLow();
    //img.pause();
  }
}

// this function connects the volume value to a gif frame value.

function audioTriggerLow() {
   if (img.loaded()) {
     // maps the audio amplitude values between 0 and .2 to gif frames
    var frame = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));
    img.frame(frame);
  }
}

