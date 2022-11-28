<?php 
session_start();
if (empty($_SESSION['login'])) {header("Location: auth.php"); }
?>



<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Accueil backend</title>
  <link rel="stylesheet" href="../styles.css">
</head>

<body>

<section>
  <h1>Bienvenu(e) <?php echo $_SESSION['login'] ?></h1>
  
  <ul>
	<li><a href="ajout.php">Ajouter une page</a></li>
  </ul>
  
</section>
  
</body>

</html>