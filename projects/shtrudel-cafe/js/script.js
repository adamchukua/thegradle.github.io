document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`); // Calculate the chrome mobile bar

document.getElementById("mobile-menu-btn").addEventListener("click", function() 
{
  document.getElementById("container").classList.toggle("container_hidden");
  document.getElementById("mobile-menu-btn").style.display = "block";
  document.getElementById("mobile-menu-btn").classList.toggle("nav-icon_open");
  document.getElementById("nav-menu").classList.toggle("menu_mobile_open");
});

for(var i = 0; i < document.getElementsByClassName("nav--link").length; i++){
  document.getElementsByClassName("nav--link")[i].addEventListener('click', ChangeSection, false);
}

function ChangeSection()
{
  document.getElementById("mobile-menu-btn").classList.toggle("nav-icon_open");
  document.getElementById("nav-menu").classList.toggle("menu_mobile_open");
  document.getElementById("container").classList.toggle("container_hidden");
  this.scrollIntoView();
}