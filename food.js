function Food() {
  this.x = scl * Math.floor(Math.random() * (width / scl));
  this.y = scl * Math.floor(Math.random() * (height / scl));
  while (grid[this.x / scl][this.y / scl]) {
      this.x = scl * Math.floor(Math.random() * (width / scl));
      this.y = scl * Math.floor(Math.random() * (height / scl));
  }
  
  this.show = function() {
    fill('#fae');
    rect(this.x, this.y, scl, scl);
  }
  //need to not let it spawn on the snake
  this.regenerate = function() {
    this.x = scl * Math.floor(Math.random() * (width / scl));
    this.y = scl * Math.floor(Math.random() * (height / scl));
    while (grid[this.x / scl][this.y / scl]) {
      this.x = scl * Math.floor(Math.random() * (width / scl));
      this.y = scl * Math.floor(Math.random() * (height / scl));
    }
  }
}