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
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  document.querySelector("#modal-img").src = "";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    document.querySelector("#modal-img").src = "";
  }
}

// When the user clicks on the image open modal image with higher resolution
images.forEach(image => {
  image.addEventListener("click", function(event) {
    document.querySelector("#modal-img").src = event.target.src;
    document.querySelector("#modal-img-hidden").src = event.target.src.replace("min", "full");

    document.querySelector("#modal-img-hidden").onload = function() {
      document.querySelector("#modal-img").src = document.querySelector("#modal-img-hidden").src;
    };

    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  });
});