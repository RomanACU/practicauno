//Cadena de caracteres con sus metodos

const cadena = "Carnaval toda la vida";

let resultado = cadena.length;

resultado = cadena.indexOf("a"); //busca el primer caracter en la cadena y si existe da la posición y si no existe da un -1

resultado = cadena.includes("vida"); //busca los caracteres y da falso o verdadero si existe

resultado = cadena.slice(6,11); //muestra la cadena de caracteres dependiendo de donde lo quieras 

resultado = cadena.substring(6,3); //muestra parte de la cadena dependiendo la seccion que se quiera mostrar

resultado = cadena.substr(6,3); //muestra los caracteres siguientes

resultado = cadena.charAt(9);

resultado = cadena.repeat(9);//repite la cadena de caracteres original las veces que se le asigne

resultado = cadena.split(" "); //divide la cadena de caracteres y crea un arreglo

resultado = cadena.startsWith("C"); //Da verdadero si empieza con el caracter que buscas y si no da falso, también detecta mayusculas y minusculas

resultado = cadena.endsWith("vida");// Si finaliza con lo que se busca da verdadero sino da falso tambien detecta mayusculas y minusculas

resultado = cadena.search("v");

resultado = cadena.toUpperCase(); //mayusculas

resultado = cadena.toLowerCase(); //minusculas

resultado = cadena.replace("vida","eternidad.");

console.log(resultado);


const texto = "ejemplo de una cadena";

let respuesta = texto.trim();

respuesta = texto.trimStart();

respuesta = texto.trimEnd();



console.log(respuesta);
