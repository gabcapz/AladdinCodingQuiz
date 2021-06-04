var bg,bg2,form,system,code,security;
var SPLASH;
var PLAY;
var gameState = SPLASH;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  splash = loadImage("splash.jpg");
  aladdinSound = loadSound("aladdinSound.mp3");
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  // aladdinSound.play();
  // aladdinSound.loop();
  
}

function draw() {
  // !aladdinSound.isPlaying();

//   if(gameState === SPLASH){
//   background(splash);

//   if (keyDown("ENTER")){
//   // gameState = PLAY;
//  } 
// } if (gameState === PLAY){
    background(bg);
    // if(!aladdinSound.isPlaying()){
    //   aladdinSound.play();
    // }

// aladdinSound.isPlaying();
    // aladdinSound.loop();

    // if(!aladdinSong.isPlaying){
    // aladdinSong.play();
    // }
    // aladdinSong.loop();
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// }
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear();
    background(bg2);
    // textStyle(BOLD);
    // fill("blue")
    // textSize(25);
    // text("CONGRATULATIONS!!", 500, 200)
    // text("YOU HAVE SOLVED THE RIDDLE! TREASURE UNLOCKED",230, 300);
  }

  drawSprites()
}