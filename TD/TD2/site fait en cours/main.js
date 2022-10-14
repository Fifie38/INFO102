var image = document.querySelector("img");

image.addEventListener("click", function(){
    var imgSrc = image.getAttribute('src')
    if (imgSrc === "./IMG.png"){
        image.setAttribute('src', "./img2.png")
    } else {
        image.setAttribute('src', './IMG.png' )
    }
});
