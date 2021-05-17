<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .cbalink {display: none}
</style>

<?php
  require_once "recaptchalib.php";

  $secret = "6LcnP60UAAAAAE4wfJLvipudm2vU9kuuhp8gRfRY";
  $response = null;
  $reCaptcha = new ReCaptcha($secret);

  if(trim($_POST['name']) == '') {
    $hasError = true;
  } else {
    $name = trim($_POST['name']);
  }
  
  if(trim($_POST['email']) == '')  {
    $hasError = true;
  } else {
    $email = trim($_POST['email']);
  }

  if(trim($_POST['subject']) == '') {
    $hasError = true;
  } else {
    $subject = trim($_POST['subject']);
  }
  
  if(trim($_POST['message']) == '') {
    $hasError = true;
  } else {
    if(function_exists('stripslashes')) {
      $comments = stripslashes(trim($_POST['message']));
    } else {
      $comments = trim($_POST['message']);
    }
  }

  if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
      $_SERVER["REMOTE_ADDR"],
      $_POST["g-recaptcha-response"]
    );
  }

  if ($response == null) {
    $hasError = true;
  }

  if ($_POST['agree'] == '') {
    $hasError = true;
  }
  
  if(!isset($hasError)) {
    $emailTo = 'feedback@torohtiy.zzz.com.ua';
    $body = "Имя: $name \n\nEmail: $email \n\nТема: $subject \n\nСообщение:\n$comments";
    $headers = "From: feedback@torohtiy.zzz.com.ua\r\n";
    $headers .= "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    
    if (mail($emailTo, $subject, $body, $headers)) {
      echo "Ваше сообщение было отправлено!<br>Идёт переадрисация на главную страницу...\nЕсли этого не произошло нажмите <a href=\"http://torohtiy.zzz.com.ua\">сюда</a>";
      header("refresh:2;url=http://torohtiy.zzz.com.ua");
    } else {
      echo "Ваше сообщение не было отправлено!<br>Идёт переадрисация на главную страницу...\nЕсли этого не произошло нажмите <a href=\"http://torohtiy.zzz.com.ua\">сюда</a>";
      header("refresh:2;url=http://torohtiy.zzz.com.ua");
    }
  }

  if ($hasError == true) {
    echo "Ваше сообщение не было отправлено!<br>Найдены ошибки в форме. Идёт переадрисация на главную страницу...\nЕсли этого не произошло нажмите <a href=\"http://torohtiy.zzz.com.ua\">сюда</a>";
    header("refresh:2;url=http://torohtiy.zzz.com.ua");
  }
?>