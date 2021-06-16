//----Calculo de rutina de Running----
let user;
let peso;
let estatura;
logUser();
userData();

alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

let promedio;
dataCharge();

let msj; 
calif();

const msjAlert = user + " tu promedio es " + promedio + " min/km y tu desempeño clasifica como " + msj;
alert(msjAlert);
//------------------------------------

//--------------Objeto----------------
class dataUser{
    constructor(dato1, dato2, dato3, dato4, dato5){
        this.usuario = dato1;
        this.peso = dato2;
        this.estatura = dato3;
        this.promedio = dato4;
        this.desempeño = dato5
    }
    leer(){
        console.log(`El usuario ${this.usuario} pesa ${this.peso}Kg, mide ${estatura}cm y su desempeño calsifica como ${this.desempeño}`)
    }
}

let user1 = new dataUser(user, peso, estatura, promedio, msj);
user1.leer();
//------------------------------------

//-------------Funciones--------------
function logUser (){
    let nombre = prompt(`Ingresa un nombre de usuario`);
    while( ! nombre || nombre === " "){
        alert(`Dato no Ingresado`);
        nombre = prompt(`Ingresar un nombre de usuario`);
    }
    user = nombre
}

function userData(){
    let dato1 = prompt(`Ingresa tu peso actual (solo numeros)`);
    while( ! dato1 || dato1 === " "){
        alert(`Dato no Ingresado`);
        dato1 = prompt(`Ingresa tu peso actual (solo numeros)`);
    }
    parseInt(dato1);
    let dato2 = prompt(`Ingresa tu estatura en centimetros (solo numeros)`);
    while( ! dato2 || dato2 === " "){
        alert(`Dato no Ingresado`);
        dato2 = prompt(`Ingresa tu estatura en centimetros (solo numeros)`);
    }
    parseInt(dato2);

    peso = dato1
    estatura = dato2
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
        res = "Destacable";
    }
    else if (promedio <= 6){
        res = "Muy bueno";
        }
    else if (promedio <= 7){
        res ="Normal";
            }    
    else{
        res = "Malo" ;
    }

    msj = res
}