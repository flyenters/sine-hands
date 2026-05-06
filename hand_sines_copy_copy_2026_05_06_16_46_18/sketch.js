

let handPose;
let video;
let hands = [];
let connections;
let carrier; 
let modulator; 
let mySelect;
let waveform = 'sine'
let x = 'triangle'
let y = 'saw'
let granulator;
let carrierBaseFreq = 220;
let volslide;
let volslide2;
let sound;
var counter = 0;
let modMaxDepth = 150;
let modMinDepth = -150;
let pool;


function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
sound = loadSound('755514__omidzamani__pool-table-shoots.wav')
  
}





function setup() {
  createCanvas(640, 480);
 
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  handPose.detectStart(video, gotHands);

  connections = handPose.getConnections();
  
 
  
  mySelect = createSelect();
  mySelect.position(0, 100);

 
  mySelect.option(waveform);
  mySelect.option(x);
  mySelect.option(y);

  mySelect.selected(waveform);
  mySelect.changed(waveform2);
  
  
  carrier = new p5.Oscillator(waveform);
  carrier.amp(0); 
  carrier.freq(carrierBaseFreq); 
  carrier.start();
  
 
  modulator = new p5.Oscillator('sine');
  modulator.start();

  
  modulator.disconnect();
 
  sound.loop();
  
  volslide = createSlider(0, 1, 0.1, 0.01);
  volslide.position(10, 10);
  
  volslide2 = createSlider(0, 1, 0.1, 0.01); 
  volslide2.position(10, 70);
  
  osc3 = new p5.Oscillator(waveform)
    
  osc3.start()
  osc3.amp(.24)
  
   osc4 = new p5.Oscillator(waveform)
 
  osc4.start()
  osc4.amp(.24)
  
   osc5 = new p5.Oscillator(waveform)
  
  osc5.start()
  osc5.amp(.24)
  
  osc6 = new p5.Oscillator(waveform)
    
  osc6.start()
  osc6.amp(.24)
  
   osc7 = new p5.Oscillator(waveform)
    
  osc7.start()
  osc7.amp(.24)
  
   osc8 = new p5.Oscillator(waveform)
    
  osc8.start()
  osc8.amp(.24)
  
   osc9 = new p5.Oscillator(waveform)
    
  osc9.start()
  osc9.amp(.24)
  
  osc10 = new p5.Oscillator(waveform)
  
   
  osc10.start()
  osc10.amp(.24)
  
  
  fft = new p5.FFT();
 
}

  

function draw() {
  
  image(video, 0, 0, width, height);
  
  
   let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 255);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    ellipse(x, height, width / spectrum.length, h )
  }
  
  

  
  
  
  
  
  
  let vol = volslide.value();
  osc3.amp(vol); 
   osc4.amp(vol);
   osc5.amp(vol);
   osc6.amp(vol);
   osc7.amp(vol);
   osc8.amp(vol);
   osc9.amp(vol);
   osc10.amp(vol);

 let vol2 = volslide2.value();
 sound.amp(vol2); 
  

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
      
  
   
     sound.rate(hand.thumb_cmc.y /400);

    
  
    }
  
  carrier.freq(hand.thumb_tip.x * 2)
  modulator.freq(hand.thumb_cmc.x * 2)
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


    function keyPressed() {
  if (key === 'c') {

   
    
    
  carrier.freq(modulator)
    osc3.freq(osc4)
    osc5.freq(osc6)
    osc7.freq(osc8)
    osc9.freq(osc10)
   
  }
    
   if (key =='d'){
 sound.loop();
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
     
     

    }
  }  }
    
    
    }





  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      square(keypoint.x, keypoint.y, 5);
    
    }
    
    
    
       
    }



function waveform2() {
  waveform = mySelect.value();
  osc3.setType(waveform);
  osc4.setType(waveform);
  osc5.setType(waveform);
  osc6.setType(waveform);
  osc7.setType(waveform);
  osc8.setType(waveform);
  osc9.setType(waveform);
  osc10.setType(waveform);
  
}

// Callback function for when handPose outputs data
function gotHands(results) {
 
  // save the output to the hands variable
  hands = results;
 // console.log(hands)
    // osc1.freq("pinky_finger_tip")
  

}
