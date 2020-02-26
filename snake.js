class Snake
{
  static position = {
    x: 0,
    y: 0
  };
  
  static size = 20;

  static speed = 5;
  static xSpeed = 1;
  static ySpeed = 0;

  static isDead = false;
  
  static update()
  {
    if (!Snake.isDead)
    {
      Snake.position.x += Snake.xSpeed * Snake.speed;
      Snake.position.y += Snake.ySpeed * Snake.speed;
      
      if (Snake.position.x + Snake.width > cvs.width || Snake.position.x < 0 || Snake.position.y + Snake.height > cvs.height || Snake.position.y < 0)
      {
        Snake.isDead = true;        
      }
    }
  }
  
  static draw()
  {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(Snake.position.x, Snake.position.y, Snake.size, Snake.size);
  }

  static setDir(x, y)
  {
    Snake.xSpeed = x;
    Snake.ySpeed = y;
  }
}
