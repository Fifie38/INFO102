// var nb = document.getElementById("nombre");

// var bouton = document.getElementById("fact");

// var res = document.getElementById("resultat");

// bouton.addEventListener("click", afficheRes);
// function afficheRes(){
//   res.innerHTML = facto(nb.value);
// }

// function facto(n){
//   var f = 1
//   for (var i=2; i<=n; i=i+1){
// 	f = f*i;
//   }
//   return f;
// }

const nb1 = document.getElementById("nombre1");
const nb2 = document.getElementById("nombre2");
const bouton = document.getElementById("moyenne");
const res = document.getElementById("resultat");

bouton.addEventListener("click", () => {
    console.log((nb1.value, nb2.value));
    res.innerHTML = moyenne(parseInt(nb1.value), parseInt(nb2.value));
});

function moyenne(_nb1, _nb2) {
    f = 0;
    f = (_nb1 + _nb2) / 2;
    return f;
}