function logUser (){
    let nombre = prompt(`Ingresa un nombre de usuario`);
    while( ! nombre || nombre === " "){
        alert(`Dato no Ingresado`);
        nombre = prompt(`Ingresar un nombre de usuario`);
    }
    return user = nombre;
}
logUser();

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

    return peso = dato1, estatura = dato2;
}
userData();


function esqueleto(){
let eleccion = prompt(`Si queres sabes tu IMC escribe "IMC", si queres calificar tu Ciclo de Enternamiento escribe "Ciclo"`);

if(eleccion === "Ciclo" || eleccion === "ciclo" || eleccion === "CICLO"){
    ciclo();

    eleccion = prompt(`Si todavia queres saber tu IMC escribe "IMC", sino solo presiona Enter`);
    if(eleccion === "IMC" || eleccion === "imc" || eleccion === "Imc"){
    Imc();
    }
    else{
        imc = "N/A"
    };
}

else{
    Imc();
    eleccion = prompt(`Si todavia queres ingresar tu ciclo de entenamiento escribe "Ciclo", sino solo presiona Enter`);
        if(eleccion === "Ciclo" || eleccion === "ciclo" || eleccion === "CICLO"){
            ciclo();
        }
        else{
            promedio = "N/A";
            msj = "N/A";
        }
}

alert(`Gracias por visitar nuestro sitio`);
}
esqueleto();
//------------------------------------

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

    return promedio = res; 
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

    return msj = res;
}

function ciclo(){
    alert(`ingresa tus pasadas, cuando termines, solo presiona la tecla "Enter" dejando el campo vacio`);

    dataCharge(); 
    calif();

    msjAlert = user + " tu promedio es " + promedio + " min/km y tu desempeño clasifica como " + msj;
    alert(msjAlert);
}

function Imc(){
    imc = (peso * ((estatura/100) * (estatura/100)))/10;
    
    if(imc < 18.5){
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Bajo Peso"`)
    }
    else if(imc < 24.9){   
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Peso Normal"`)
    }
    else if(imc < 29.9){
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Sobrepeso"`)
    }
    else if(imc < 34.9){
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 1"`)
    }
    else if(imc < 39.9){
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 2"`)
    }
    else{
        alert(`Tu IMC es ${imc}Kg/m², Clasifica dentro de "Obesidad Tipo 3"`)
    }
}

//--------------Array----------------
const arrayUsuario = []

class dataUser{
    constructor(dato1, dato2, dato3, dato4, dato5, dato6){
        this.usuario = dato1;
        this.peso = dato2;
        this.estatura = dato3;
        this.promedio = dato4;
        this.desempeño = dato5;
        this.imc = dato6;
    }
    leer(){
        console.log(`El usuario ${this.usuario} pesa ${this.peso}Kg, mide ${estatura}cm, su IMC es de ${imc} y su desempeño calsifica como ${this.desempeño}`)
    }
}

arrayUsuario.push(new dataUser(user, peso, estatura, promedio, msj, imc))

for (let usuario of arrayUsuario){
    document.write("<br>");
    document.write(`<div><p>Nombre de Usuario: ${usuario.usuario}</p>`);
    document.write(`<p>Peso: ${usuario.peso}</p>`);
    document.write(`<p>Estatura: ${usuario.estatura}</p>`);
    document.write(`<p>Promedio: ${usuario.promedio}</p>`);
    document.write(`<p>Desempeño deportivo: ${usuario.desempeño}</p>`);
    document.write(`<p>IMC: ${usuario.imc}</p></div>`);
    document.write("<br>");
    usuario.leer();
}

//------------------------------------