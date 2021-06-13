/*La idea de mi proyecto es una app que sirva para deportes y salud,
en la que se puedan calcular el IMC, ciclos de entrenamiento, FC Maxima, Running, Calorias, Etc.*/

//En esta primera entrega solo coloco el caluculo de una rutina de Running pero proximamente agregare otras funcionalidades mas.


//----Calculo de rutina de Running----
let nombre = "Nombre"
let apellido = "Apellido"
checkData(nombre);
checkData(apellido);
const dato = nombre + " " + apellido + " tu promedio es ";

alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

let promedio = 0;
dataCharge();

let msj = null; 
calif();

const msjAlert = dato + promedio + " min/km " + msj;
alert(msjAlert);
//------------------------------------

//-------------Funciones--------------
function checkData (par1){
    let variable = par1
    par1 = prompt(`Ingresar ${variable}`);
    while( ! par1 || par1 === " "){
        alert(`${variable} mal Ingresado`);
        par1 = prompt(`Reingresar ${variable}`);
    }
    if(variable == "Nombre"){
        nombre = par1
    }
    else{
        apellido = par1
    }
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