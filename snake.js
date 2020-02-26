class Snake
{
  position = {
    x: 0,
    y: 0
  };
  
  size = 20;

  speed = 5;
  xSpeed = 1;
  ySpeed = 0;

  isDead = false;
  
  update()
  {
    if (!this.isDead)
    {
      this.position.x += this.xSpeed * this.speed;
      this.position.y += this.ySpeed * this.speed;
      
      if (this.position.x +this.size > cvs.width || this.position.x < 0 || this.position.y + this.size > cvs.height || this.position.y < 0)
      {
        this.isDead = true;        
      }
    }
  }
  
  draw()
  {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  static setDir(x, y)
  {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}
