// ADDING ELEMENTS

document.body.innerHTML = `
<div class="question-block">
  <p class="question-block--text">If you want to get answer enter your question in the input below, then click on the magic ball.</p>
  <input type="text" class="question-block--input">
</div>
<div class="box">
  <div class="ball">
    <div class="triangle" onclick="Answer();">
      <p class="triangle--text">Click to get answer</p>
    </div>
  </div>
</div>
`;

// ANSWER QUESTION

var answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes — definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

function Answer()
{
  if (!document.querySelector(".question-block--input").value)
  {
    alert("Please, enter your question!");
    return;
  }

  document.querySelector(".triangle--text").innerHTML = "";
  document.querySelector(".ball").classList.add("shakeX");
  setTimeout(() => { 
    document.querySelector(".triangle--text").innerHTML = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector(".ball").classList.remove("shakeX");
  }, 1000);
}