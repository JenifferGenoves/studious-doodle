# This is from the crash course. The JS code may be slightly different

## Class Notes

### LOGGING OUTPUT

Es mejor utilizar console log, porque *alert('Hello Word')*; demora la regarga de los demás scripts.

console.log('Hello Word');
console.error('This is an error');
console.warn('This in an warning');

### VARIABLES

Var, let, const: Var ya no se ocupa, es muy obsoleto.
La diferencia entre const y let es la capacidad para poder reasignar un valor.

let age = 30;  *En este ejemplo se puede reasignar el valor*
age = 31;
console.log(age);

const age = 31; *En este ejemplo nos sale un error, porque no se puede reasignar*
age = 31;
console.log(age);

*Importante:*

1. Se recomienda usar const, ya que hace que el código sea más robusto, usar let solo cuando vamos a reasignar el valor.

let score;
score = 10;
console.log(score);
2. const debe ser inicializado con un valor, no podemos hacer lo siguiente:

const score;
La consola devuelve error, lo correcto es const score =10;
score = 10;

console.log(score);

### DATA TYPES - String, Number, Boolean, null, undefined and *symbol*

const name = 'John';
const age = '30';
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

1. Para saber el tipo de dato:
console.log(typeof name );   // String
console.log(typeof x);       // Devuelve Object, pero esto no es correcto.

CONCATENATION

const name = 'John';
const age = '30';

console.log('My name is ' + name + ' and I am ' + age);

// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');

const s = 'Hello World!';

console.log(s.length); // 12
console.log(s.toLocaleUpperCase()); //HELLO WORLD!
console.log(s.toLowerCase()); //hello world
console.log(s.substring(0, 5)); // Hello
console.log(s.substring(0, 5).toUpperCase()); // HELLO
console.log(s.split('')); // Divide la palabra en cada letra

*Example* const y = 'technology, computers, it, code';

console.log(y.split(', '));   // Asi obtenemos un array, que la podemos insertar en una base de datos.

### ARRAYS - Store multiple values in a variable

 Las matrices son variables que contienen varios valores

const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));

// Formas de crear matrices - Constructor de Matriz

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

// Podemos tener varios tipos de datos dentro de los arrays (matrices)

const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);

// Acceder a estos datos
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits[1]);

// Agregar datos a una matriz

A. Podemos asignarle mas elementos a la variable const, pero no podemos hacer esto : fruits[];
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits); // Devuelve Array con 4 elementos

B. Para agregar elementos sin un orden determinado ocupamos el método push.
*fruits.push['mangos'];*

C. Podemos asignarle mas elementos a la variable const
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos');
*fruits.unshift('strawberries');*

// Quitar datos de la matriz

A. Para quitar el último dato

fruits.pop();
console.log(Array.isArray(fruits));           // True

console.log(fruits.indexOf('oranges'));       // Nos dice la posición de orange
console.log(fruits);

### OBJECTS

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street:'50 main st',
        city: 'Boston',
        state: 'MA',
    }
}  

console.log(person); // Muestra todo el objeto
console.log(person.firstName); // John
console.log(person.firstName, person.lastName); // Accedemos a propiedades John Doe
console.log(person.hobbies[1]); // movies
console.log(person.address.city); //Boston

// Desestructuración

const { firstName, lastName } = person
console.log(firstName); //John

const { firstName, lastName, address:{ city }} = person
console.log(city); //Boston

// Agregar más propiedades
person.email = 'john@gmail.com';
console.log(person);              // Devuelve objeto con nueva propiedad

*Arrays objects*-

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true

    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true

    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false

    }

];

console.log(todos);            // Devuelve el array con todos los objetos
console.log(todos[1].text);    // Devuelve solo la propiedad text del Objeto2

// Formato Json es muy similar, solo que tiene comillas dobles, se usa para enviar datos a un servidor.

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

### LOOPS- BUCLES

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While  (Vieja escuela)
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;  // Si no le pongo i++, será un bucle sin fin
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
  <!-- console.log(` Todo ${i + 1}: ${todos[i].text}`); -->
}

// For...of Loop (Otra manera de recorrer un Array)

for(let todo of todos) {
  console.log(todo.text);
}

// For bucles for
for (let todo of todos) {
    console.log(todo);
}

for (let todo of todos) {
    console.log(todo.text); // Nos devuelve solo text
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);  // Recorremos array y nos devuelve solo text

}

### HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1;
});

/* Métodos de matriz de orden superior, es la mejor forma de hacer iteraciones con matrices

ForEach: Recorre la matriz, puede tomar varios parámetros
Map: Crea una nueva matriz a partir de una propiedad
Filter: Crea una nueva matriz basada en una condición */

todos.forEach(function(todo) {
    console.log(todo.text);

});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted); // Nueva matriz con 2 valores

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted); // Nueva matriz sono con la propiedad texto que cumple la condición.

### CONDITIONALS

// *Simple If/Else Statement*
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// *Switch*
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

// *Ternary operator / Shorthand if*
const z = color === 'red' ? 10 : 20;

### FUNCTIONS

function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

### ARROW FUNCTIONS

const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));

// OOP

// *Constructor Function*
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// *Get Birth Year*
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// *Get Full Name*
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// *Instantiate an object from the class*
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

### Built in constructors

const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'

// *ES6 CLASSES*
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // *Get Birth Year*
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // *Get Full Name*
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

-------------------------------
const x = 11;

if(x === 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}

const x = 5;

if(x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
}else {
    console.log('x is less than 10');
}

(OR ||)

const x = 4;
const y = 11;

if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10'); // Esto es mucho más limpio para anidar if if
}

// Anidando declaraciones if if

if (x > 5) {
    if (y > 10) {

    }
}

/* Operadores ternarios: Es como una declaración if abreviada y se usa mucho para asignar variables basado en una condición
then => (?) Operador Ternario

Si esto es cierto red, de los ocntraio(:) blue */

const x = 11;
const color = x > 10 ? 'red' : 'blue';

console.log(color);

const x = 9;
const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');

} // color is blue

const x = 9;
const color = 'green';

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue' :
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');

} // color is NOT red or blue

1. Funciones

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5,4); // 9

function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}

addNums(5,5); // Se sobreescribe y el resultado da 10

//Otra forma de escribirlo

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5)); // Se sobreescribe y el resultado da 10
2. Funciones

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5)); // Se sobreescribe y el resultado da 10

// Arrow Function: Ya no se ocupa la palabra function, nombramos como una variable

const addNums = (num1 = 1, num2 =1) => {
    return num1 + num2;
}

console.log(addNums(5, 5));

// Si es solo una expresión, lo podemos poner de la siguiente manera

const addNums = (num1 = 1, num2 =1) => {
    console.log(num1 + num2);
}
addNums(5, 5);

// O de esta manera (Solo en una linea)

const addNums = (num1 = 1, num2 =1) =>  console.log(num1 + num2);
addNums(5, 5);

// Si queremos devolver algo es mejor no hacerlo. Si necesitamos usar la palabra clave return para quitarnos ek registro de la consola

const addNums = (num1 = 1, num2 =1) =>  num1 + num2;

console.log(addNums(5, 5)); // Devuelve 10

// Si queremos devolver algo es mejor no hacerlo. Si necesitamos usar la palabra clave return para quitarnos ek registro de la consola

const addNums = (num1 = 1, num2 =1) =>  num1 + num2;

console.log(addNums(5, 5)); // Devuelve 10 no es necesario que coloque return porque me tirará un error, a menos que le vuelva a poner los corchetes.

// Si solo tenemos un parámetro, no necesitamos ()

const addNums = num1  =>  num1 + 5;

console.log(addNums(5));

<!-- Si solo tenemos un parámetro, no necesitamos () -->
const addNums = num1  =>  num1 + 5;
console.log(addNums(5));
todos.forEach((todo) => console.log(todo));
<!-- --------------------------- -->

<!-- --------------------------------------- -->

Constructores

Existen 2 formas: funciones con prototipos y podemos usar clases ES6
creamos la Función constructora Person : La P debe ser con mayúscula, los parámetros pasan las propiedades
que se desea establecer */

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = dob;
}

//Instantiate object : creamos instancia de un objecto, con la función constructora, con esto podemos crear muchas personas

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Doe', '23-3-1992');
// console.log(person1);
// console.log(person2);
console.log(person2.firstName);  // Jane

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
}

//Instantiate object : creamos instancia de un objecto, con la función constructora, con esto podemos crear muchas personas

// const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Doe', '3-23-1992');
// console.log(person1);
// console.log(person2);
console.log(person2.dob);  // Mon Mar 23 1992 00:00:00 GMT-0400 (hora estándar de Chile)

console.log(person2.dob.getFullYear());  // 1992

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object : creamos instancia de un objecto, con la función constructora, con esto podemos crear muchas personas

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Doe', '3-23-1992');

console.log(person1.getBirthYear());
console.log(person1.getFullName());

<!-- ---------------------------- -->

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
 // Prototipos

 Person.prototype.getBirthYear = function() {
     return this.dob.getFullYear();
 }

//Instantiate object : creamos instancia de un objecto, con la función constructora, con esto podemos crear muchas personas

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Doe', '3-23-1992');

console.log(person1.getBirthYear());
console.log(person1.getFullName());

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

 // Prototipos

 Person.prototype.getBirthYear = function() {
     return this.dob.getFullYear();
 }

console.log(person1);

<!-- ---------------------- -->
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.dob = new Date(dob);
}

 // Prototipos

 Person.prototype.getBirthYear = function() {
     return this.dob.getFullYear();
 }

 Person.prototype.getFullName = function() {
     return `${this.firstName} ${this.lastName}`;
 }
<!-- --------------------  -->
//Instantiate object : creamos instancia de un objecto, con la función constructora, con esto podemos crear muchas personas

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jane', 'Doe', '3-23-1992');

console.log(person2.getFullName());  //Accedo al prototipo
console.log(person1);

<!-- -------------- -->

ES6 Hace lo mismo, pero con una forma más bonita de escribirlo (sugar Sintax)
-Método es una función dentro de una clase llamada constructor
CLASS

class Person {
    constructor(firstName, lastName, dob);
}
<!-- ------------- -->
 ES6 Hace lo mismo, pero con una forma más bonita de escribirlo (sugar Sintax), y perimite a los programadores de otro lenguage manipular prototipos de una manera más fácil
Método es una función dentro de una clase llamada constructor
CLASS

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName =lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

### ELEMENT SELECTORS

Seleccionando cosas del DOM, podemos tomar elementos HTML y ponerlos en variables para trabajar con ellos

// En el browser tenemos un objeto que se llama window
console.log(window);
//alert(1);
window.alert(1);

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

*MANIPULATING THE DOM*-
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
<!-- ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; -->

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

*EVENTS*-

*Mouse Event*
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  <!-- ul.lastElementChild.innerHTML = '<h1>Changed</h1>'; -->
});

*Keyboard Event*
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});

### USER FORM SCRIPT

// *Put DOM elements into variables*
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// *Listen for form submit*
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
