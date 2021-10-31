// ДОДАВАННЯ ЕЛЕМЕНТІВ

document.body.innerHTML = `
<div class="question-block">
  <p class="question-block--text">Щоб отримати відповідь введіть своє запитання у поле нижче, а потім натисніть на магічний шар.</p>
  <input type="text" class="question-block--input">
</div>
<div class="box">
  <div class="ball">
    <div class="triangle" onclick="Answer();">
      <p class="triangle--text">Натисніть, щоб отримати відповідь</p>
    </div>
  </div>
</div>
`;

// ВІДПОВІДЬ НА ПИТАННЯ

var answers = [
  "Беззаперечно",
  "Точно так",
  "Без сумнівів",
  "Будьте впевнені в цьому",
  "Мені здається - \"так\"",
  "Здебільшого так",
  "Скоріше так",
  "Говорять, що так",
  "Так",
  "Поки що не зрозуміло, спробуйте знову",
  "Запитайте пізніше",
  "Краще не казати",
  "Зараз сказати не можна",
  "Сконцентруйтесь та запитайте знову",
  "Навіть не думайте",
  "Моя відопвідь - \"ні\"",
  "За моїми джерелами - ні",
  "Перспективи не дуже",
  "Сумніваюсь"
];

function Answer()
{
  if (!document.querySelector(".question-block--input").value)
  {
    alert("Помилка, введіть своє запитання");
    return;
  }

  document.querySelector(".triangle--text").innerHTML = "";
  document.querySelector(".ball").classList.add("shakeX");
  setTimeout(() => { 
    document.querySelector(".triangle--text").innerHTML = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector(".ball").classList.remove("shakeX");
  }, 1000);
}