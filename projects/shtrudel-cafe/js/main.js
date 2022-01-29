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

/////// FOOTER DATE ///////

document.querySelector("footer").innerHTML = "© " + new Date().getFullYear() + " «Штрудель Кафе»";