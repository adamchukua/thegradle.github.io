function TimeToNextYear()
{
  let time_text = document.querySelector("#time");
  let current_date = new Date();
  let current_day = current_date.getDate() - 1;
  let number_of_days = 0;

  for (let i = 0; i < current_date.getMonth(); i++)
  {
    current_day += new Date(current_date.getFullYear(), i, 0).getDate();
  }

  for (let i = 0; i <= 11; i++)
  {
    number_of_days += new Date(current_date.getFullYear(), i, 0).getDate();
  }

  let days_to_end = number_of_days - current_day;
  let days_str = " днів ";
  if(days_to_end % 10 == 1)
  {
    days_str = " день ";
  }
  else if(days_to_end % 10 > 1 && days_to_end % 10 < 5)
  {
    days_str = " дні ";
  }

  let hours_to_end = 24 - current_date.getHours();
  let hours_str = " годин ";
  if(hours_to_end % 10 == 1 && hours_to_end != 11)
  {
    hours_str = " година ";
  }
  else if((hours_to_end > 1 && hours_to_end < 5) || (hours_to_end > 21 && hours_to_end < 25))
  {
    hours_str = " години ";
  }

  let mins_to_end = 59 - current_date.getMinutes();
  let mins_str = " хвилин ";
  if(mins_to_end == 1)
  {
    mins_str = " хвилина ";
  }
  else if((mins_to_end % 10 > 1 && mins_to_end % 10 < 5) && (mins_to_end / 10 != 1))
  {
    mins_str = " хвилини ";
  }

  time_text.innerHTML = days_to_end + "<span>" + days_str + "</span>" + hours_to_end + "<span>" + hours_str + "</span>" + mins_to_end + "<span>" + mins_str + "</span>";
  document.title = "До кінця року залишилось " + days_to_end + days_str + hours_to_end + hours_str + mins_to_end + mins_str;
}

setInterval(TimeToNextYear, 1000);