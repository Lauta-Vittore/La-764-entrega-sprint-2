window.onload = function() {
    window.nombre = []; //creo array para guardar nombre     
    window.cant = [] ; //creo array para guardar cantidad gastada
}


function agregarNombre() {
    var total = 0; //variable para guardar cantidad todal gastada
    let pers = 0; // variable para guardar cantidad de personas
    let text; // variable paraguardar cadena de texto 
    let dato = document.getElementById('texto').value; //tomo el nombre ingresado y lo guardo en la variable dato
    let dat = parseInt(document.getElementById('numero').value); //tomo el numero ingresado y lo guardo en la variable dat
    
    if((dato != "") && (dat >= 0)){ //condicion: si dato es distinto de nada Y dat mayor o igual a cero
        nombre.push(dato); //guardo dato en el array nombre 
        cant.push(dat);// guardo dat en el array cant
    for(let i = 0; i< cant.length; i++){ 
        
        total += cant[i]; //suma de la cantidad total
        pers++; //conteo de cantidad de personas
        text = "<li>"  +nombre[i]+ ":" +" $" + cant[i] + "</li>"; // guardado de texto en text
    }

    let lista = document.getElementById('lista-nombres'); // indico donde insertar el texto
    lista.innerHTML += text; //inserto el texto en el html
    
    document.getElementById('el-resultado').innerHTML = "$"+total; //inserto el total en el html
    document.getElementById('aporta').innerHTML ="$"+ ((total/pers).toFixed(2)); //inserto y calculo el promedio y le indico que van solo 2 numeros despues de la coma
    document.getElementById("texto").value = ""; //limpiar celda de nombre      
    document.getElementById("numero").value = ""; //limpiar celda de cantidad
    repartir(total);
}else{
        aviso(); //si no se cumple la condicion alerta
    }
}

function aviso(){
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement);
    toastElement.show();
}