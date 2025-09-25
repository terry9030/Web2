var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

// ------------------------------
// Funciones de Usuario
// ------------------------------

function mostrarMenuPrincipal() {
    return (
        "----- MENÚ PRINCIPAL -----\n" +
        "1. Ver productos y agregar al carrito\n" +
        "2. Ver carrito y total\n" +
        "3. Eliminar producto del carrito\n" +
        "4. Menú de administrador\n" +
        "5. Salir\n"
    );
}

function mostrarProductos() {
    var menu = "----- PRODUCTOS DISPONIBLES -----\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Volver\n";
    return menu;
}

function agregarAlCarrito(index) {
    if (productos[index]) {
        carrito.push(productos[index]);
        alert('Producto "' + productos[index].nombre + '" agregado al carrito.');
    } else {
        alert("Producto no válido.");
    }
}

function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        var mensajeCarrito = "----- CARRITO DE COMPRAS -----\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTOTAL: $" + total;
        alert(mensajeCarrito);
    }
}

function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    var mensaje = "Seleccione el número del producto a eliminar:\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    mensaje += (carrito.length + 1) + ". Cancelar\n";

    var opcion = prompt(mensaje);
    if (opcion === null) return;

    opcion = Number(opcion);

    if (opcion >= 1 && opcion <= carrito.length) {
        var eliminado = carrito.splice(opcion - 1, 1)[0];
        alert('Producto "' + eliminado.nombre + '" eliminado del carrito.');
    } else {
        alert("Operación cancelada.");
    }
}



function menuAdministrador() {
    var opcion;
    do {
        opcion = prompt(
            "----- MENÚ ADMINISTRADOR -----\n" +
            "1. Ver catálogo\n" +
            "2. Agregar producto al catálogo\n" +
            "3. Eliminar producto del catálogo\n" +
            "4. Volver al menú principal\n"
        );
        if (opcion === null) return;

        opcion = Number(opcion);

        if (opcion === 1) {
            alert(mostrarProductos());
        } else if (opcion === 2) {
            var nombre = prompt("Ingrese el nombre del nuevo producto:");
            if (nombre === null) return;

            var precio = prompt("Ingrese el precio del producto:");
            if (precio === null) return;
            precio = Number(precio);

            if (nombre && !isNaN(precio) && precio > 0) {
                productos.push({ nombre: nombre, precio: precio });
                alert("Producto agregado con éxito.");
            } else {
                alert("Datos inválidos.");
            }
        } else if (opcion === 3) {
            var lista = "Seleccione producto a eliminar:\n";
            for (var i = 0; i < productos.length; i++) {
                lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
            }
            lista += (productos.length + 1) + ". Cancelar\n";

            var eliminar = prompt(lista);
            if (eliminar === null) return;

            eliminar = Number(eliminar);
            if (eliminar >= 1 && eliminar <= productos.length) {
                var eliminado = productos.splice(eliminar - 1, 1)[0];
                alert("Producto '" + eliminado.nombre + "' eliminado del catálogo.");
            } else {
                alert("Operación cancelada.");
            }
        } else if (opcion === 4) {
            alert("Saliendo del menú administrador...");
        } else {
            alert("Opción no válida.");
        }

    } while (opcion !== 4);
}



function ejecutarTienda() {
    var opcion;
    do {
        opcion = prompt(mostrarMenuPrincipal());
        if (opcion === null) break;

        opcion = Number(opcion);

        if (opcion === 1) {
            var opcionProducto;
            do {
                opcionProducto = prompt(mostrarProductos());
                if (opcionProducto === null) ;

                opcionProducto = Number(opcionProducto);
                if (opcionProducto >= 1 && opcionProducto <= productos.length) {
                    agregarAlCarrito(opcionProducto - 1);
                }
            } while (opcionProducto !== productos.length + 1);

        } else if (opcion === 2) {
            mostrarCarritoYTotal();

        } else if (opcion === 3) {
            eliminarDelCarrito();

        } else if (opcion === 4) {
            menuAdministrador();

        } else if (opcion === 5) {
            alert("Gracias por visitar la tienda.");

        } else {
            alert("Opción no válida.");
        }

    } while (opcion !== 5);
}

// Iniciar la tienda
ejecutarTienda();