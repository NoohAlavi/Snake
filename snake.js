class Snake
{
  static position = {
    x: 0,
    y: 0
  };
  static width = 20;
  static height = 20;
  
  static update()
  {
  
  }
  
  static draw()
  {
    ctx.fillRect(Snake.position.x, Snake.position.y, Snake.width, Snake.height);
  }
}
