let spritesheetImg;
let spritedata;

let animation = [];
let animationSpeed;

let horse;

let trees = [];
let treeImg;

let ground;
let gravity = 0.6;

let rastas = [];
let rastaImg;

let cakeImg;
let cake;

let score = 0;
let maxScore = 0;
let scoreP;
let maxScoreP;

let restartB;
let freeRoamB;
let freeRoam = false;

let initialText = "";
let giftText = "";

let start = false;

let alpha = 150;

let startB;

let audioC; 
let audioD;
let won = false;
let caught = false;

let horseSize;
let horseYSpeed;
let treeHeight;
let treeWidth;




function preload() {
  spritedata = loadJSON('Assets/horse.json');
  
  spritesheetImg = loadImage('Assets/horse.png');

  treeImg = loadImage('Assets/tree.png');

  cakeImg = loadImage('Assets/cake.jpeg');

  rastaImg = loadImage('Assets/road.jpeg');

  // finding correct width
  if(windowWidth <= 500){
    horseSize = 70;
    horseYSpeed = 16;
    treeHeight = 60;
    treeWidth = 30;
    animationSpeed = 0.22;
  }
  else if(windowWidth <= 900){
    horseSize = 90;
    horseYSpeed = 17;
    treeHeight = 80;
    treeWidth = 40;
    animationSpeed = 0.4;
  } else {
    horseSize = 110;
    horseYSpeed = 18;
    treeHeight = 90;
    treeWidth = 40;
    animationSpeed = 0.4;
  }
  
}




function setup() {
  //creating canvas
  let cnv = createCanvas(windowWidth, windowHeight);
  
  // to center canvas along x
  cnv.parent("cnv-div");
  
  //setting ground level
  ground = height * 3 / 5;

  //cutting out images from the larger image spritesheet
  //modifiedhorse.png
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++)
  {
    let pos = frames[i].position;
    let img = spritesheetImg.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  //setting one tree
  trees.push(
    new Tree(width + random(width))
  );

  //creating new animated horse object
  horse = new AnimatedHorse(
    animation, horseSize);

  //click the canvas to make the horse jump
  cnv.mouseReleased(() => {
    horse.jump();
    return false;
  });

  cnv.touchEnded(() => {
    horse.jump();
    return false;
  });

  //score
  scoreP = document.getElementById("scoreP");
  maxScoreP = document.getElementById("maxScoreP");

  scoreP.innerHTML = 'Current Score: ' + parseInt(score);
  maxScoreP.innerHTML = "High Score : " + parseInt(maxScore);

  //Restart button
  controllerD = document.getElementById("controllerDiv");
  
 // Start the Show
  startD = document.getElementById("startDiv");
  
  audioD = document.getElementById("audioDiv");
  
  audioC = document.getElementById('audioC');

  
  //creating new cake object
  cake = new Cake();
  
  background(0);
  
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont('Courgette');
  fill(255);
  
  initialText = "THE HORSE TREE GAME";
  text(initialText, width/2, height/2);
  
  giftText = "Tap to Jump\n😁";

  fill(0);
  textSize(30);
  noLoop();
}



function draw() {
  if(start) {
    if(frameCount <= 180) {
      
      background(0);
      push();
      textSize(25);
      fill(255, alpha);
      text(giftText, width/2, height/2);
      pop();
      
      if(frameCount <= 120){
        alpha +=2;
      }else{
        alpha -= 5;
      }
    } 
    else
    {
      background(190, 195, 250);

      //score in paragraph
      score = score + 0.1;
    
      //rastas background
      if (rastas.length < 2) {
        rastas.push(new RastaMaker(rastas.length * width));
      }

      for (let i = 0; i < rastas.length; i++) {
        rastas[i].show();
        rastas[i].update();
      }
      
      for (let i = rastas.length - 1; i >= 0; i--)
      {
        if (rastas[i].offScreen()) {
          rastas.splice(i, 1);
        }
      }


      //the protagonist, horse
      horse.show();
      horse.animate();
      horse.update();

      //obstacles
      if(trees.length <= 2) {
        trees.push(
          new Tree(random(width, 1.7 * width))
        );
      }

      for (let i = 0; i < trees.length; i++)
      {
        trees[i].update();
        trees[i].show();
      }
      
      for (let i = trees.length - 1; i >= 0; i--)
      {
        if (trees[i].offScreen()) {
          trees.splice(i, 1);
        }
      }

      // Cake and game winning moment
      cake.show();
      cake.update();
      if (cake.check()) {
        showGameWon();
      }
      
      /*free roam logic*/
      if(!freeRoam) {
        checkAllCollision();
      }
      
      let s="";
      if(won) {
        s="Winner: ";
        updateMaxScore();
      }
      else if(freeRoam) {
        s="Free Roam: ";
      }
      else if(caught) {
        s="Caught: ";
        updateMaxScore();
      }
      else {
        s="Current score: ";
      }
      scoreP.innerHTML = s + parseInt(score);
    }
  }
}



function keyPressed() {
  if (keyCode === UP_ARROW) {
    horse.jump();
  }
}




function showGameWon(){
  text('Winner!', width / 2, height / 2 - 30);
  
  won = true;
 
  noLoop();
}



function checkAllCollision() {
  for (let i = 0; i < trees.length; i++)
  {
    if (checkCollision(horse, trees[i]) == true) {
      
      caught= true;
      
      noLoop();
      return;
    }
  }
}



function checkCollision(h, t) {
  if (h.x + h.w >= t.x && h.x <= t.x + t.w) {
    if (h.y <= t.y + t.h && h.y + h.h >= t.y) {
      return true;
    }
  }
  return false;
}



function updateMaxScore() {
  if (maxScore < score) {
    maxScore = score;
  }
  maxScoreP.innerHTML = 'High Score: ' + parseInt(maxScore);
}



/*Mouse Action Restart Button*/
function restart() {
  horse.restart();
  
  trees.splice(0);

  cake.restart();

  won = false;
  caught = false;
  score = 0;

  loop();
}



/*Mouse Action Free Roam Button*/
function freelyRoam() {
  freeRoam = freeRoam ? false : true;
}



/*Mouse Action Start Show*/
function startShow() {
  start = start ? false : true;
  startD.style.visibility = "hidden";
  controllerD.style.visibility = "visible";
  audioD.style.visibility = "visible";
  audioC.play();
  loop();
}