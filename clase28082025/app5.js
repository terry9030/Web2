let optUser = prompt(`
    Selecciona una opcion
    1.- libros
    2.- peliculas
    3.- juegos    
`);

switch (optUser){
    case "1":
        console.log("Principuto");
        break;

    case "2":
        console.log("Matrix");
        break;

    case "3":
        console.log("FIFA");
        break;

    default:
        console.log("Opcion no valido");
        break; 
}