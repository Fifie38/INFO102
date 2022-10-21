const mySpan = document.getElementById("mySpan");
const gerard =  document.getElementById("gerard");

mySpan.addEventListener("click", () => {
    gerard.style.visibility= "visible";
    gerard.style.transform = "rotate(360deg)";
    gerard.style.transform = "rotate(0deg)";

})
gerard.addEventListener("click", ()=> {
    gerard.style.transform = "rotate(360deg)";
})