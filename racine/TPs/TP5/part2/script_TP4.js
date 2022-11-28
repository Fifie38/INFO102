var zone_dessin = document.getElementById("dessin");
var ctx = zone_dessin.getContext('2d');

const reset = document.getElementById("reset");

var en_dessin = false;

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

zone_dessin.onmousedown = function(e){
	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
}

zone_dessin.onmousemove = function(e){
		let x = e.offsetX;
		let y = e.offsetY;
		dessiner(x, y);
}

zone_dessin.onmouseup = function(e){
	en_dessin = false;
	ctx.stroke();
};

function dessiner(x,y){
	ctx.lineTo(x, y);
}

couleurs.onclick = function(e) {
	ctx.strokeStyle = e.target.getAttribute("alt");
}

traits.onclick = function(e) {
	if (e.target.getAttribute("alt") == "taille 1"){
		ctx.lineWidth = "3";
	} else if (e.target.getAttribute("alt") == "taille 2"){
		ctx.lineWidth = "2";
	}
	else {
		ctx.lineWidth = "1";
	}
}


reset.addEventListener("click", () => {
	window.location.reload();
})
