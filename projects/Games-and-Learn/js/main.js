///// Animation on the main page /////

const sections = document.querySelectorAll(".content-item");
const section_lists = document.querySelectorAll(".content-item-list");

function ShowSection(id) {
  section_lists[id].style.display = "block";
  section_lists[(!id) ? id + 1 : id - 1].style.display = "none";
  sections[id].style.height = "70%";
  sections[(!id) ? id + 1 : id - 1].style.height = "30%";
}

// Check for device
if (screen.width > 480 ) {     
  // Actions for PC
  sections[0].addEventListener("mouseover", function(event) {
    ShowSection(0);
  });
  sections[1].addEventListener("mouseover", function(event) {
    ShowSection(1);
  });
} else {
  // Actions for mobile
  sections[0].addEventListener("click", function(event) {
    ShowSection(0);
  });
  sections[1].addEventListener("click", function(event) {
    ShowSection(1);
  });
}

///// Save username /////

const username = document.querySelector("#username");
username.value = getCookie("username");

function usernameValidation(data) {
  return data.length >= 2 && data.length <= 20;
}

username.addEventListener("keypress", function(event) {
  eraseCookie("username");

  let key = event.which;
  if (key == 13) {
    if (!usernameValidation(username.value)) {
      alert("Ім'я не збережено: ім'я має бути від 2 до 20 символів.");
      return;
    }
    setCookie("username", username.value, 7);
    alert("Ім'я збережено");

    return false;  
  }
});

