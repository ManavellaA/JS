//----Calculo de rutina de Running----
let user;
logData();

alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

let promedio;
dataCharge();

let msj; 
calif();

const msjAlert = user + " tu promedio es " + promedio + " min/km " + msj;
alert(msjAlert);
//------------------------------------

//-------------Funciones--------------
function logData (){
    let nombre = prompt(`Ingresar Nombre`);
    while( ! nombre || nombre === " "){
        alert(`Nombre mal Ingresado`);
        nombre = prompt(`Reingresar Nombre`);
    }
    let apellido = prompt(`Ingresar Apellido`);
    while( ! apellido || apellido === " "){
        alert(`Apellido mal Ingresado`);
        apellido = prompt(`Reingresar Apellido`);
    }
    let res = nombre + " " + apellido;

    user = res;
}

function dataCharge(){
    let pasada = 0;
    let i = 1;
    let suma = 0;
    while (pasada >= 0){
        pasada = prompt(`Ingresa tu pasada n° ${i}`);
        if (! pasada || pasada === " "){
            break
        }
        pasada = parseFloat(pasada); 
        suma = suma + pasada;
        i++;
    }
    i--;
    let res = suma / i;

    promedio = res; 
}

function calif(){
    if (promedio < 4.5){
        res = ",lo cual Destacable";
    }
    else if (promedio <= 6){
        res = ",lo cual Muy bueno";
        }
    else if (promedio <= 7){
        res =",lo cual Normal";
            }    
    else{
        res = ",lo cual Malo" ;
    }

    msj = res
}