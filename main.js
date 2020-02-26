window.onload = setup;
window.onkeydown = input;

var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

function setup()
{ 
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
