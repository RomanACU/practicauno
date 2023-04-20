//crear un arreglo con tres elementos
let frutas = ["Mango", "Pera", "Naranja"];

//metodo forEach para recorrer el array
frutas.forEach((fruta) => console.log(fruta));

//mostrando todos los parametros que recive forEach

frutas.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//mostrando cuantos elementos tiene el arreglo creado por medio de la consola
console.log(frutas.length);
