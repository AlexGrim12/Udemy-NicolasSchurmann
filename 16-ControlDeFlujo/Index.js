// Control de flujo

// Control de flujo IF

if (true) {
  console.log("Estoy dentro de un if");
}

const edad = 5;

if (edad > 5 && edad < 18) {
  console.log("El niño puede jugar");
} else {
  console.log("El niño no puede jugar :(");
}

console.log("Fin del programa");

// Control de flujo WHILE

let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

console.log("Terminando nuestro loop");

let z = true;
while (z) {
  console.log(z);
  z = false;
}

console.log("Terminando nuestro loop");

// Control de flujo SWITCH

switch (6) {
  case 1:
    console.log("Yo soy el caso 1");
    break;
  case 2:
    console.log("Chanchito feliz");
    break;
  case 3:
    console.log("Chanchito triste");
    break;

  default:
    console.log("No hay chanchitos");
    break;
}

// Control de flujo FOR

const numeros = [1, 2, "hola", 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
