const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu edad? ", (respuesta) => {
  let edad = parseInt(respuesta);
  let esMayorDeEdad = edad >= 18;
  let tieneLicencia = true; // Cambia a false para probar

  if (esMayorDeEdad && tieneLicencia) {
    console.log("Puedes conducir");
  } else {
    console.log("No puedes conducir");
  }

  rl.close(); // Cierra la interfaz solo después de la respuesta
});
