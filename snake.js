class Snake
{
  constructor (x, y)
  {
    this.position = {
      x: x,
      y: y
    };
    
    this.width = 20;
    this.height = 20;

    this.speed = 20;
    this.xSpeed = 1;
    this.ySpeed = 0;

    this.isDead = false;
  }
  
  update()
  {
    if (!this.isDead)
    {
      this.position.x += this.xSpeed * this.speed;
      this.position.y += this.ySpeed * this.speed;
      
      if (this.position.x + this.width > cvs.width || this.position.x < 0 || this.position.y + this.height > cvs.height || this.position.y < 0)
      {
        this.isDead = true;
      }
    }
  }
  
  draw()
  {
    ctx.fillStyle = "#00ff00";
    if (this.xSpeed == 1 || this.xSpeed == -1)
    {
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    } else
    {
      ctx.fillRect(this.position.x, this.position.y, this.height, this.width);
    }
  }

  setDir(x, y)
  {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}
