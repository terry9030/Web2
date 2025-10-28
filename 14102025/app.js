let inventario =[];
function mostrarMnu(){
    return parseInt(prompt(
    `opciones disponibles 
    1.- agregar producto
    2 mostrar todos llet inventario = [];
function mostrarmenu(){
    return parseInt (prompt(
}
    ))
}os productos
    3. buscar producto por nombre
    4. salir
    elige una opcion:`

    ))
}

function agregarProducto(){
    let nombre = promop(" Ingresa el nombre del producto:");
    let cantiad = parseInt(prompt("ingrese la cantidad del producto"))
    let precio = parseFloat(prompt("Ingresa el precio del producto"))
    if (cantidad > 0&& precio>0){
        let producto={
            nombre: nombre,
            cantidad:cantidad,
            precio:precio
        };
        inventario.push(producto);
        alert("producto agregado");
    }else{
        alert("Cantidad y precio deben ser numero positivos")
    }
}


function mostrarProducto(){
    if(inventario.length  === 0){
        alert("Inventario vacio");
    }else{
        
    }
}