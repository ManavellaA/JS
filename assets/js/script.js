function calcImc(){
    document.getElementById("btn_imc").addEventListener("click", validacionIMC);
    document.getElementById("calc_altura").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionIMC();
        }
        });
    document.getElementById("calc_peso").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionIMC();
        }
        });
    function validacionIMC(){
        peso = parseInt(document.getElementById("calc_peso").value);
        altura = parseInt(document.getElementById("calc_altura").value);
        if( peso > 0 && altura > 0 ){
            let calc = (peso * ((altura/100) * (altura/100)))/10;
            let imc = calc.toFixed(2);
            document.getElementById("div_imc").setAttribute("class", "row d-flex align-items-center justify-content-center");
            document.getElementById("div_imc").innerHTML = 
            `<p>Tu IMC es: <strong style="color: #67b0d1;">${imc}</strong></p>
             <p>Segun la OMS clasificaria como:</p>
             <p style="color: #67b0d1";"><strong>${ImcClasificacion(imc)}</strong></p>`
        }else{
            alert("No ingresaste todos los campos requeridos");
        }
    }
    function ImcClasificacion(valor){
        if(valor < 18.5){
            return "Bajo Peso"
        }
        else if(valor < 24.9){   
            return "Peso Normal"
        }
        else if(valor < 29.9){
            return "Sobrepeso"
        }
        else if(valor < 34.9){
            return "Obesidad Tipo 1"
        }
        else if(valor < 39.9){
            return "Obesidad Tipo 2"
        }
        else{
            return "Obesidad Tipo 3"
        }
    }
}
calcImc();

let i = 0;
function ciclo(){
    document.getElementById("btn_pasada_reset").addEventListener("click", resetPasada);
    document.getElementById("btn_pasada").addEventListener("click", calcPasada);
    document.getElementById("calc_pasada").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            calcPasada(e);
        }
        });
    function resetPasada(){
        console.log("llegue hasta aqui");
        document.querySelector(".div_ciclo").innerHTML =
            `<button type="button" hidden id="btn_pasada_reset" class="btn btn-outline-primary">Reset</button>`;
    }
    function calcPasada(e){
        e.preventDefault();
        let sumaCiclo = 0;
        let promedio;
        if(i !== 0){
            let promRecuperado = localStorage.getItem("Promedios");
            sumaCiclo = promRecuperado
            sumaCiclo = parseFloat(sumaCiclo);
        }
        let pasada = document.getElementById("calc_pasada").value;
        pasada = parseFloat(pasada);
        if( !pasada || pasada == " "){
            alert("Dato ingresado no valido");
        }
        else{ 
                sumaCiclo = sumaCiclo + pasada;
                i++;
        let calc = sumaCiclo / i;
        promedio = calc.toFixed(2);
        document.querySelector(".div_ciclo").innerHTML = 
        `<p>Ingresaste: <strong style="color: #67b0d1;">${i}</strong> Pasada/s</p>
        <p>Tu promedio es: <strong style="color: #67b0d1;">${promedio} min/km</strong></p>
        <button type="button" id="btn_pasada_reset" class="btn btn-outline-primary">Reset</button>`;
        document.getElementById("calc_pasada").value = "";
        localStorage.setItem("Promedios", sumaCiclo);
        }
    }
}
ciclo();

function calcFc(){
    document.getElementById("btn_fc").addEventListener("click", validacionFC);
    document.getElementById("calc_fcEdad").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionFC(e);
        }
        });
    document.getElementById("calc_fcReposo").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionFC(e);
        }
        });
    function validacionFC(e){
        e.preventDefault();
        fcEdad = parseInt(document.getElementById("calc_fcEdad").value);
        fcRep = parseInt(document.getElementById("calc_fcReposo").value);
        if( fcEdad > 0 && fcRep > 0 ){
            let fcMax = 208 - (0.7 * fcEdad);
            fcMax = Math.round(fcMax);
    
            let z50 = Math.round(((fcMax - fcRep) * 0.5) + fcRep);
            let z60 = Math.round(((fcMax - fcRep) * 0.6) + fcRep);
            let z70 = Math.round(((fcMax - fcRep)*0.7) + fcRep);
            let z80 = Math.round(((fcMax - fcRep) * 0.8) + fcRep);
            let z90 = Math.round(((fcMax - fcRep)*0.9) + fcRep);
            document.querySelector(".div_fc").innerHTML = 
                 `<div class="bx">
                 <p>FC Zona 1: <strong style="color: #67b0d1;">${z50} - ${z60} ppm</strong></p>
                 <p>FC Zona 2: <strong style="color: #67b0d1;">${z60} - ${z70} ppm</strong></p>
                 <p>FC Zona 3: <strong style="color: #67b0d1;">${z70} - ${z80} ppm</strong></p>
                 <p>FC Zona 4: <strong style="color: #67b0d1;">${z80} - ${z90} ppm</strong></p>
                 <p>FC Zona 5: <strong style="color: #67b0d1;">${z90} - ${fcMax} ppm</strong></p>
                 </div>`
        }else{
            alert("No ingresaste todos los campos requeridos");
        }
    }
}
calcFc();

function mensaje(){
    //Al no tener donde enviar el mensaje lo almaceno en el local Storage
    document.getElementById("paraContacto").addEventListener("click", envioMensaje);
    function envioMensaje(e){
        e.preventDefault();
        let nombre = document.getElementById("contactoNombre").value;
        let email = document.getElementById("contactoEmail").value;
        let asunto = document.getElementById("contactoAsunto").value;
        let contenido = document.getElementById("contactoMensaje").value;
        if(!nombre || !email || !asunto || !contenido){
            alert("Te falta completar alguno de los campos requeridos");
        }
        else{
            class envio{
                constructor(dato1, dato2, dato3, dato4){
                    this.usuario = dato1;
                    this.email = dato2;
                    this.asunto = dato3;
                    this.contenido = dato4;
                }
            }
            const contacto = new envio(nombre, email, asunto, contenido)
            const mensaje = JSON.stringify(contacto);
            localStorage.setItem("ContactoUsuario", mensaje);
            document.getElementById("form").innerHTML = 
                 `<div class="col-lg-6 formContacto d-flex align-items-center justify-content-center">
                  <div class="row d-flex align-items-center justify-content-center">
                  <img src="./assets/img/Approved.png" alt="img_approved" class="img-fluid" style="width: 15vh;">
                  <p style="text-align: center; margin-top: 3vh"><strong>Gracias por escribirnos, en breve nos contactaremos.</strong></p>
                  </div>
                  </div>`
        }
    }
}
mensaje();