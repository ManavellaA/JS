let nombre = prompt("Ingrese su Nombre");
if ((nombre === "") || (nombre === " ")){
    alert("Error al ingresar Nombre");
    nombre = prompt("Reingresar Nombre");
}
let apellido = prompt("Ingrese su Apellido");
if ((apellido === "") || (apellido === " ")){
    alert("Error al Apellido");
    apellido = prompt("Reingresar Apellido");
}
const dato1 = nombre + " " + apellido + " tu promedio es ";

//---------------------------------------------------------------------------

let pasada1 = prompt("Ingresa tu primera pasada usando punto para separar los minutos de los segundos");
if ((pasada1 === "") || (pasada1 === " ")){
    alert("Dato no ingresado");
    pasada1 = prompt("Reingresar primera pasada usando punto para separar los minutos de los segundos");
}
const tiempo1 = parseFloat(pasada1);

let pasada2 = prompt("Ingresa tu segunda pasada usando punto para separar los minutos de los segundos");
if ((pasada2 === "") || (pasada2 === " ")){
    alert("Dato no ingresado");
    pasada2 = prompt("Reingresar segunda pasada usando punto para separar los minutos de los segundos");
}
const tiempo2 = parseFloat(pasada2);

let pasada3 = prompt("Ingresa tu tercera pasada usando punto para separar los minutos de los segundos");
if ((pasada3 === "") || (pasada3 === " ")){
    alert("Dato no ingresado");
    pasada3 = prompt("Reingresar tercera pasada usando punto para separar los minutos de los segundos");
}
const tiempo3 = parseFloat(pasada3);

//-----------------------------------------------------------------------------

let promedio = (tiempo1 + tiempo2 + tiempo3)/3;

let msj 

if (promedio < 4.5){
    msj = ",lo cual Destacable";
}
else if (promedio <= 6){
    msj = ",lo cual Normal";
    }
else if (promedio <= 7){
    msj =",lo cual Regular";
        }    
else{
    msj = ",lo cual Malo" ;
}

const msjAlert = dato1 + promedio + " min/km " + msj;
alert(msjAlert);