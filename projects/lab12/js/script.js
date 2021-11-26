function getRandomInt(range) {
  return Math.floor(Math.random() * range);
}

function getRandomWord() {
  return words[type][getRandomInt(words[type].length)];
}

function getIndexOfWord(word) {
  for (let i = 0; i < words[type].length; i++) {
    if (words[type][i][0] == word[0]) {
      return i;
    }
  }
  
  return -1;
}

function inputValidation(data) {
  const alphabet = "АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщьЮюЯя `'";

  if (!data) {
    return false;
  }

  for (var i = 0; i < data.length; i++) {
    if (alphabet.indexOf(data[i]) == -1) {
      return false;
    }
  }

  return true;
}

function getResult(numberOfRightAnswers) {
  if (numberOfRightAnswers < 2) {
    return ["низький", "Вивчіть слова та повторіть спробу"];
  } else if (numberOfRightAnswers < 4) {
    return ["низький", "Повторіть слова та повертайтесь"];
  } else if (numberOfRightAnswers < 6) {
    return ["середній", "Непогано, але можете краще, повторіть слова"];
  } else if (numberOfRightAnswers < 8) {
    return ["середній", "Добре! Але потрібно більше практики"];
  } else if (numberOfRightAnswers <= 10) {
    return ["високий", "Дуже добре! Не зупиняйтесь та вивчайте нові слова, згодом повторіть вивчене"];
  }
}

function CheckWord(answer) {
  if (isFinished) {
    isFinished = false;
    $("[name=level]").not(this).prop("disabled", true); // refuse change level

    // Input validation
    if (inputValidation($(".answer--input").val().toLowerCase())) {
      $(".answer--input").css("border-color", "#000");
    } else {
      $(".answer--input").css("border-color", "#ff0000");
      isFinished = true;
      return;
    }

    // Check the answer
    // Card animation, show answer
    $(".card").toggleClass("flipInY");
    $("#word").text(word[1]);
    setTimeout(() => { 
      $(".card").toggleClass("flipInY");

      if ($(".answer--input").val().toLowerCase() == answer[1]) {
        $("#right").text(parseInt($("#right").text()) + 1);
      } else {
        $("#wrong").text(parseInt($("#wrong").text()) + 1);
      }
      $(".answer--input").val(""); // Clear answer
    
      // Add 1 to number of done words and delete current word
      if ($("#numberOfDoneWords").text() != $("#numberOfUndoneWords").text()) {
        $("#numberOfDoneWords").text(parseInt($("#numberOfDoneWords").text()) + 1);
      }
      words[type].splice(getIndexOfWord(answer), 1);
    
      // Check if all words already had been  
      if (!words[type].length) {
        $(".modal").addClass("modal__open");
        const result = getResult(parseInt($("#right").text()));
        $("#level").text(result[0]);
        $("#level-text").text(result[1]);
        return;
      }
    
      // Generate the next word
      word = getRandomWord();
      $("#word").text(word[0]);
      $(".card").toggleClass("fadeInRight");
      setTimeout(() => {
        $(".card").toggleClass("fadeInRight");

        isFinished = true;
      }, 1000);
    }, 1200);
  }
}

// Call a function CheckWord if enter is clicked
$(".answer--input").keypress(function(event) {
  let key = event.which;
  if (key == 13) {
    CheckWord(word);
    return false;  
  }
});

var word; // Current word
let isFinished = true; // prevent answer before animation
const words = [
  [
    ["melon", "диня"],
    ["corn", "кукурудза"],
    ["together", "разом"],
    ["soap", "мило"],
    ["yell", "кричати"],
    ["beard", "борода"],
    ["proud", "гордий"],
    ["selection", "виділення"],
    ["plain", "звичайний"],
    ["awful", "лячний"]
  ],
  [
    ["spine", "хребет"],
    ["fist", "кулак"],
    ["jaw", "щелепа"],
    ["toe", "палець ноги"],
    ["couch", "диван"],
    ["expectation", "очікування"],
    ["deter", "стримувати"],
    ["raise", "підняти"],
    ["superior", "вищий"],
    ["typically", "типово"]
  ],
  [
    ["anxious", "тривожний"],
    ["wig", "перука"],
    ["hesitate", "вагатися"],
    ["ambush", "засада"],
    ["temple", "храм"],
    ["blacksmith", "коваль"],
    ["abyss", "прірва"],
    ["insane", "божевільний"],
    ["afar", "далеко"],
    ["appeal", "звернення"]
  ]
];

// Get type of level
let type = 0;
$("[name=level]").change(() => {
  if ($(":checked").get(0).id == "low") {
    type = 0;
  } else if ($(":checked").get(0).id == "middle") {
    type = 1;
  } else {
    type = 2;
  }

  word = getRandomWord();
  $("#word").text(word[0]);
});

// Get first word when page are loaded
word = getRandomWord();
$("#word").text(word[0]);
$("#numberOfUndoneWords").text(words[type].length);
// Focus on input when page are loaded
$(".answer--input").focus();
// Close modal when X is clicked
$("#close").click(() => {
  $(".modal").removeClass("modal__open");
  document.location.reload();
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $(".modal")[0]) {
    $(".modal").removeClass("modal__open");
    document.location.reload();
  }
}