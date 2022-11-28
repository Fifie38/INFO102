<?php
echo "<h1>Hello world</h1>";

/* commentaires
sur plusieurs
lignes */

// ou # sur une ligne

$a = 3;
$x = 2.1;
$ch = "PHP";
$test = TRUE; //insensible à la casse

echo "$a<br> $x<br $ch<br> (int)$test<br>";

$note = 11;

if (($note>10) && $test) {
  $res = "admis";
} elseif ($note>=8) {
  $res = "rattrapage";
} else {
  $res = "non admis";
}

echo "$res<br>";

$somme = 0;
for ($i=1; $i<=10; $i++){
  $somme = $somme + $i;
}
echo "$somme<br>";

$j=1;
$n=4;
$fact = 1;
while ($j<=$n) {
  $j = $j+1;
  $fact = $fact * $j;
}
echo "$fact<br>";

$ch = "Hello"."World";

echo strlen($ch)." ".$ch[0]." ".substr($ch,6,10)."<br>";

$a = (int)'10';
echo $a."<br>";
$r = 1.25e2;
echo $r."<br>";
$n1 = 2;
$n2 = 3;

echo $n1%$n2."<br>";

echo intdiv(10,3)."<br>";

echo cos(M_PI)."<br>";

$vide = array();
$vide = []; 

$jours = array("lun","mar","mer","jeu","ven","sam","dim");
$jours = ["lun","mar","mer","jeu","ven","sam","dim"]; 
 
echo count($jours)." ".$jours[1];

?>