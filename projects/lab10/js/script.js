function usernameValidation(data) {
  return data.length >= 2 && data.length <= 20;
}

function getSlotNumber(data) {
  return data.split("").reverse().join("").substr(4, 1);
}

function randomInt(range) {
  return Math.floor(Math.random() * range)
}

function pageReload() {
  document.location.reload();
}

const username = document.querySelector(".control--name");
const tryNumber = document.querySelector("#try");
const line1 = document.querySelectorAll(".line-1");
const line2 = document.querySelectorAll(".line-2");
const line3 = document.querySelectorAll(".line-3");
const game = document.querySelector(".game");
const result = document.querySelector(".control--tryes");
const btn = document.querySelector(".control--btn");

let tryNumberInt = parseInt(tryNumber.innerHTML);
let isFinished = true;

while (!usernameValidation(username.innerHTML)) {
  username.innerHTML = prompt("Please, enter your username. It must be at least 2 and less than 20 characters");
}

btn.addEventListener("click", function() {
  if(isFinished) {
    isFinished = false;
    btn.setAttribute("disabled", "disabled");
    tryNumber.innerHTML = ++tryNumberInt;

    let timer1, timer2, timer3;

    timer1 = setInterval(() => {
      let firstEl = getSlotNumber(line1[0].src);
      let secondEl = getSlotNumber(line1[1].src);
      
      line1.forEach((element, i) => {
        setTimeout(() => {
          if (element == line1[0]) {
            let randEl = randomInt(9);
            while (randEl == getSlotNumber(line1[0].src) || randEl == getSlotNumber(line1[1].src) || randEl == getSlotNumber(line1[2].src)) {
              randEl = randomInt(9);
            }
            element.src = "img/slots/slot-" + randEl + ".jpg";
          } else if (element == line1[1]) {
            element.src = "img/slots/slot-" + firstEl + ".jpg";
          } else if (element == line1[2]) {
            element.src = "img/slots/slot-" + secondEl + ".jpg";
          }
        }, i * 50);
      });
    }, 150);

    setTimeout(() => {
      timer2 = setInterval(() => {
        let firstEl = getSlotNumber(line2[0].src);
        let secondEl = getSlotNumber(line2[1].src);

        line2.forEach((element, i) => {
          setTimeout(() => {
            if (element == line2[0]) {
              let randEl = randomInt(9);
              while (randEl == getSlotNumber(line2[0].src) || randEl == getSlotNumber(line2[1].src) || randEl == getSlotNumber(line2[2].src)) {
                randEl = randomInt(9);
              }
              console.log(randEl);
              element.src = "img/slots/slot-" + randEl + ".jpg";
            } else if (element == line2[1]) {
              element.src = "img/slots/slot-" + firstEl + ".jpg";
            } else if (element == line2[2]) {
              element.src = "img/slots/slot-" + secondEl + ".jpg";
            }
          }, i * 50);
        });
      }, 150);
    }, 1000);

    setTimeout(() => {
      timer3 = setInterval(() => {
        let firstEl = getSlotNumber(line3[0].src);
        let secondEl = getSlotNumber(line3[1].src);

        line3.forEach((element, i) => {
          setTimeout(() => {
            if (element == line3[0]) {
              let randEl = randomInt(9);
              while (randEl == getSlotNumber(line3[0].src) || randEl == getSlotNumber(line3[1].src) || randEl == getSlotNumber(line3[2].src)) {
                randEl = randomInt(9);
              }
              element.src = "img/slots/slot-" + randEl + ".jpg";
            } else if (element == line3[1]) {
              element.src = "img/slots/slot-" + firstEl + ".jpg";
            } else if (element == line3[2]) {
              element.src = "img/slots/slot-" + secondEl + ".jpg";
            }
          }, i * 50);
        });
      }, 150);
    }, 2000);

    setTimeout(() => {
      clearInterval(timer1);

      setTimeout(() => {
        clearInterval(timer2);

        setTimeout(() => {
          clearInterval(timer3);

          if (line1[1].src === line2[1].src && line1[1].src === line3[1].src && line1[1].src !== null) {
            btn.removeAttribute("disabled");
            btn.innerHTML = "Try again";
            btn.addEventListener("click", pageReload);
            line1[1].style.boxShadow = "0px 0px 26px 19px rgba(234, 200, 24, 0.74)";
            line2[1].style.boxShadow = "0px 0px 26px 19px rgba(234, 200, 24, 0.74)";
            line3[1].style.boxShadow = "0px 0px 26px 19px rgba(234, 200, 24, 0.74)";
            result.innerHTML = "Ви виграли! Спробуйте ще раз";
            return;
          }

          if (tryNumberInt >= 3) {
            btn.removeAttribute("disabled");
            btn.innerHTML = "Try again";
            btn.addEventListener("click", pageReload);
            result.innerHTML = "Ви програли! Спробуйте ще раз";
            return;
          }

          isFinished = true;
          btn.removeAttribute("disabled");
        }, 1200);
      }, 1200);
    }, 1200);
  }
});