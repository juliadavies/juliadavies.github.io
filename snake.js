function Snake() {
  this.x = scl;
  this.y = 0.0;
  this.size = 1;
  this.xspeed = 1;
  this.yspeed = 0;
  this.nextxspeed = 1;
  this.nextyspeed = 0;
  this.tail = [new TailBlock(0, 0)];
  this.justAte = false;
  for (let i = 0; i <= (height / scl); i++) {
    for (let j = 0; j <= (width / scl); j++) {
      if (j === 0) {
        grid.push([]);
      }
      grid[i].push(false); 
    }
  }
  grid[1][0] = true;
  grid[0][0] = true;
  
  this.dir = function(x, y) {
    if (this.xspeed != this.nextxspeed || this.yspeed != this.nextyspeed) {
      return; 
    }
    if (this.xspeed !== -x) {
      this.nextxspeed = x;
    }
    if (this.yspeed !== -y) {
      this.nextyspeed = y;
    }
  }
  
  this.update = function() {
    this.xspeed = this.nextxspeed;
    this.yspeed = this.nextyspeed;
    let newx = this.x + this.xspeed*scl;
    let newy = this.y + this.yspeed*scl;
    if (newx < 0 || newx > width - scl || newy < 0  || newy > height - scl) {
       gameOver = true;
       return;
    }
    append(this.tail, new TailBlock(this.x, this.y));
    this.x = newx;
    this.y = newy;
    if (this.justAte) {
      this.justAte = false; 
    }
    else {
      grid[this.tail[0].x / scl][this.tail[0].y / scl] = false;
      this.tail.shift();
    }
    if (grid[newx / scl][newy / scl]) {
      gameOver = true;
      return;
    }
    grid[newx / scl][newy / scl] = true;
    if (this.x === food.x && this.y === food.y) {
      this.size = this.size + 1;
      this.justAte = true;
      food.regenerate();
    }
    else {
      this.justAte = false; 
    }
  }
  
  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }
}