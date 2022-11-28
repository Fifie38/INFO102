<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>démo</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
<section>
  <h1>Quelle heure est-il ?</h1>
  
  <?php 
  date_default_timezone_set('Europe/Paris');
  echo date("H:i"); 
  ?>
  
</section>
</body>
</html>