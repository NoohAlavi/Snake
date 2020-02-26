class Food
{
  constructor (x, y)
  {
    this.x = x;
    this.y = y;
    this.size = 20;
  }
  
  draw()
  {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
