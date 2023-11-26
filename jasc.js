function mostrar() {
		if (window.screen.width >= 800){
			document.getElementById("sidebar").style.width = "17%";
			document.getElementById("sidebar").style.height = "100%";
  			document.getElementById("abrir").style.display = "none";
		}
		else{
			document.getElementById("sidebar").style.height = "100%";
  			document.getElementById("abrir").style.display = "none";
			document.getElementById("sidebar").style.width = "100%";
		}
	}
function mostrar2(){
	document.getElementById("ul2").style.height = "25%";
	document.getElementById("ul2").style.display = "inline";
	document.getElementById("bc2").style.display = "inline-block";
	document.getElementById("bc2").style.width = "32px";
}
function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("abrir").style.display = "inline";
	document.getElementById("trans").style.width = "0px";
	document.getElementById("trans").style.height = "0px";
	document.getElementById("trans").style.marginLeft = "0px";
}
function ocultar2(){
	document.getElementById("ul2").style.height = "0%";
	document.getElementById("ul2").style.display = "none";
	document.getElementById("bc2").style.display = "none";
}