
var pink, purple;

class Snake {
  
  constructor() {
 
    this.body = [];
    this.body[0] = createVector(floor(wid/2), floor(heig/2));
    this.xdir = 0;
    this.ydir = 0; 
    this.len = 0;
    this.change = false;
  }
  
   setDir(x,y) {
    this.xdir = x;
    this.ydir = y;
    this.change = true;
     // if(TouchedParts == true) {
     //      this.xdir = 0;
     //      this.ydir = 0; 
     //   background('#5F5F5F');
     //    }
   }
  update() {
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
    this.change = false;
    if(TouchedParts == true) {
          this.xdir = 0;
          this.ydir = 0; 
       background('#232323');
        }
  }
  grow() {
     let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  
  eat(pos) {
    let x = this.body[this.body.length-1].x; 
    let y = this.body[this.body.length-1].y;
    if (x == pos.x && y == pos.y) {
       this.grow();
      return true;
    }
    return false;
  }
  show() {
    
    
 
    for (let i = 0; i < this.body.length; i++) {
      

    rect(this.body[i].x, this.body[i].y, 1, 1);
   
      
  }
    fill('#C900FF');
    noStroke();    //CONTROLS THE HEAD COLOR
    rect(this.body[this.body.length-1].x, this.body[this.body.length-1].y, 1, 1);
    
  }
  
   endGame() {
   let x = this.body[this.body.length-1].x; 
   let y = this.body[this.body.length-1].y; 
    if(x > wid-1||x < 0 || y > heig-1 || y < 0) {
      
       return true;  
    }
     for(let i = 0; i < this.body.length-1; i++) {
       let part = this.body[i];
       if(part.x == x && part.y == y) {
         console.log('TOUCHED PARTS')
           TouchedParts = true;    
            return true;
         
       }
     }
     return false; 
  }
  
  
  
}

function setGradient(purple, pink) {
       
    noFill();
  for(var y = 0; y < height; y++) {
    
      var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(purple, pink, inter);
    stroke(c)
    line(0, y, width, y);
    
  }
  
}

