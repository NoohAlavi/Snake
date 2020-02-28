window.onload = setup;
window.onkeydown = input;

var cvs, ctx, snake, foodArray, score, body;

function setup()
{
  cvs = document.getElementById("cvs");
  ctx = cvs.getContext("2d");
  ctx.fillStyle = "#ffffff";
  foodArray = [];
  body = [new Snake(0, 0)];
  score = 0;
  spawnFood();
  window.setInterval(loop, 100);
}

function loop()
{
  if (!body[0].isDead)
  {
    draw();
    update();
    //window.requestAnimationFrame(loop);
  } else
  {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
  }
}

function draw()
{
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  
  for (var i = 0; i < foodArray.length; i++)
  {
    foodArray[i].draw();
  }
  body[0].draw();
  
  for (var i = 0; i < body.length; i++)
  {
    body[i].draw();
  }
  
  
  ctx.fillStyle = "#ffffff";
  ctx.font = "26px sans-serif";
  ctx.fillText("Score: " + score, cvs.width - 120, 40);
}

function update()
{
  for (var i = 0; i < foodArray.length; i++)
  {
    if (foodArray[i].isCollidingWith(body[0]))
    {
      foodArray.splice(i, 1);
      spawnFood();
      score++;
      body[0].width += 20;
      body[0].speed ++;
      body.push(new Snake(body[0].position.x, body[0].position.y));
    }
  }
  
  
  for (var i = body.length; i > 0; i--)
  {
    if (i < body.length)
    {
      body[i].position = body[i - 1].position;
    }
  }
  body[0].update();
}

function input(e)
{
  if (e.key == "ArrowRight" || e.key == "d")
  {
    body[0].setDir(1, 0);
  } else if (e.key == "ArrowLeft" || e.key == "a")
  {
    body[0].setDir(-1 ,0);
  }  else if (e.key == "ArrowUp" || e.key == "w")
  {
    body[0].setDir(0, -1);
  } else if (e.key == "ArrowDown" || e.key == "s")
  {
    body[0].setDir(0, 1);
  }
}

function randRange(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawnFood()
{
  foodArray.push(new Food(randRange(0, cvs.width - 20), randRange(0, cvs.height - 20)));
}