JAVASCRIPT BASIC FOR BEGINNERS

# SECTION 1 GETTING STARTED

El código puede escribirse en el HTML, dentro de los script. Pero en el mundo real se separan los archivos.
Código de HTML (CONTENIDO) y JS (COMPORTAMIENTO)

### SEPARATION OF CONCERNS

Cuando separamos los archivos, debemos hacer referencia al Js, con src=index.js

### SEPARATION IN NODE
Para ejecutar el código JS en consola desde vs, escribimos lo siguiente: 
*  node nombreDeArchivo.js

# SECTION 2 BASICS

### VARIABLES

En programación, se usan variables para almacenar datos temporalmente en la memoria de la computadora. Así que almacenamos nuestros datos en algún lugar y le damos un nombre a esa ubicación de memoria. Y con este nombre, podemos leer los datos en la ubicación dada en el futuro. 

 Aquí hay una metáfora:  Piensa en las cajas que usas para organizar tus cosas. 
 Pones tus cosas en varias cajas y pones una etiqueta en cada caja. Con esto, puedes encontrar fácilmente tus cosas. 
 
 Una variable es como una caja.

Lo que ponemos dentro del cuadro es el valor que asignamos a una variable, esos son los datos, y la etiqueta que ponemos en el cuadro es el nombre de nuestra variable.

Entonces en index.js, voy a declarar una variable. 
Antes se usaba la palabra var para declarar una variable, pero hay problemas con var como se descubrirá más adelante. 
Entonces, desde ES6,la mejor práctica es usar la palabra clave let para declarar una variable. 

Ahora, debemos darle a esta variable un nombre o un identificador, y esto es como la etiqueta que ponemos en una caja. Así que voy a llamar a este nombre, y finalmente tenemos que terminar esta declaración con un punto y coma. Ahora registremos esto en la consola y veamos qué obtenemos.  

Por defecto, el valor de las variables que definimos en JavaScript, no están definidos. Ahora bien, podemos opcionalmente inicializar esta variable. 

Configurando variable como String. Un string es una secuencia de caracteres, como 'Mosh'. Tenga en cuenta que estoy
usando comillas simples, también podemos usar comillas dobles, los diferentes desarrolladores tienen diferentes propósitos, pero es más común usar comillas simples para declarar cadenas, en JavaScript. 
Ahora, cuando guarda los cambios, en lugar de indefinidos, vemos a Mosh en la consola. Entonces:

Hemos declarado una variable llamada nombre, y la hemos establecido en este valor, en esta cadena. Ahora, tenemos algunas reglas para nombrar estas variables. Aquí están las reglas,

1. No pueden ser una palabra clave reservada. En JavaScript tenemos palabras clave reservadas, let es una de ellas. También tenemos if,
l's var, etc. Ahora no tiene que memorizar esta lista, si intenta usar uno de estos nombres, obtendrá un error. Por ejemplo, si
cambio esto a if note este subrayado rojo.

Esto indica que este no es un identificador válido, ¿de acuerdo?

2. Deben ser significativos. Queremos tener nombres significativos, como etiquetas significativas. He visto desarrolladores que
usan nombres como a o b o a1 o no sé, x. Estos nombres de variables no nos dan ninguna idea de cuál es el propósito de estas variables. ¿Qué tipo de datos estamos almacenando en esa ubicación de memoria? Así que siempre use nombres significativos y descriptivos. 

3. No pueden comenzar en un número. Entonces no podemos tener una variable como 1 nombre. Pero nuevamente, volviendo a la misma regla, ¿por qué querría llamar a una variable 1name? No tiene sentido, ¿verdad?

4. No pueden contener un espacio o guión.

Entonces, si tiene varias palabras,debemos unirlas. Aquí hay un ejemplo, imaginemos que queremos declarar una variable llamada nombre. Entonces firstName y tenga en cuenta que aquí estoy usando la notación de #camello, por lo que la primera letra de la primera palabra debe estar en minúscula, y la primera letra de cada palabra después debe estar en mayúscula. Esto es lo que llamamos notación de camello, que es la convención que usamos en JavaScript para nombrar nuestras variables. Otra cosa que debes saber sobre estos nombres de variables es que distinguen entre mayúsculas y minúsculas, por lo que si declaro otra variable, llámalo primer nombre, pero en mayúscula f, estas dos variables son diferentes. Pero como te dije antes, si te apegas al camello (? ), terminarás con un nombre de variable como este. 

Y finalmente, lo último que necesita saber sobre estas variables es que si desea declarar múltiples variables, hay dos formas de hacerlo. Puede declararlos en una línea y separarlos con una coma, por lo tanto, nombre y apellido. Ahora, en este caso, no he inicializado ninguna de estas variables, ambas están indefinidas, opcionalmente puedo inicializar 1 o ambas, por lo que puedo configurar esto en Mosh, y puedo dejar lastName indefinido o configurarlo en mi última nombre, Hamedani, pero la mejor práctica moderna es declarar cada variable en una sola línea. Entonces terminamos esta primera declaración con un punto y coma, y declaro la segunda variable en una nueva línea. Esa es la mejor práctica moderna. A continuación vamos a ver las constantes.


### CONSTANTS

No se pueden reasignar.
Cuando quiero reasignar, utilizo Let.

#TIPOS DE VALORES QUE SE PUEDEN ASIGNAR A LAS VARIABLES:

EN JAVASCRIPT TENEMOS 2 CATEGORÍAS DE TIPOS

1) PRIMITIVE TYPES OR VALUE TYPES
2) REFERENCE TYPES

### PRIMITIVE TYPES

### 1)STRING

 let name ='Mosh'; // String Literal

### 2)NUMBER

let age = 30; // Number Literal

### 3) BOOLEAN

Booleans: true or false
Se usan cuando queremos tener algo de lógica. Ejem: Si se aprueba el pedido, entonces debe enviarse.

let isApproved =true; // Boolean Literal (false)


### 4) UNDEFINED

let firstName; // value is undefined

// Podemos establecerla explícitamente como undefined

let firstName = undefined;


### 5) NULL

Ocupamos null cuando queremos borrar explícitamente el valor de una variable.

let lastName = null; 

### TIPOS DE LENGUAJES

En programación tenemos 2 tipos de leguajes

#### STATIC LANGUAGE (STATICALLY-TYPED)

cuando declaramos una variable, se establece el tipo de la variable y no se puede cambiar en el futuro.

string name = 'John';

#### DYNAMIC LANGUAGE (DYNAMICALLY-TYPED)

En un lenguaje dinámico como JavaScript, el tipo de una variable puede cambiar en tiempo de ejecución. 

let name = 'John';


### REFERENCE TYPES

### OBJECT
### ARRAY (MATRIZ)
### FUNCTION

### 1) OBJECT
Un objeto es como una persona, tiene  nombre, edad, dirección, etc. (PROPIEDADES DE UNA PERSONA).


Cuando tratamos con múltiples variables relacionadas, podemos poner estas variables denetro de un objeto.

Ejemplo:

Tenemos 2 variables altamente relacionadas. Son parte de la representación de una persona.
-Nombre
-Edad

let name = 'Mosh';
let age = 30;

* En lugar de declarar 2 variables, declaramos el objeto persona. Así podemos hacer referencia al objeto persona, el lugar de las variables.

DECLARANDO OBJ PERSONA

Usamos let o const (Si no queremos reasignar el objeto persona)

let person = { 
    Agregamos 1 o más pares de valores.
    Claves: son las que llamamos propiedades del objeto

}

let person = {
    name: 'Mosh',
    age: 30
};

console.log(person);

HAY 2 FORMAS DE TRABAJAR CON ESTAS PROPIEDADES:

* QUEREMOS CAMBIAR EL NOMBRE DE LA PERSONA, POR LO QUE DEBEMOS ACCDEDER A LA PROPIEDAD NAME

1) DOT NOTATION

person.name = 'John';
console.log(person.name);

2) BRACKET NOTATION

person['name'] = 'Mary';
console.log(person.name);

* ¿ Cuál enfoque es el mejor?
- dot.log: Es más concisa y corta, debe ser la predeterminada.
- Bracket Notation: Generalmente se usa cuando no conocemos la propiedad de destino hasta el tiempo de ejecución.

let selection = 'name';
person[selection] = 'Mary'

### 2) ARRAYS

Podemos tratar con listas de Objetos, por ejemplo: 

Productos de un carrito de compras
Lista de colores que un usuario ha seleccionado.

En estas situaciones, utilizamos  un Array (Matriz), para almacenar esa lista.

let selectedColors = ['red', 'blue'];
console.log(selectedColors)

console.log(selectedColors[0])

//Javascript es un lenguaje dinámico, por lo tanto el tipo de variable puede cambiar en timepo de ejecución.

* El MISMO PRINCIPIO SE APLICA A LOS ARRAYS. ES DECIR, LA LONGITUD DEL ARRAY ASI COMO EL TIPO DE OBJETO DE UN ARRAY, SON DINÁMICOS.

* Un array es una estructura de datos que usamos para representar una lista de artículos.


### 3) FUNCTIONS
* Una función es un conjunto de declaraciones que realiza una tarea o calcula un valor.
SON UNO DE LOS BLOQUES DE CONSTRUCCIÓN FUNDAMENTALES EN JS

Sintaxis para declarar Funciones:

FUNCTION + NOMBREASIGNADO + () +  {
    Dentro de las llaves tenemos el cuerpo de la función: Aquí agregamos todas las declaraciones para definir algún tipo de Lógica en nuestra aplicación.

}

Las funciones pueden tener entradas y éstas pueden cambiar el comportamiento de la función.


function greet (name){
    console.log('Hello World');
}

greet();

//Gregamos una variable dentro del paréntesis(name; esta variable recibe el nombre de parámetro.

* PARÁMETRO; ES LO QUE TENEMOS AQUÍ EN EL MOMENTO DE LA DECLARACIÓN.
* ARGUMENTO; ES EL VALOR REAL DE SUMINISTRO PARA ESE PARÁMETRO

// Asignamos un parámetro (name) a la función anterior:
// Fuera de la función la variable name (parámetro), no será accesible

function greet (name) {
    console.log('Hello ' + name);
}

greet('Jhon'); // Jhon es un argumento para la función saludo y name es un parámetro de la función saludo.

greet('Mary')Agregamos otro parámetro como lastName');

* Una función puede tener múltiples parámetros, entonces aquí podemos tener parámetros separados por punto y coma 


//Agregamos otro Parámetro

function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
    
}

greet('Jhon', 'Smith');

### 3.1) TYPES OF FUNCTIONS



