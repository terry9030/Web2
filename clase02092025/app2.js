/*
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

 console.log(random(1, 10));
*/

let minimo= parseInt(prompt("Ingresa el numero minimo: "));
let maximo= parseInt(prompt("Ingresa el numero maximo: "));

const num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

alert(num);