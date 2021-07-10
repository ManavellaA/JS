function calcImc(){
    $(`#btn_imc`).click(validacionIMC);
    $(`#calc_altura`).keydown(function(e) {if(e.keyCode === 13) {validacionIMC}});
    $(`#calc_peso`).keydown(function(e) {if(e.keyCode === 13) {validacionIMC}}); 
    function validacionIMC(){
        peso = parseInt($(`#calc_peso`).val());
        altura = parseInt($(`#calc_altura`).val());
        if( peso > 0 && altura > 0 ){
            let calc = peso / Math.pow((altura/100),2)
            let imc = calc.toFixed(2);
            $(`#div_imc`).attr(`class`, `row d-flex align-items-center justify-content-center`);
            $(`#div_imc`).html( 
            `<p>Tu IMC es: <strong style="color: #67b0d1;">${imc}</strong></p>
             <p>Segun la OMS clasificaria como:</p>
             <p style="color: #67b0d1";"><strong>${ImcClasificacion(imc)}</strong></p>`
            );
        }
        else{
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
    $(`#btn_pasada_reset`).click(resetPasada);
    $(`#btn_pasada`).click(calcPasada);
    $(`#calc_pasada`).keydown(function (e) {if(e.keyCode === 13) {calcPasada(e);}});
    function resetPasada(){
        $(`.div_ciclo`).html(
            `<button type="button" hidden id="btn_pasada_reset" class="btn btn-outline-primary">Reset</button>`
        );
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
        let pasada = $(`#calc_pasada`).val();
        pasada = parseFloat(pasada);
        if( !pasada || pasada == " "){
            alert("Dato ingresado no valido");
        }
        else{ 
                sumaCiclo = sumaCiclo + pasada;
                i++;
        let calc = sumaCiclo / i;
        promedio = calc.toFixed(2);
        $(`.div_ciclo`).html( 
        `<p>Ingresaste: <strong style="color: #67b0d1;">${i}</strong> Pasada/s</p>
        <p>Tu promedio es: <strong style="color: #67b0d1;">${promedio} min/km</strong></p>
        <button type="button" id="btn_pasada_reset" class="btn btn-outline-primary">Reset</button>`
        );
        $(`#calc_pasada`).val(``);
        localStorage.setItem("Promedios", sumaCiclo);
        }
    }
}
ciclo();

function calcFc(){
    $(`#btn_fc`).click(validacionFC);
    $(`#calc_fcEdad`).keydown(function (e) {if (e.keyCode === 13) {validacionFC(e);}});
    $(`#calc_fcReposo`).keydown(function (e) {if (e.keyCode === 13) {validacionFC(e);}});
    function validacionFC(e){
        e.preventDefault();
        fcEdad = parseInt($(`#calc_fcEdad`).val());
        fcRep = parseInt($(`#calc_fcReposo`).val());
        if( fcEdad > 0 && fcRep > 0 ){
            let fcMax = 208 - (0.7 * fcEdad);
            fcMax = Math.round(fcMax);
            let z50 = Math.round(((fcMax - fcRep) * 0.5) + fcRep);
            let z60 = Math.round(((fcMax - fcRep) * 0.6) + fcRep);
            let z70 = Math.round(((fcMax - fcRep)*0.7) + fcRep);
            let z80 = Math.round(((fcMax - fcRep) * 0.8) + fcRep);
            let z90 = Math.round(((fcMax - fcRep)*0.9) + fcRep);
            $(`.div_fc`).html(
                 `<div class="bx">
                 <p>FC Zona 1: <strong style="color: #67b0d1;">${z50} - ${z60} ppm</strong></p>
                 <p>FC Zona 2: <strong style="color: #67b0d1;">${z60} - ${z70} ppm</strong></p>
                 <p>FC Zona 3: <strong style="color: #67b0d1;">${z70} - ${z80} ppm</strong></p>
                 <p>FC Zona 4: <strong style="color: #67b0d1;">${z80} - ${z90} ppm</strong></p>
                 <p>FC Zona 5: <strong style="color: #67b0d1;">${z90} - ${fcMax} ppm</strong></p>
                 </div>`
            );
        }else{
            alert("No ingresaste todos los campos requeridos");
        }
    }
}
calcFc();

function mensaje(){
    $(`#paraContacto`).click(envioMensaje);
    function envioMensaje(e){
        e.preventDefault();
        let nombre = $("#contactoNombre").val();
        let email = $("#contactoEmail").val();
        let asunto = $("#contactoAsunto").val();
        let contenido = $("#contactoMensaje").val();
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
            $(`#form`).html( 
                 `<div class="col-lg-6 formContacto d-flex align-items-center justify-content-center">
                  <div class="row d-flex align-items-center justify-content-center">
                  <img src="./assets/img/Approved.png" alt="img_approved" class="img-fluid" style="width: 15vh;">
                  <p style="text-align: center; margin-top: 3vh"><strong>Gracias por escribirnos, en breve nos contactaremos.</strong></p>
                  </div>
                  </div>`
            )
        }
    }
}
mensaje();