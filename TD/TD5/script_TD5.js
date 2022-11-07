var nb = document.getElementById("nombre");

var bouton = document.getElementById("fact");

var res = document.getElementById("resultat");

bouton.addEventListener("click", afficheRes);
function afficheRes(){
  res.innerHTML = facto(nb.value);
}

function facto(n){
  var f = 1
  for (var i=2; i<=n; i=i+1){
	f = f*i;
  }
  return f;
}