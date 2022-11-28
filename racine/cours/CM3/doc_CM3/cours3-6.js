var n = document.getElementById("nombre");
var bouton = document.getElementById("fact");
var r = document.getElementById("resultat");

bouton.addEventListener("click", afficheRes);
function afficheRes(){
  r.innerHTML = facto(n.value);
}

/*
bouton.onclick = function() {
  r.innerHTML = facto(n.value);
}
*/

function facto(n){
  var f = 1
  for (var i=2; i<=n; i=i+1){
	f = f*i;
  }
  return f;
}
  