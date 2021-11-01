// Validate and set name

var username = prompt("Enter your username:");

while (!username)
{
  username = prompt("Please, enter your username:");
}

var result = document.querySelector(".result");
var btn = document.querySelector(".btn");
var user_name = document.querySelector("#user-name");
var user_score = document.querySelector("#user-score");
var user_number = document.querySelector("#user-number");
var pc_score = document.querySelector("#pc-score");
var pc_number = document.querySelector("#pc-number");

var user_score_i = parseInt(user_score.innerHTML);
var pc_score_i = parseInt(pc_score.innerHTML);
var user_number_i = parseInt(user_number.innerHTML);
var pc_number_i = parseInt(pc_number.innerHTML);
user_name.innerHTML = username;

// Game

function Generate()
{
  btn.removeAttribute("onclick");

  document.body.style.background = "white";
  btn.classList.add("btn__disabled");
  
  var timer = setInterval(() => 
  {
    user_number.innerHTML = Math.floor(Math.random() * 11);
    pc_number.innerHTML = Math.floor(Math.random() * 11);
  }, 100);

  setTimeout(() => { 
    clearInterval(timer);

    setTimeout(() => {
      user_number_i = parseInt(user_number.innerHTML);
      pc_number_i = parseInt(pc_number.innerHTML);

      if (user_number_i > pc_number_i)
      {
        user_score_i++;
        document.body.style.background = "linear-gradient(90deg, #5fefc7, transparent)";
      }
      else if (user_number_i < pc_number_i)
      {
        pc_score_i++;
        document.body.style.background = "linear-gradient(-90deg, #5fefc7, transparent)";
      }

      user_score.innerHTML = user_score_i;
      pc_score.innerHTML = pc_score_i;
      btn.classList.remove("btn__disabled");

      if (user_score_i >= 3 || pc_score_i >= 3)
      {
        result.innerHTML = (user_score_i >= 3) ? user_name.innerHTML + " win!" : "Computer win!";
        user_number.style.display = "none";
        pc_number.style.display = "none";
        btn.innerHTML = "Try again";
        btn.setAttribute("onclick", "document.location.reload();")
        return;
      }

      btn.setAttribute("onclick", "Generate();")
    }, 1000);
  }, 2000);
}