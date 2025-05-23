<?php
$dogru_email = "b240100557@sakarya.edu.tr";
$dogru_sifre = "b240100557";

$email = $_POST['email'] ?? '';
$sifre = $_POST['password'] ?? '';

if ($email === $dogru_email && $sifre === $dogru_sifre) {
    echo <<<HTML
<!DOCTYPE html>
<html lang='tr'>
<head>
  <meta charset='UTF-8'>
  <title>Giriş Başarılı</title>
</head>
<body style="background-color:#1e1e2f; color:white; font-family:sans-serif; text-align:center; padding-top:100px;">
  <h1>Hoşgeldiniz <span style="color: #00ffcc;">b240100557</span></h1>
</body>
</html>
HTML;
} else {
    header("Location: login.html");
    exit();
}
?>
