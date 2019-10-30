//Obtenemos todos los elementos con la clase "enlace"
var elementos = document.getElementsByClassName("enlace");

//Recorremos el arreglo con todos los elementos, asignando a cada uno los listener.
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("mouseover", porencima);
    elementos[i].addEventListener("mouseout", alquitar);
}

//Al usar this hacemos referencia al objeto que invoco la funcion
function porencima() {
    this.style.color = "white";
}

function alquitar() {
    this.style.color = "black";
}