const frutas = ["Banana"];
frutas.push("Sandia");
console.log(frutas);

frutas.push("sandia");  
frutas.unshift("mango"); 
frutas.push("pera");  
frutas.unshift("meon"); 
frutas.push("fresa");  
frutas.unshift("mora"); 

console.log(frutas);

//completo
for(let frutas of frutas) {
    console.log(frutas);
}

//eleminar 
console.log("......................................")
frutas.pop()

for(let frutas of frutas) {
    console.log(frutas);
}


console.log("......................................")
frutas.shift()//elimina el principio
for(let frutas of frutas) {
    console.log(frutas);
}       

/*const puerto= 3306;
puerto = 3308;
console.log(puerto);
*/
