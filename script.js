//Global Variables

// Game Settings
let pattern = [];
let progress = 0; 
let gamePlaying = false;
let guessCounter = 0;
let numButtons = 4;
let hardmode = false;
let mistakeMode = false;
let strikes = 0;
let patternLength = 8;
let colorText = false;

// Clue Times
let clueHoldTime = 1000;
const cluePauseTime = 333;     //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Sound Settings
let tonePlaying = false;
let volume = 0.5;              //must be between 0.0 and 1.0


function startGame(){
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  updateScore();
  generateRandomPattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost. Your score is: " + progress);
}

function winGame(){
  stopGame();
  alert("Game Over. You won! Your score is: " + progress);
}

// Sound Synthesis Functions
const freqMap = {
  1: 240,
  2: 280,
  3: 320,
  4: 360,
  5: 400,
  6: 440,
  7: 480,
  8: 520
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    if(hardmode){
      clueHoldTime *= 0.95;
    }
  }
}

function guess(btn){
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        progress++;
        updateScore();
        winGame();
      }else{
        progress++;
        playClueSequence();
        updateScore();
      }
    }else{
      guessCounter++;
    }
  }else{
    if(mistakeMode){
        strikes++;
        if(strikes === 3){
            document.getElementById("numTries").innerHTML = "Remaining Tries: " + (3 - strikes);
            loseGame();
        }
        else{
          alert("Incorrect Sequence. " + (3 - strikes) + " tries remaining.")
          document.getElementById("numTries").innerHTML = "Remaining Tries: " + (3 - strikes);
          playClueSequence();
        }
    }
    else{
      loseGame();
    }
  }
} 

function generateRandomPattern(){
    for(let i = 0; i < patternLength; i++){
      pattern[i] = Math.floor(Math.random() * (numButtons) + 1);
    }
  console.log(pattern);
}

function updateScore(){
    document.getElementById("score").innerHTML = "Score: " + progress;
}

function addButton(){
    if(gamePlaying){
      return;
    }
    if(numButtons === 8){
      alert("Maximum number of buttons reached.")
      return;
    }
    numButtons += 1;
    document.getElementById("button" + numButtons).classList.remove("hidden");
}

function removeButton(){
    if(gamePlaying){
      return;
    }
    if(numButtons == 2){
      alert("You cannot have less than two buttons.")
      return;
    }
    document.getElementById("button" + numButtons).classList.add("hidden");
    numButtons -= 1;
}

function updateHardmode(){
    if(gamePlaying){
      return;
    }
    hardmode = !hardmode;
    if(hardmode){
        document.getElementById("hardmode").innerHTML = "Disable Hard Mode";
        document.getElementById("hardmode").style.backgroundColor = "red";
    }
    else{
        document.getElementById("hardmode").innerHTML = "Enable Hard Mode";
        document.getElementById("hardmode").style.backgroundColor = "";
    }
}

function updateMistakemode(){
    if(gamePlaying){
      return;
    }
   mistakeMode = !mistakeMode;
   if(mistakeMode){
     document.getElementById("strikesMode").innerHTML = "Disable Mistakes";
    document.getElementById("strikesMode").style.backgroundColor = "red";
     document.getElementById("numTries").innerHTML = "Remaining Tries: 3";
   }
   else{
     document.getElementById("strikesMode").innerHTML = "Enable Mistakes";
     document.getElementById("strikesMode").style.backgroundColor = "";
     document.getElementById("numTries").innerHTML = "Remaining Tries: 1";
   }
}

function updateColorText(){
  if(gamePlaying){
    return;
  }
  colorText = !colorText;
  if(colorText){
      document.getElementById("colorTextBtn").innerHTML = "Disable Color Text";
      document.getElementById("colorTextBtn").style.backgroundColor = "red";
      let colorButtons = document.getElementsByClassName("colorName");
      for(let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.display = "block";
      }
  }
  else{
      document.getElementById("colorTextBtn").innerHTML = "Enable Color Text";
      document.getElementById("colorTextBtn").style.backgroundColor = "";
      let colorButtons = document.getElementsByClassName("colorName");
      for(let i = 0; i < colorButtons.length; i++){
        colorButtons[i].style.display = "none";
      }
  }
  
}

let patternSlider = document.getElementById("patternRange");
patternSlider.oninput = function(){
    if(gamePlaying){
      return;
    }  
    patternLength = patternSlider.value;
    document.getElementById("patternLengthValue").innerHTML = "Pattern Length: " + patternLength;
}