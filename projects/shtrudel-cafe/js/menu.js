const menuList = document.querySelectorAll("li");
const menuBtns = document.querySelectorAll("li img");
const modalInfo = document.querySelector(".modal-info");
const closeBtn = document.querySelector(".close");
const dishImg = document.querySelector(".modal-info-content__img");
const dishTitle = document.querySelector(".modal-info-content__title");
const dishDesc = document.querySelector(".modal-info-content__desc");
const dishPrice = document.querySelector(".modal-info-content__price");

function ShowInfo(name) {
  modalInfo.style.opacity = "1";
  modalInfo.style.visibility = "visible";
  
  /*console.log("1" + name);
  if (!(name in menuDict)) {
    modalInfo.style.opacity = "0";
    modalInfo.style.visibility = "hidden";
    console.log("2" + name);
    return;
  }*/

  dishImg.src = "img/menu/" + menuDict[name][0];
  dishTitle.innerText = menuDict[name][1];
  dishDesc.innerText = menuDict[name][2];
  dishPrice.innerText = menuDict[name][3];
}

menuBtns.forEach(item => {
  item.addEventListener("click", function() {
    ShowInfo(event.path[1].innerText);
  });
});

menuList.forEach(item => {
  item.addEventListener("click", function() {
    ShowInfo(event.target.innerText);
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modalInfo.style.opacity = "0";
  modalInfo.style.visibility = "hidden";
  dishImg.src = "";
  dishTitle.innerText = "";
  dishDesc.innerText = "";
  dishPrice.innerText = "";
});