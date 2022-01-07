/////// DATA ///////

const menuDict = {};
menuDict["ТАКО З ЯЛОВИЧИНИ\n900₴"] = ["takozyalovichini.jpg", "ТАКО З ЯЛОВИЧИНИ", "texttexttexttexttexttext", "900₴"];
menuDict["ГОСТРІ ТАКО З КРЕВЕТКАМИ\n900₴"] = ["other.jpg", "ГОСТРІ ТАКО З КРЕВЕТКАМИ", "21323213123213123123", "900₴"];

const menuList = document.querySelectorAll("li");
const modalInfo = document.querySelector(".modal-info");
const dishImg = document.querySelector(".modal-info-content__img");
const dishTitle = document.querySelector(".modal-info-content__title");
const dishDesc = document.querySelector(".modal-info-content__desc");
const dishPrice = document.querySelector(".modal-info-content__price");

menuList.forEach(item => {
  item.addEventListener("click", function() {
    modalInfo.style.opacity = "1";
    modalInfo.style.visibility = "visible";

    let dish = event.target.innerText;

    if (!(dish in menuDict)) {
      modalInfo.style.opacity = "0";
      modalInfo.style.visibility = "hidden";
      return;
    }

    dishImg.src = "img/menu/" + menuDict[dish][0];
    dishTitle.innerText = menuDict[dish][1];
    dishDesc.innerText = menuDict[dish][2];
    dishPrice.innerText = menuDict[dish][3];
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