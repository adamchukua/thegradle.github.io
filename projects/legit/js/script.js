// Sey year in the footer copyright
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#year").innerHTML = new Date().getFullYear();
});

////////// Picture preview in gallary //////////

const gallery = document.querySelector(".gallary");
const gallaryBlocks = document.querySelectorAll(".gallery-block");

gallaryBlocks.forEach(gallaryBlock => {
  gallaryBlock.addEventListener("mouseover", function(event) {
    event.target.parentElement.style.width = "100%";

    gallaryBlocks.forEach(gallaryBlock => {
      if (event.relatedTarget.parentElement == gallaryBlock) {
        event.relatedTarget.parentElement.style.width = "calc(100% / 5)";
      } else {
        //event.relatedTarget.parentElement.style.width = "100%";
      }
    });
  });
});

////////// Form validation //////////

function isNumber(data) {
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      return true;
    }
  }

  return false;
}

function nameValidation(data) {
  return data.length >= 2 && data.length <= 100 && !isNumber(data);
}

function emailValidation(data) {
  return data.includes("@") && data.length >= 10 && data.length <= 100;
}

function telValidation(data) {
  return parseInt(data) && data.length >= 10 && data.length <= 12;
}

function textValidation(data) {
  return data.length >= 6 && data.length <= 3000 || data.length == 0;
}

const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputTel = document.querySelector("#tel");
const inputText = document.querySelector("#text");
let isValid = false;

inputName.addEventListener("input", function(event) {
  const element = event.target;

  if (nameValidation(element.value)) {
    element.classList.remove("invalid-input");
  } else {
    element.classList.add("invalid-input");
  }
});

inputEmail.addEventListener("input", function(event) {
  const element = event.target;

  if (emailValidation(element.value)) {
    element.classList.remove("invalid-input");
  } else {
    element.classList.add("invalid-input");
  }
});

inputTel.addEventListener("input", function(event) {
  const element = event.target;

  if (telValidation(element.value)) {
    element.classList.remove("invalid-input");
  } else {
    element.classList.add("invalid-input");
  }
});

inputText.addEventListener("input", function(event) {
  const element = event.target;

  if (textValidation(element.value)) {
    element.classList.remove("invalid-input");
  } else {
    element.classList.add("invalid-input");
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameValidation(inputName.value);
  const email = emailValidation(inputEmail.value);
  const tel = telValidation(inputTel.value);
  const text = textValidation(inputText.value);

  isValid = (name && email && tel && text) ? true : false;
  ShowModal(isValid);
});

////////// Modal //////////

const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
const img = document.querySelector("#modal-img");
const text = document.querySelector("#modal-text");
const btn = document.querySelector("[type='submit']");

function ShowModal(isValid) {
  if (isValid) {
    text.innerHTML = "Дякуємо! Скоро зв'яжемося з вами";
    img.src = "img/emoji/check-mark-button.png";
  } else {
    text.innerHTML = "Помилка! Перевірте введені дані";
    img.src = "img/emoji/no-entry.png";
  }
  
  modal.style.display = "block";
}

span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});