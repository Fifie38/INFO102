const vitrine = document.querySelector(".vitrine");
const icone = document.querySelector(".iconeMenu");
const menu = document.querySelector(".menu");


icone.addEventListener("click", () => {
    icone.classList.toggle("afficheMenu");
    vitrine.classList.toggle("afficheMenu");
    menu.classList.toggle("afficheMenu");

    
})
