function usernameValidation(data) {
  return data.length >= 2;
}

function randomInt(range) {
  return Math.floor(Math.random() * range)
}

function pageReload() {
  document.location.reload();
}

const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const userName = document.querySelector("#user-name");
const userScore = document.querySelector("#user-score");
const userNumber = document.querySelector("#user-number");
const pcScore = document.querySelector("#pc-score");
const pcNumber = document.querySelector("#pc-number");

let userScoreInt = parseInt(userScore.innerHTML);
let pcScoreInt = parseInt(pcScore.innerHTML);
let userNumberInt = parseInt(userNumber.innerHTML);
let pcNumberInt = parseInt(pcNumber.innerHTML);
let isFinished = true;

while (!usernameValidation(userName.innerHTML)) {
  userName.innerHTML = prompt("Please, enter your username. It must be at least 2 characters");
}

btn.addEventListener("click", function() {
  if(isFinished) {
    isFinished = false;
    document.body.style.background = "white";
    btn.classList.add("btn__disabled");
    
    let timer = setInterval(() => {
      userNumber.innerHTML = randomInt(11);
      pcNumber.innerHTML = randomInt(11);
    }, 100);

    setTimeout(() => { 
      clearInterval(timer);

      setTimeout(() => {
        userNumberInt = parseInt(userNumber.innerHTML);
        pcNumberInt = parseInt(pcNumber.innerHTML);

        if (userNumberInt > pcNumberInt) {
          userScoreInt++;
          document.body.style.background = "linear-gradient(90deg, #5fefc7, transparent)";
        } else if (userNumberInt < pcNumberInt) {
          pcScoreInt++;
          document.body.style.background = "linear-gradient(-90deg, #5fefc7, transparent)";
        }

        userScore.innerHTML = userScoreInt;
        pcScore.innerHTML = pcScoreInt;
        btn.classList.remove("btn__disabled");

        if (userScoreInt >= 3 || pcScoreInt >= 3) {
          result.innerHTML = (userScoreInt >= 3) ? userName.innerHTML + " win!" : "Computer win!";
          userNumber.style.display = "none";
          pcNumber.style.display = "none";
          btn.innerHTML = "Try again";

          btn.addEventListener("click", pageReload);
          return;
        }

        isFinished = true;
      }, 1000);
    }, 2000);
  }
});