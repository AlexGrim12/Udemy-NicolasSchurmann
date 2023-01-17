console.log("Hola mundo!! :)");

// Tipos de datos
// String: Cadena de texto 'a' 'hola' 'hola mundo maravilloso' 'chanchito feliz'
// Boolean: Verdadero o falso true false
// Null: Vacío (esta definido pero no tiene valor)
// Number: Números 1 2 3 4 5 6 7 8 9 10 "123" != 123
// Undefined: No definido (no esta definido)
// Object: Objeto {nombre: "Diego", edad: 30}

// Variables (var, let, const)
// var: Puede ser reasignada, puede ser redeclarada, tiene scope global y local, se puede usar antes de declararla, no es recomendable usarla, es la mas antigua, no es segura, no es estricta, no es de bloque

// let: Puede ser reasignada, no puede ser redeclarada, tiene scope global y local, no se puede usar antes de declararla, es la mas nueva, es segura, es estricta, es de bloque

// const: No puede ser reasignada, no puede ser redeclarada, tiene scope global y local, no se puede usar antes de declararla, es la mas nueva, es segura, es estricta, es de bloque

let miPrimeraVariable = "Mi primera variable!!";
console.log(miPrimeraVariable);

// Es diferente porque se convierte en un str

console.log("miPrimeraVariable");

// Reasignar valor o mutabilidad

miPrimeraVariable = "Esto ha cambiado!!";

let miBoolean = true;
console.log(miBoolean);

let miOtroBoolean = false;

let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -135;

console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef;
console.log(undef);

let nulo = null;
console.log(nulo);

// Objetos
// Es una agrupación de datos

//objeto vacío

const miPrimerObjeto = {};

//objeto

const miObjeto = {
  unNumero: 12, // Propiedad
  unString: "Hola mundo", // Propiedad
  unaCondicion: true, // Propiedad
};

console.log(miObjeto);

// Acceder a las propiedades de un objeto

console.log(miObjeto.unNumero);
console.log(miObjeto.unString);
console.log(miObjeto.unaCondicion);

// Acceder a las propiedades de un objeto con variables

const miProp = "unString";
console.log(miObjeto[miProp]);

// Arreglos
// Es una agrupación de datos ordenados por índices (posiciones)

// arreglo vacío
const arrVacio = [];

const miPrimerArreglo = [1, 2, "Hola", "Mundo", miObjeto, miObjeto.unString];

console.log(arrVacio, miPrimerArreglo);
console.log(miPrimerArreglo[0]);

//Agregar elementos a un arreglo

arrVacio.push(5);
arrVacio.push(3);
arrVacio.push(1);
arrVacio.push("Hola");

console.log(arrVacio);

// Eliminar elementos de un arreglo

arrVacio.pop();
console.log(arrVacio);

// Eliminar el primer elemento de un arreglo

arrVacio.shift();
console.log(arrVacio);

// Agregar un elemento al inicio de un arreglo

arrVacio.unshift(5);
console.log(arrVacio);

// Eliminar un elemento en una posición específica
//Dos elementos: el primero es la posición y el segundo es la cantidad de elementos a eliminar

arrVacio.splice(1, 2);
console.log(arrVacio);

const suma = 1 + 2;
const resta = 1 - 2;
const multiplicacion = 1 * 2;
const division = 1 / 2;
const modulo = 10 % 3;
