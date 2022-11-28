<?php

$pseudo = $_POST['pseudo'];
$mdp = $_POST['mdp'];

$dbh = new PDO('mysql:dbname=miyasaki;host=localhost;charset=utf8', 'root', 'root');
	
$result = $dbh->query("SELECT * FROM user WHERE login='$pseudo' and pass='$mdp'");

$row = $result->fetch(PDO::FETCH_ASSOC);

if (empty($row)){
	header("Location:auth.php");
} else {
	session_start();
	$_SESSION['login'] = $pseudo;
	header("Location:index.php");
}

?>


