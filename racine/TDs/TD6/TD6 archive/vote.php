<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Top 5</title>
  <link rel="stylesheet" href="style.css">
</head>





<body>
<section>
  <?php 
	$vote = $_POST['anime'];

	$db = new PDO('mysql:dbname=top5td;host=localhost;charset=utf8', 'root', 'root');
	
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	try {
		$result = $db->query("UPDATE anime SET vote_anime = vote_anime+1 WHERE id_anime = $vote");
		?>
		<p>Votre vote a bien été pris en compte. <br><a href="resultats.php">Voir les résultats</a></p>
		<?php
	} catch (PDOException $e) {
		printf("%s - %s\n", $e->getCode(), $e->getMessage());
	}
  ?> 
</section>
</body>




</html>
