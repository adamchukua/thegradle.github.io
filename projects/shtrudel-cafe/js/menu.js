const menuList = document.querySelectorAll("li");
const modalInfo = document.querySelector(".modal-info");
const closeBtn = document.querySelector(".close");
const dishImg = document.querySelector(".modal-info-content__img");
const dishTitle = document.querySelector(".modal-info-content__title");
const dishDesc = document.querySelector(".modal-info-content__desc");
const dishPrice = document.querySelector(".modal-info-content__price");

function ShowInfo(name) {
  modalInfo.style.opacity = "1";
  modalInfo.style.visibility = "visible";

  let info = name.split("_");

  $.getJSON("data/menu.json", function(data) {
    Object.keys(data).forEach(group => {
      if (info[0] == group) {
        for (let i = 0; i < data[group].length; i++) {
          if (info[1] == i) {
            //dishImg.src = "img/menu/" + menuDict[name][0];
            dishTitle.innerText = data[group][i].name;
            //dishDesc.innerText = data[group][i];
            dishPrice.innerText = data[group][i].price + "₴";
          }
        }
      }
    });
  });
}

menuList.forEach(item => {
  item.addEventListener("click", function() {
    event.path.forEach(element => {
      if (element.nodeName == "LI") {
        ShowInfo(element.id);
        return;
      }
    });
  });
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modalInfo.style.opacity = "0";
  modalInfo.style.visibility = "hidden";
  dishImg.src = "img/menu/default.png";
  dishTitle.innerText = "";
  dishDesc.innerText = "";
  dishPrice.innerText = "";
});