function iterar(arg1) {
  for (let i = 0; i < 5; i++) {
    console.log(arg1[i]);
  }
}

const numeros = [1, 2, "hola", 4, 5];
const nombres = ["perdro", "juan", "maria", "jose", "luis"];

iterar(numeros);
iterar(nombres);

function suma(a, b) {
  return a + b;
}

const resultadoSuma1 = suma(1, 2);
console.log("Resultado", resultadoSuma1);

const resultadoSuma2 = suma(3, 4);
console.log("Resultado", resultadoSuma2);

console.log("Resultado", suma(5, 6));

console.log("Resultado", suma(resultadoSuma1, resultadoSuma2));

function sumar(a, b, cd) {
  const resultado = a + b;
  cd(resultado);
}

sumar(1, 2, function (resultado) {
  console.log("Resultado", resultado);
});

//fat arrow function
const miFatArrowFunction = (a, b) => a + b;
const r = miFatArrowFunction(1, 2);
console.log(r);

const otraFatArrowFunction = (a, b) => {
  return a + b;
};
const r2 = otraFatArrowFunction(1, 2);
console.log(r2);

sumar(2, 3, function (resultado) {
  console.log("Resultado", resultado);
});
