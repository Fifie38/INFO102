<?php
$id = $_GET['id'];
	
$dbh = new PDO('mysql:dbname=miyasaki;host=localhost;charset=utf8', 'root', 'root');
	
$result = $dbh->query("SELECT * FROM pages WHERE id=$id");
	
$row = $result->fetch(PDO::FETCH_ASSOC);

$titre = $row['titre'];
$chemin = $row['image'];
$texte = $row['texte'];

$title = $titre;
include('inc/entete.php');
?>

  <h1><?php echo $titre;?></h1>
  
  <img src="<?php echo $chemin?>" alt="">
  
  <?php echo $texte;?>
  
<?php
include('inc/pied.php');
?>
  