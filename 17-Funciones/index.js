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
