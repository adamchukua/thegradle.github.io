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
let isPreview = false;

images.forEach(image => {
  image.addEventListener("click", function(event) {
    if (isPreview) {
      isPreview = false;

      images.forEach(unclickedImage => {
        unclickedImage.style.width = "calc(50% - 2.5px)";
      });
    } else {
      isPreview = true;

      images.forEach(unclickedImage => {
        unclickedImage.style.width = "0%";
      });
  
      event.target.style.width = "100%";
    }
  });
});