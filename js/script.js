let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let pasada1 = prompt("Ingresa tu primera pasada en formato m.ss");
let pasada2 = prompt("Ingresa tu segunda pasada en formato m.ss");
let pasada3 = prompt("Ingresa tu tercera pasada en formato m.ss");

const dato1 = nombre + " " + apellido;
const tiempo1 = parseFloat(pasada1);
const tiempo2 = parseFloat(pasada2);
const tiempo3 = parseFloat(pasada3);

let promedio = (tiempo1 + tiempo2 + tiempo3) / 3;

console.log("Promedio de" , dato1 , promedio, "min/km");
const msjAlert = "Tu promedio es " + promedio + " min/km";
alert(msjAlert);

