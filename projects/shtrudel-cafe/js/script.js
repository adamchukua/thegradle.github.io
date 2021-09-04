document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);

document.getElementById("mobile-menu-btn").addEventListener("click", function() 
{
  if(document.getElementById("mobile-menu-btn").classList.contains("nav-icon_open"))
  {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  else
  {  
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  }

  document.getElementById("mobile-menu-btn").classList.toggle("nav-icon_open");
  document.getElementById("nav-menu").classList.toggle("menu_mobile_open");
});