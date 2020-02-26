window.onload = setup;
window.onkeydown = input;

var cvs, ctx;

function setup()
{ 
  cvs = document.getElementById("cvs");
  ctx = cvs.getContext("2d");
  loop();
}

function loop()
{
  update();
  draw();
  window.requestAnimationFrame(loop);
}

function draw()
{
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  Snake.draw();
}

function update()
{
  Snake.update();
}

function input(e)
{
  if (e.key == "ArrowRight" || e.key == "d")
  {
    Snake.setDir(1, 0); 
  } else if (e.key == "ArrowLeft" || e.key == "a")
  {
    Snake.setDir(-1 ,0); 
  }  else if (e.key == "ArrowUp" || e.key == "w") 
  {
    Snake.setDir(0, -1); 
  } else if (e.key == "ArrowDown" || e.key == "s")
  {
    Snake.setDir(0, 1); 
  }
}
