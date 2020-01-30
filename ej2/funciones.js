$(document).on("click", "#Insertar", function () {
    var selloTiempo = new Date().getTime();
    var ultimaFila = false;
    if($("table tr").length > 0){
        ultimaFila = $("table tr:last");
    }
    if(!ultimaFila || ultimaFila.children().length==7){
        $("table").append("<tr><td><img src='http://lorempixel.com/150/150/?"+selloTiempo+"'></td></tr>");
    }else{
        ultimaFila.append("<td><img src='http://lorempixel.com/150/150/?"+selloTiempo+"'></tr>");
    }
});

$(document).on("click", "#Eliminar", function () {
    var ultimaFila=false;
    if($("table tr").length > 0){
        ultimaFila = $("table tr:last");
    }
    //Si ultima fila es FALSE no quedan mas tr que borrar en la aplicion por lo cual no quedan mas imagenes :)
    if(ultimaFila){
        //Si el TR solo tiene un hijo borramos el TR
        if(ultimaFila.children().length==1){
                $("tr").remove("tr:last");
        //Si el TR tiene varios TD, borramos el ultimo TD (la ultima imagen)
        }else{
            $("td").remove("td:last");
        }
    }
});
