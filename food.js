class Food
{
  constructor (x, y)
  {
    this.position = {
      x: x,
      y: y
    };
    this.size = 20;
  }
  
  draw()
  {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }
  
  isCollidingWith(snake)
  {
    return (snake.position.x + snake.width > this.position.x && snake.position.y + snake.height > this.position.y && this.position.x + this.size > snake.position.x && this.position.y + this.size > snake.position.y);
  }
}
