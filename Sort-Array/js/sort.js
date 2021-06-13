document.getElementById("sort").addEventListener("click", Sort);
    
function Sort()
{
  var numbers = document.getElementById("numbers").value;
  numbers = numbers.split(" ").map(x=>+x);
  
  for(var i = 0; i < numbers.length; i++)
  {
    if(isNaN(numbers[i]))
    {
      alert("Вводьте лише цифри через пробіл!");
      return;
    }
  }

  numbers.sort(function(a, b){return b - a});
  document.getElementById("numbers").value = numbers.join(" ");
}