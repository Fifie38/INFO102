<?php 
session_start();
if (empty($_SESSION['login'])) {header("Location: auth.php"); }
?>



<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Ajouter une page backend</title>
  <link rel="stylesheet" href="../styles.css">
</head>

<body>

<section>
  <h1>Ajouter une page</h1>
  
  <form method="post" action="ajouter.php" enctype="multipart/form-data">
  <p>
    <label for="annee">Année :</label>
	<input type="number" name="annee" id="annee">
  </p>
  <p>
    <label for="titre">Titre :</label>
	<input type="text" name="titre" id="titre">
  </p>
  <p>
    <label for="image">Image :</label>
	<input type="file" name="image" id="image">
  </p>
  <p>
    <label for="texte">Texte :</label>
	<textarea name="texte" id="texte"></textarea>
  </p>
  <p>
	<input type="submit" value="Ajouter une page">
  </p>
  </form>
  
</section>
  
</body>

</html>