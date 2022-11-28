<?php 
session_start();
if (empty($_SESSION['login'])) {header("Location: auth.php"); }
?>



<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Accueil</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>

<section>
  <h1>Mon site sur Miyasaki</h1>
  
  <ul>
  <?php
	
	$dbh = new PDO('mysql:dbname=miyasaki;host=localhost;charset=utf8', 'root', 'root');
	
	$result = $dbh->query("SELECT id, titre FROM pages");
	
	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		echo '<li><a href="page.php?id='.$row['id'].'">'.$row['titre'].'</a></li>';
	}
	
  ?>
  </ul>
  
</section>
  
</body>

</html>