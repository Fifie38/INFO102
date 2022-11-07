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

// ------------------------------------------------------------------------------
// Formulaire 2
const nb1 = document.getElementById("nombre1");
const nb2 = document.getElementById("nombre2");
const bouton = document.getElementById("moyenne");
const res2 = document.getElementById("resultat");
// Formulaire 3
const vitesse_vent = document.getElementById("vitesse-vent");
const etat_mer = document.getElementById("etat_mer");
const drapeau = document.getElementById("drapeau");
const res3 = document.getElementById("resultat3");
// Formulaire 4
const ul = document.getElementById("menu");


// -------------------------------------------------------------------------------
// Formulaire 2
bouton.addEventListener("click", () => {
    console.log((nb1.value, nb2.value));
    res2.innerHTML = moyenne(parseInt(nb1.value), parseInt(nb2.value));
});

function moyenne(_nb1, _nb2) {
    return (_nb1 + _nb2) / 2;
}

// Formulaire 3
drapeau.addEventListener("click", () => {
    console.log(vitesse_vent.value);
    console.log(etat_mer.value);

    if (vitesse_vent.value === 'zero' && etat_mer.value === 'calme') {
        res3.innerHTML = 'Vert';
        res3.style.backgroundColor = "green";
    } else if ((vitesse_vent.value === 'vingt' && etat_mer.value === 'calme') || (etat_mer.value === 'agitee' && vitesse_vent.value === 'vingt') || (etat_mer.value === 'agitee' && vitesse_vent.value === 'zero')) {
        res3.style.backgroundColor = 'orange';
        res3.innerHTML = 'Orange';

    } else {
        res3.style.backgroundColor = 'red';
        res3.innerHTML = 'Rouge';

    }
});

// Formulaire 4
ul.addEventListener("click", (e) => {
    const li = e.srcElement.innerHTML.replace(' ', '_');
    console.log(li.replace(' ', '_'));

    document.body.style.backgroundImage = "url('./images/'+'li.replace(' ', '_') '.jpg')";
});