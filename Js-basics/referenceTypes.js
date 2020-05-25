let selectedColors = ['red', 'blue'];

//Agregamos un nuevo color al Array

selectedColors[2] = 'green';

console.log(selectedColors);
console.log(selectedColors[0]);

// (3) ["red", "blue", "green"]

// Así como el tamaño del array puede variar, lo mismo ocurre con el tipo. Ahora tenemos un objeto con 2 string  y 1 número
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors);

// Como los objetos así como el tamaño en el Array son dinámicos; tecnicamnete un Array es un Objeto en Js

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
typeof selectedColors // "object"

// Aqui podemos ver las propiedades definidas en Js. Cda vez que declaremos Arrays usando corchetes, ésta recibirá automaticamente estas propiedades, No las definimos
//Simplemente las heredan
// Ejemplo: Propiedad longitud

console.log(selectedColors.length);


// FUNTIONS

function greet (){
    console.log('Hello World');
}

greet();

// Asignamos un parámetro (name) a la función anterior:
// Fuera de la función la variable name (parámetro), no será accesible

function greet (name) {
    console.log('Hello ' + name);
    
}

greet('Jhon'); // Jhon es un argumento para la función saludo y name es un parámetro de la función saludo.

greet('Mary');

//Agregamos otro Parámetro

function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
    
}

greet('Jhon', 'Smith');


// TYPES OF FUNTIONS



