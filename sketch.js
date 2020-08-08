let resolution = 15;

function easyMode() {
  resolution = 20
  setup()
  locationFood()
}
function normalMode() {
  resolution = 15
  setup()
  locationFood()
  
}
function hardMode() {
  resolution = 10
  setup()
  locationFood()
}
function impossobleMode() {
  resolution = 5
  setup()
  locationFood()
}

let framePone;
var FrameSpeedNumber;

function submitTheSpeed() {
  framePone = document.getElementById('NumberForTheSpeed').value
  FrameSpeedNumber = parseInt(framePone)
//   if(FrameSpeedNumber == isNaN || FrameSpeedNumber == 0 ) {
//       FrameSpeedNumber = 1;
    
//   } 
  
  console.log('Set')
  console.log('SPEED ' +FrameSpeedNumber)
  console.log('---------------')
 
  setup()
    
}


let loopity = false;

let snake;

//let score = 0;
let food;
let wid;
let heig;
let TouchedParts;


//Setups the SnakeGame
function setup() {

  console.log('INSIDE HERE: ' + FrameSpeedNumber)
  deaddd = true;
  createCanvas(470, 470);
  wid = floor(width/resolution);
  heig = floor(height/resolution);
   if(FrameSpeedNumber == isNaN || FrameSpeedNumber == 0 ) {
      FrameSpeedNumber = 1;
    
  }
  frameRate(FrameSpeedNumber);
  snake = new Snake(); //CASE SENSITIVE
  locationFood();
  
  document.getElementById('retryButton').className = 'retryhidden';
   document.getElementById('retryButton').innerHTML = '';
  TouchedParts = false;
  draw()
  locationFood()
  snake.update();
  snake.show();
  new Snake()
  loopity = false;
  
}

function locationFood() {
  let x = floor(random(wid));
  let y = floor(random(heig));
  food = createVector(x, y);
}
var deaddd = true;
//Controls for when you press the arrow keys
function keyPressed() {    
  if(deaddd == true) {
   if (keyCode === LEFT_ARROW && snake.xdir != 1 && snake.change != true) {
    snake.setDir(-1, 0);  
  } else if(keyCode === RIGHT_ARROW && snake.xdir != -1 && snake.change != true) {
    snake.setDir(1, 0);  
  } else if(keyCode === DOWN_ARROW && snake.ydir != -1 && snake.change != true) {
    snake.setDir(0, 1);  
  } else if(keyCode === UP_ARROW && snake.ydir != 1 && snake.change != true) {
    snake.setDir(0,-1);  
  } else if (keyCode == '') {
     snake.grow(); 
  } 
  } else {
     return ; 
  }
}

 let numbberr = 0;

let plzwork = false; 
//Draws the snake and updates its location


function draw() {
  scale(resolution);
  background('#383838');

  if(snake.eat(food)) {
     locationFood();
  }
  snake.update();
  snake.show();
   var apple = true;
  
  
  if (snake.endGame()) {
    
    
    background('#212121');
    apple = false;
    document.getElementById('retryButton').className = 'retryButtonShown';
    document.getElementById('retryButton').innerHTML = 'Retry';
    deaddd = false;
    numbberr = 0;
    
//     if(TouchedParts == true) {
//        background('#5F5F5F');
    

      
//     }

    
  }
  //apple
 
  if(apple == true) {
  fill('#FC0067');
  noStroke();
  rect(food.x, food.y, 1, 1);
  }
}




