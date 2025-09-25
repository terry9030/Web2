var productos = [
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalón', precio: 500},
    {nombre: 'zapatos', precio: 400},
    {nombre: 'sombrero', precio: 200}
];

var carrito = [];

function mostrarMenu() {
    let mensaje = "Esta página dice\n\nSeleccione un producto para agregar al carrito:\n\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1)} - $${producto.precio}\n`;
    });
    mensaje += "5. Ver Carrito y Total\n";
    mensaje += "6. Salir";
    return mensaje;
}

function agregarAlCarrito() {
    let opcion = prompt(mostrarMenu());
    opcion = parseInt(opcion);

    if (opcion >= 1 && opcion <= productos.length) {
        let productoSeleccionado = productos[opcion - 1];
        carrito.push(productoSeleccionado);
        alert(`${productoSeleccionado.nombre.charAt(0).toUpperCase() + productoSeleccionado.nombre.slice(1)} agregado al carrito.`);
    } else if (opcion === 5) {
        mostrarCarrito();
    } else if (opcion === 6) {
        alert("Saliendo del programa.");
        return false;
    } else {
        alert("Opción no válida. Por favor, intente de nuevo.");
    }
    return true;
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    let total = 0;
    let mensaje = "Contenido del carrito:\n\n";
    carrito.forEach(item => {
        mensaje += `${item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1)} - $${item.precio}\n`;
        total += item.precio;
    });
    mensaje += `\nTotal: $${total}`;
    alert(mensaje);
}
/*
    var miCarro = new Object();
    miCarro.marca  = 'Toyota';
    miCarro.modelo = 'supra';
    miCarro.color = 'rojo';

    console.log(miCarro);
*/
/*
    //Ejemplo de arreglo, no es lo mismo que un Objeto
    let frutas=["banana","manzana","pera"];
    console.log(frutas);
*/

/*
    var miCarro = {
        marca: 'Toyota',
        modelo: 'supra',
        color: 'rojo'
    }

    console.log(miCarro);
*/


var perro = {
    nombre: 'Shayla',
    color: 'Sal pimienta',
    edad: 28,
    talla: 'mediana',
    enemigos: ["Otro perro","gatos","baños"]
}

console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos[1]);
//agregar
perro.raza='schnauzer';

console.log(perro);

//leer
console.log(perro.edad);

//actualizar
perro.edad= 35;
console.log(perro.edad);


//eliminar 
delete perro.edad;
console.log(perro);
