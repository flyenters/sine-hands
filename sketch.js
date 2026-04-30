var mode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  if (mode == 1) {
    splash.hide();
    
  
    
    
    
    
    
    
let handPose;
let video;
let hands = [];
let connections;
let carrier; 
let modulator; 
let mySelect;
let waveform3 = 'sine'
let x = 'triangle'
let y = 'saw'
let granulator;
let carrierBaseFreq = 220;


function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  // Get the skeletal connection information
  connections = handPose.getConnections();
  
  
  
  mySelect = createSelect();
  mySelect.position(0, 100);

 
  mySelect.option(waveform3);
  mySelect.option(x);
  mySelect.option(y);

  mySelect.selected(waveform3);
  mySelect.changed(waveform2);
  
  
  carrier = new p5.Oscillator(waveform);
  carrier.amp(0); 
  carrier.freq(carrierBaseFreq); 
  carrier.start();
  
 
  modulator = new p5.Oscillator('sine');
  modulator.start();

  
  modulator.disconnect();
 
  
  

//   osc1 = new p5.Oscillator('sine')
 
//   osc1.start()
//   osc1.amp(.24)
  
//    osc2 = new p5.Oscillator('sine')
  
//   osc2.start()
//   osc2.amp(.24)
  
  osc3 = new p5.Oscillator(waveform3)
    
  osc3.start()
  osc3.amp(.24)
  
   osc4 = new p5.Oscillator(waveform3)
 
  osc4.start()
  osc4.amp(.24)
  
   osc5 = new p5.Oscillator(waveform3)
  
  osc5.start()
  osc5.amp(.24)
  
  osc6 = new p5.Oscillator(waveform3)
    
  osc6.start()
  osc6.amp(.24)
  
   osc7 = new p5.Oscillator(waveform3)
    
  osc7.start()
  osc7.amp(.24)
  
   osc8 = new p5.Oscillator(waveform3)
    
  osc8.start()
  osc8.amp(.24)
  
   osc9 = new p5.Oscillator(waveform3)
    
  osc9.start()
  osc9.amp(.24)
  
  osc10 = new p5.Oscillator(waveform3)
  
   
  osc10.start()
  osc10.amp(.24)
 
}

  

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);
  


  // Draw the skeletal connections
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = hand.keypoints[pointAIndex];
      let pointB = hand.keypoints[pointBIndex];
      stroke(255, 0, 0);
      strokeWeight(2);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      
//       console.log(hand.keypoints)
      
      
      // console.log(hand.thumb_tip.x)
      
      
      
        // osc1 = new p5.Oscillator('sine')
     
  // osc1.start()
  // osc1.amp(.25)
  
  
//   osc2 = new p5.Oscillator('square')
//         // osc2.freq("thumb_tip")
//   osc2.start()
//   osc2.amp(.24)
  carrier.freq(hand.thumb_tip.x * 2)
  modulator.freq(hand.thumb_tip.y * 2)
  osc3.freq(hand.index_finger_tip.x * 2)
  osc4.freq(hand.index_finger_tip.y * 2)
  osc5.freq(hand.middle_finger_tip.x * 2)   
  osc6.freq(hand.middle_finger_tip.y * 2)   
  osc7.freq(hand.pinky_finger_tip.x * 2) 
  osc8.freq(hand.pinky_finger_tip.y * 2)
  osc9.freq(hand.ring_finger_tip.x * 2)
  osc10.freq(hand.ring_finger_tip.y * 2)
      

      
    }
  }

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    

        

//       
    }
  }
}


function waveform2() {
  waveform = mySelect.value();
  osc3.setType(waveform3);
  osc4.setType(waveform3);
  osc5.setType(waveform3);
  osc6.setType(waveform3);
  osc7.setType(waveform3);
  osc8.setType(waveform3);
  osc9.setType(waveform3);
  osc10.setType(waveform3);
  console.log("Waveform changed to: " + waveform3);
}

// Callback function for when handPose outputs data
function gotHands(results) {
 
  // save the output to the hands variable
  hands = results;
 // console.log(hands)
    // osc1.freq("pinky_finger_tip")
  

}

    
    
    
   
  }
}


