const couleur = document.getElementById("couleur");
const submit = document.getElementById("submit");


submit.addEventListener("click", () => {
    document.body.style.backgroundColor = couleur.value;
});