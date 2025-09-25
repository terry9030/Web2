//areglo vacio
let nombre = [];

// funcion para arreglar el nombre
function agregarNombre(){
    let nombre = prompt ("ingresa el nombre");

if (nombre){
    nombre.push(nombre);
    alert(`Nombre es  $(nombre) agregado exitosamente`)
} else{
alert("El nombre esta vacio ;"); 
}
}

