<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Top 5</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
<section>
  <h1>Quel est votre animé préféré ?</h1>
  <form method="post" action="vote.php">
	<?php

	$db = new PDO('mysql:dbname=top5;host=localhost;charset=utf8', 'root', 'root');
	#$db = new PDO('mysql:dbname=dbs4641016;host=db5005518873.hosting-data.io;charset=utf8', 'dbu2009529', 'Exposcent5-');
	
	$result = $db->query("SELECT * FROM anime");

	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		echo "<p>\n";
		echo '<label for="'.$row['id_anime'].'">'.$row['titre_anime'].'</label>'."\n";
		echo '<input type="radio" name="anime" size="20px" value="'.$row['id_anime'].'" id="'.$row['id_anime'].'">'."\n";
		echo "</p>\n";
	}
	?>
  <p>
	<input type="submit" value="Je vote">
  </p>
  </form>
</section>
</body>
</html>