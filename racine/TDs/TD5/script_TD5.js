// Created by : https://github.com/Fifie38
//   ______ _____ ______ _____ ______ ____   ___  
//  |  ____|_   _|  ____|_   _|  ____|___ \ / _ \
//  | |__    | | | |__    | | | |__    __) | (_) |
//  |  __|   | | |  __|   | | |  __|  |__ < > _ < 
//  | |     _| |_| |     _| |_| |____ ___) | (_) |
//  |_|    |_____|_|    |_____|______|____/ \___/ 
                                               
//    Created by : https://github.com/Fifie38

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
// Exercice 4
const ul = document.getElementById("menu");
// Exercice 5
const myImage = document.getElementById("image");
const infoBulle = document.getElementById("info-bulle");



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

// Exercice 4
ul.addEventListener("click", (e) => {
    const li = e.srcElement.innerHTML.replaceAll(' ', '_');
    document.body.style.backgroundImage = "url('./images/"+ li + ".jpg')";
});


// Exercice 5
myImage.addEventListener("click", (e) => {
    infoBulle.innerHTML = e.explicitOriginalTarget.alt;
    infoBulle.style.visibility = 'visible';
});