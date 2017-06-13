var analyzer;
var mic;
var audioTriggerLow, audioTriggerHigh;

function preload() {
  // load image
  img = loadGif("img/slider.gif");
  img.pause();
}


function setup() {
  createCanvas(800 , 800);
// create an audio input instance and start listening
  mic = new p5.AudioIn();
  mic.start();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Record the value of the audio input "mic"
  analyzer.setInput(mic);
}

//load that volume slider image, my dudes

function draw() {
  background(255);
  //image(img, 0, 0);
  if (img.loaded()) {
    image(img, 40, 40);
    audioTriggerLow();
    //img.pause();
  }
}

// this function connects the volume of the microphone to a gif frame.

function audioTriggerLow() {
   if (img.loaded()) {
     // maps the audio amplitude values between 0 and .2 to gif frames
    var frame = int(map(analyzer.getLevel(), 0, .2, 0, .5*img.totalFrames()));
    img.frame(frame);
  }
}
