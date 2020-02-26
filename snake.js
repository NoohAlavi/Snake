class Snake
{
  static position = {
    x: 0,
    y: 0
  };
  static size = 20;
  static xSpeed = 1;
  static ySpeed = 0;
  
  static update()
  {
    Snake.position.x += Snake.xSpeed * Snake.size;
    Snake.position.y += Snake.ySpeed * Snake.size;
  }
  
  static draw()
  {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(Snake.position.x, Snake.position.y, Snake.size, Snake.size);
  }
}
