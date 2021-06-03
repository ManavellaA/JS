let nombre = prompt("Ingrese su Nombre");
while((nombre === "") || (nombre === " ")){
    alert("Error al ingresar Nombre");
    nombre = prompt("Reingresar Nombre");
}

let apellido = prompt("Ingrese su Apellido");
while((apellido === "") || (apellido === " ")){
    alert("Error al ingresar Apellido");
    apellido = prompt("Reingresar Apellido");
}
const dato1 = nombre + " " + apellido + " tu promedio es ";

//-----Bucle de carga-----

let i = 1;
let pasada = 0;
let suma = 0;

alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

while (pasada >= 0){
    pasada = prompt(`Ingresa tu pasada n° ${i}`);
    if ((pasada === "") || (pasada === " ")){
        break
    }
    pasada = parseFloat(pasada); 
    suma = suma + pasada;
    i++;
}
i--;

let promedio = suma / i;

//------------------------

let msj; 

if (promedio < 4.5){
    msj = ",lo cual Destacable";
}
else if (promedio <= 6){
    msj = ",lo cual Muy bueno";
    }
else if (promedio <= 7){
    msj =",lo cual Normal";
        }    
else{
    msj = ",lo cual Malo" ;
}

const msjAlert = dato1 + promedio + " min/km " + msj;
alert(msjAlert);