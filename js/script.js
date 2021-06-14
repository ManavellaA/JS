/*La idea de mi proyecto es una app que sirva para deportes y salud,
en la que se puedan calcular el IMC, ciclos de entrenamiento, FC Maxima, Running, Calorias, Etc.*/

//En esta primera entrega solo coloco el caluculo de una rutina de Running pero proximamente agregare otras funcionalidades mas.


//----Calculo de rutina de Running----
let user;
logData();

alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

let promedio = 0;
dataCharge();

let msj = null; 
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

    return user = res;
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
    
    promedio = suma / i;
}

function calif(){
    let msj
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
}