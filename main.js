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

}
