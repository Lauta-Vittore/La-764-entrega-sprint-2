window.onload = function() {
    window.nombre = [];
    window.cant = [] ;
}


function agregarNombre() {
    var total = 0;
    let pers = 0;
    let i = 0;
    let opcion;
    let dato = document.getElementById('texto').value;
    let dat = parseInt(document.getElementById('numero').value);
    
    if((dato != "") && (dat >= 0)){
        nombre.push(dato);
        cant.push(dat);
    for(let i = 0; i< cant.length; i++){
        
        total += cant[i];
        pers++;
        opcion = "<li>"  +nombre[i]+ ":" +" $" + cant[i] + "</li>";
    }

    let lista = document.getElementById('lista-nombres');
    lista.innerHTML += opcion;
    
    document.getElementById('el-resultado').innerHTML = "$"+total;
    document.getElementById('aporta').innerHTML ="$"+ ((total/pers).toFixed(2));
    document.getElementById("texto").value = "";
    document.getElementById("numero").value = "";
    repartir(total);
}else{
        alert("ingresar nombre y numero positivo");
    }
}

function repartir(total){
    let sobra;
    for(let i = 0 ; i < cant.length ; i++){
        
        if(cant[i]>total){
            alert(cant[i]);
            sobra = cant[i] - total; 
            document.getElementById('aporte').innerHTML = nombre[i] + "le sobran" + "$" + sobra;
            alert(nombre[i] + "le sobran" + "$" + sobra);
        }
    }
}