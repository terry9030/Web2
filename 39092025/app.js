// Iniciamos con un arreglo para almacenar tareas
let tareas = [];

// Función para mostrar el menú de opciones
function mostrarMenu(){
    return parseInt( prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.- Ver todas las tareas.
        3.- Marcar tarea como completada.
        4.- Eliminar tarea.
        5.- Salir.
        "Elige una opción"
        `));
}

// Función para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Introduce el nombre de la tarea");
    if(nombre){
        // Crear un objeto tarea
        let tarea = {
            nombre: nombre,
            completado: false 
        };

        tareas.push(tarea);
        alert("¡La tarea se agregó de manera exitosa!")

    }else{
        alert("El nombre de la tarea no puede estar vacío");
    }
}

// Función para ver todas las tareas
function verTareas(){
    if( tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas:\n";
        tareas.forEach((tarea,index)=>{
            // Muestra el índice (posición + 1) de la tarea, el nombre y su estado
            mensaje+=`${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" :"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// Marcar tarea como completada
function marcarTareaCompletada( ){
    // Primero, mostramos las tareas para que el usuario sepa qué número elegir
    if (tareas.length === 0) {
        alert("No hay tareas para marcar como completadas.");
        return;
    }
    verTareas(); // Llama a verTareas para mostrar la lista antes de pedir el número

    let numero = parseInt(prompt( "Introduce el número de la tarea que deseas marcar como completada"));
    
    // Verifica si el número es válido (entre 1 y la longitud del array)
    if( numero > 0 && numero <= tareas.length ){
        
        // Accede a la tarea: el índice es (numero - 1)
        tareas[numero - 1].completado = true;
        alert(`La tarea "${tareas[numero - 1].nombre}" ha sido marcada como completada.`);
    }else{
        alert("Número de tarea inválido");
    }
}    

// Función para eliminar tarea
function eliminarTarea(){
    
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    // Mostrar la lista de tareas antes de eliminar para que el usuario elija
    verTareas(); 

    let numero = parseInt(prompt("Introduce el número de la tarea que deseas eliminar:"));

    // Verifica si el número es válido
    if (numero > 0 && numero <= tareas.length) {
        // Usa splice para eliminar 1 elemento en la posición (numero - 1)
        let tareaEliminada = tareas.splice(numero - 1, 1);
        alert(`La tarea "${tareaEliminada[0].nombre}" ha sido eliminada.`);
    } else {
        alert("Número de tarea inválido.");
    }
}

// Función principal para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1: 
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4: // Opción para Eliminar tarea
                eliminarTarea();
                break;
            case 5: // Opción para Salir
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
    alert("Programa finalizado");
}

// Iniciar programa
iniciarPrograma();