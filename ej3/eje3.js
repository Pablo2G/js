function muestra_oculta(id){
	if (document.getElementById){ //se obtiene el id
		var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
		el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
	muestra_oculta('homer');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
	muestra_oculta('marge');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
	muestra_oculta('bart');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
	muestra_oculta('lisa');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
	muestra_oculta('maggie');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}