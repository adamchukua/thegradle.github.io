function usernameValidation(data) {
  return data.length >= 2;
}

function randomInt(range) {
  return Math.floor(Math.random() * range)
}

function pageReload() {
  document.location.reload();
}

function getCardValue(cardNumber) {
  if (cardNumber >= 1 && cardNumber <= 4)
  {
    return 11;
  } else if (cardNumber >= 5 && cardNumber <= 8) {
    return 6;
  } else if (cardNumber >= 9 && cardNumber <= 12) {
    return 7;
  } else if (cardNumber >= 13 && cardNumber <= 16) {
    return 8;
  } else if (cardNumber >= 17 && cardNumber <= 20) {
    return 9;
  } else if (cardNumber >= 21 && cardNumber <= 24) {
    return 10;
  } else if (cardNumber >= 25 && cardNumber <= 28) {
    return 2;
  } else if (cardNumber >= 29 && cardNumber <= 32) {
    return 3;
  } else if (cardNumber >= 33 && cardNumber <= 36) {
    return 4;
  }
}

const result = document.querySelector(".result");
const btns = document.querySelectorAll(".btn");
const userName = document.querySelector("#user-name");
const userScore = document.querySelector("#user-score");
const userCard = document.querySelector("#user-card");
const pcScore = document.querySelector("#pc-score");
const pcCard = document.querySelector("#pc-card");
const tryNumbers = document.querySelectorAll(".try");

let tryNumberInt1 = parseInt(tryNumbers[0].innerHTML);
let tryNumberInt2 = parseInt(tryNumbers[1].innerHTML);
let userScoreInt = parseInt(userScore.innerHTML);
let pcScoreInt = parseInt(pcScore.innerHTML);
let isFinished = true;
let userCardNumber;
let pcCardNumber;

userName.innerHTML = getCookie("username");
console.log(getCookie("username"));

while (!usernameValidation(userName.innerHTML)) {
  userName.innerHTML = prompt("Please, enter your username. It must be at least 2 characters");
}

btns.forEach(btn => {
  btn.addEventListener("click", function() {
    if(isFinished) {
      isFinished = false;
      tryNumbers[0].innerHTML = ++tryNumberInt1;
      tryNumbers[1].innerHTML = ++tryNumberInt2;
  
      document.body.style.background = "white";
      btn.classList.add("btn__disabled");
      
      let timer = setInterval(() => {
        userCardNumber = parseInt(randomInt(36) + 1);
        pcCardNumber = parseInt(randomInt(36) + 1);
        
        userCard.src = "img/cards/card-" + userCardNumber + ".jpg";
        pcCard.src = "img/cards/card-" + pcCardNumber + ".jpg";
      }, 100);
  
      setTimeout(() => { 
        clearInterval(timer);
  
        userScoreInt += getCardValue(userCardNumber);
        pcScoreInt += getCardValue(pcCardNumber);
  
        setTimeout(() => {
          userScore.innerHTML = userScoreInt;
          pcScore.innerHTML = pcScoreInt;
  
          btn.classList.remove("btn__disabled");
  
          if (tryNumberInt1 >= 3) {
            result.innerHTML = (userScoreInt > pcScoreInt) ? userName.innerHTML + " win!" : "Computer win!";
            userCard.style.display = "none";
            pcCard.style.display = "none";
            btn.innerHTML = "Try again";
            document.body.style.background = "linear-gradient(90deg, #5fefc7, transparent)";
  
            btn.addEventListener("click", pageReload);
            return;
          }
  
          isFinished = true;
        }, 1000);
      }, 2000);
    }
  });
});