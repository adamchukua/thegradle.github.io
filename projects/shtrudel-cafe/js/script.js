// Calculate the chrome mobile bar
document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);

/////// MOBILE MENU ///////

const container = document.querySelector("#container");
const menu = document.querySelector("#nav-menu");
const btn = document.querySelector("#mobile-menu-btn");
const links = document.querySelectorAll(".nav--link");

btn.addEventListener("click", function() {
  container.classList.toggle("container_hidden");
  btn.style.display = "block";
  btn.classList.toggle("nav-icon_open");
  menu.classList.toggle("menu_mobile_open");
});

links.forEach(link => {
  link.addEventListener("click", ChangeSection, false);
});

function ChangeSection() {
  btn.classList.toggle("nav-icon_open");
  menu.classList.toggle("menu_mobile_open");
  container.classList.toggle("container_hidden");
  this.scrollIntoView();
}

/////// GALLERY ///////

const images = document.querySelectorAll(".gallery-imgs > img");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close");
const modalImg = document.querySelector("#modal-img");
const modalImgHidden = document.querySelector("#modal-img-hidden");

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  modalImg.src = "";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == document.querySelector(".modal-content")) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    modalImg.src = "";
  }
}

// When the user clicks on the image open modal image with higher resolution
images.forEach(image => {
  image.addEventListener("click", function(event) {
    modalImg.src = event.target.src;
    modalImgHidden.src = event.target.src.replace("min", "full");

    modalImgHidden.onload = function() {
      modalImg.src = modalImgHidden.src;
    };

    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  });
});

/////// MODAL CONTROLS ///////

function GetNumberOfImg(data) {
  let src = data.split("").reverse().join("");
  let number = "";
  let i = 0;

  while (src[i] != '-') {
    number += src[i];
    i++;
  }

  return parseInt(number.substring(4).split("").reverse().join(""));
}

const btnNextImg = document.querySelector("#next-img");
const btnPrevImg = document.querySelector("#prev-img");

// Show next picture
btnNextImg.addEventListener("click", function() {
  let currentImg = GetNumberOfImg(modalImg.src);
  let nextImg = (currentImg == 16) ? 1 : (currentImg + 1) % 17;

  modalImg.src = "img/gallery-min/gallery-" + nextImg + ".jpg";
  modalImgHidden.src = "img/gallery-full/gallery-" + nextImg + ".jpg";

  modalImgHidden.onload = function() {
    modalImg.src = modalImgHidden.src;
  };
});

// Show previous picture
btnPrevImg.addEventListener("click", function() {
  let currentImg = GetNumberOfImg(modalImg.src);
  let prevImg = (currentImg == 1) ? 16 : (currentImg - 1) % 17;

  modalImg.src = "img/gallery-min/gallery-" + prevImg + ".jpg";
  modalImgHidden.src = "img/gallery-full/gallery-" + prevImg + ".jpg";

  modalImgHidden.onload = function() {
    modalImg.src = modalImgHidden.src;
  };
});