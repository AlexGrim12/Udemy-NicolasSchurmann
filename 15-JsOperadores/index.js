// console.log(suma, resta, multiplicacion, division, modulo);

let num = 5;
console.log(num);
num++;
num++;
num++;
num++;
num++;
console.log(num);
num--;
num--;
num--;
num--;
num--;
console.log(num);
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);

//Operadores de comparación

const resultado1 = 5 === 6;

console.log(resultado1);

const resultado2 = 5 === "5";

console.log(resultado2);

const resultado3 = 5 < 6;

console.log(resultado3);

const resultado4 = 5 > 5;

console.log(resultado4);

const resultado5 = 5 <= 5;

console.log(resultado5);

const resultado6 = 5 >= 4;

console.log(resultado6);

const resultado7 = 5 !== 6;

console.log(resultado7);

const resultado8 = 5 != "5";

console.log(resultado8);

//Operadores lógicos
// or ||, and &&, not !

const resultadoOr = false || false || false || false || "Hola" || "Mundo";

console.log(resultadoOr); //la única manera es que todos los valores sean falsos para ser false

const resultadoAnd = true && true && true && true && false;

console.log(resultadoAnd);

const resultadoNot = !true;

console.log(resultadoNot);
