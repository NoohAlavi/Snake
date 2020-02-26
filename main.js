window.onload = setup;
window.onkeydown = input;

var cvs, ctx, snake;

function setup()
{ 
  cvs = document.getElementById("cvs");
  ctx = cvs.getContext("2d");
  snake = new Snake();
  loop();
}

function loop()
{
  if (!snake.isDead)
  {
    update();
    draw();
    window.requestAnimationFrame(loop);
  } else 
  {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, cvs.width, cvs.height); 
  }
}

function draw()
{
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  snake.draw();
}

function update()
{
  snake.update();
}

function input(e)
{
  if (e.key == "ArrowRight" || e.key == "d")
  {
    snake.setDir(1, 0); 
  } else if (e.key == "ArrowLeft" || e.key == "a")
  {
    snake.setDir(-1 ,0); 
  }  else if (e.key == "ArrowUp" || e.key == "w") 
  {
    snake.setDir(0, -1); 
  } else if (e.key == "ArrowDown" || e.key == "s")
  {
    snake.setDir(0, 1); 
  }
}
