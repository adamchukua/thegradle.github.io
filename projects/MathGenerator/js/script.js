var btn = document.getElementById("btn");

btn.addEventListener("click", Start);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function GetExpression()
{
  var valid = false;
  
  while(!valid) {
    var a = getRandomInt(0, 15);
    var b = getRandomInt(0, 15);
    var symbol = (getRandomInt(0, 2) == 1) ? "+" : "-";

    if(symbol == "-") {
      if(a - b > 0) {
        valid = true;
      }
    }
    else {
      valid = true;
    }
  }

  return a + " " + symbol + " " + b
}

function Start() {
  document.getElementById("title").style.display = "none";
  document.getElementById("math-box").style.display = "flex";
  btn.innerHTML = "Ще!";

  for(var i = 1; i <= 6; i++) {
    document.getElementById("math-" + i).innerHTML = GetExpression();
  }
}