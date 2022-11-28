<?php 
session_start();
if (empty($_SESSION['login'])) {header("Location: auth.php"); }

$annee = $_POST['annee'];
$titre = $_POST['titre'];
$texte = '<p>'.nl2br(htmlspecialchars($_POST['texte'],ENT_QUOTES)).'</p>';
$chemin = "images/$titre.jpg";

move_uploaded_file($_FILES['image']['tmp_name'], "../images/$titre.jpg");

$db = new PDO('mysql:dbname=miyasaki;host=localhost;charset=utf8', 'root', 'root');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


//echo "INSERT INTO pages VALUES (NULL,$annee,'$titre','$chemin','$texte')";

try {
	$result = $db->query("INSERT INTO pages VALUES (NULL,$annee,'$titre','$chemin','$texte')");
} catch (PDOException $e) {
	printf("%s - %s\n", $e->getCode(), $e->getMessage());
}

?>