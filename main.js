window.onload = setup;
window.onkeydown = input;

function setup()
{
  var ctx = cvs.getContext("2d");
  
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
  Snake.draw();
}

function update()
{

}

function input(e)
{

}
