const userArray = [{user:"ANDRES", pass:"ANDRES"}, {user:"JUAN", pass:"JUAN"}, {user:"PEDRO", pass:"PEDRO"}]
// localStorage.setItem("Usuarios", JSON.stringify(userArray));

const dataArray = JSON.parse(localStorage.getItem("DatosUsuario"))

// localStorage.setItem("DatosUsuario", JSON.stringify(dataArray));

//-----------------------------------------------------------------------------//
//---------------------------- Calculadora de IMC  ----------------------------//
//-----------------------------------------------------------------------------//

function calcImc(){
    $(`#btn_imc`).click(validacionIMC);
    $(`#calc_altura`).keydown(function(e) {if(e.keyCode === 13) {validacionIMC}});
    $(`#calc_peso`).keydown(function(e) {if(e.keyCode === 13) {validacionIMC}}); 
}
calcImc();

function validacionIMC(){
    peso = parseInt($(`#calc_peso`).val());
    altura = parseInt($(`#calc_altura`).val());
    if( peso > 0 && altura > 0 ){
        let calc = peso / Math.pow((altura/100),2)
        let imc = calc.toFixed(2);
        $(`#div_imc`).fadeOut("fast");
        setTimeout(() => {
            $(`#div_imc`).html( 
                `<p>Tu IMC es: <strong style="color: #67b0d1;">${imc}</strong></p>
                 <p>Segun la OMS clasificaria como:</p>
                 <p style="color: #67b0d1";"><strong>${ImcClasificacion(imc)}</strong></p>`
            )
            $(`#div_imc`).fadeIn("slow")}, 200);
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

//---------------------------------------------------------------------------------//
//---------------------------- Calculadora de pasadas  ----------------------------//
//---------------------------------------------------------------------------------//

let i = 0;
function ciclo(){
    $(`#btn_pasada`).click(calcPasada);
    $(`#calc_pasada`).keydown(function (e) {if(e.keyCode === 13) {calcPasada(e);}});
 
}
ciclo();

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
    resetPasada();
}

function resetPasada(){
    $(`#btn_pasada_reset`).click(() => {
        $(`.div_ciclo`).html(
            `<button type="button" hidden id="btn_pasada_reset" class="btn btn-outline-primary">Reset</button>`
        );
        i = 0
        localStorage.setItem("Promedios", 0);
    });
}   

//-----------------------------------------------------------------------------//
//---------------------------- Calculadora de FCs  ----------------------------//
//-----------------------------------------------------------------------------//

function calcFc(){
    $(`#btn_fc`).click(validacionFC);
    $(`#calc_fcEdad`).keydown(function (e) {if (e.keyCode === 13) {validacionFC(e);}});
    $(`#calc_fcReposo`).keydown(function (e) {if (e.keyCode === 13) {validacionFC(e);}});
    
}
calcFc();

function validacionFC(e){
    e.preventDefault();
    fcEdad = parseInt($(`#calc_fcEdad`).val());
    fcRep = parseInt($(`#calc_fcReposo`).val());
    if( fcEdad > 0 && fcRep > 0 ){
        let fcMax = 208 - (0.7 * fcEdad);
        fcMax = Math.round(fcMax);
        let z50 = Math.round(((fcMax - fcRep) * 0.5) + fcRep);
        let z60 = Math.round(((fcMax - fcRep) * 0.6) + fcRep);
        let z70 = Math.round(((fcMax - fcRep) * 0.7) + fcRep);
        let z80 = Math.round(((fcMax - fcRep) * 0.8) + fcRep);
        let z90 = Math.round(((fcMax - fcRep) * 0.9) + fcRep);
        $(`.div_fc`).fadeOut("fast");
        setTimeout(() => {
            $(`.div_fc`).html(
            `<div class="bx">
            <p>FC Zona 1: <strong style="color: #67b0d1;">${z50} - ${z60} ppm</strong></p>
            <p>FC Zona 2: <strong style="color: #67b0d1;">${z60} - ${z70} ppm</strong></p>
            <p>FC Zona 3: <strong style="color: #67b0d1;">${z70} - ${z80} ppm</strong></p>
            <p>FC Zona 4: <strong style="color: #67b0d1;">${z80} - ${z90} ppm</strong></p>
            <p>FC Zona 5: <strong style="color: #67b0d1;">${z90} - ${fcMax} ppm</strong></p>
            </div>`);
            $(`.div_fc`).fadeIn("slow")}, 200);
    }else{
        alert("No ingresaste todos los campos requeridos");
    }
}

//-----------------------------------------------------------------------------------------//
//---------------------------- Envio de Formulario de contacto ----------------------------//
//-----------------------------------------------------------------------------------------//
function btn_mensaje(){
    $(`#paraContacto`).click(envioMensaje);
}
btn_mensaje();

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
        $(`.form`).hide();
        $(`#div_form`).attr(`class`, `col-lg-6 d-flex align-items-center justify-content-center`);
        $(`.insert1`).attr(`class`, `formContacto d-flex align-items-center justify-content-center insert1`)
        $(`.insert2`).attr(`class`,`row d-flex align-items-center justify-content-center insert2`) 
        $(`.insert2`).html(
            `<p style="text-align: center; margin-top: 3vh; opacity: 0;" class="p_form"><strong><<....Enviando mensaje....>></strong></p>`)
        $(`.p_form`).show();

        setInterval(anim_espera)         

        $.ajax({
            type: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: objMensaje(nombre, email, asunto, contenido),
            success: function (){
                setTimeout(() => {
                $(`.insert2`).html(
                    `<img src="./assets/img/Approved.png" alt="img_approved" class="img-fluid p_img_form" style="width: 15vh; display: none;">
                    <p style="text-align: center; margin-top: 3vh; display: none;" class="p_img_form"><strong>Gracias por escribirnos, en breve nos contactaremos.</strong></p>`)
                $(`.p_img_form`).fadeIn()
                }, 1000);
            }
        })
    }
}

function anim_espera(){
    $(`.p_form`).animate({opacity: '1'})
                .animate({opacity: '0'})
}

function objMensaje(dato1, dato2, dato3, dato4){
    class objM{
        constructor(dato1, dato2, dato3, dato4){
            this.nombre = dato1;
            this.email = dato2;
            this.asunto = dato3;
            this.contenido = dato4;
        }
    }
    return new objM(dato1, dato2, dato3, dato4)
} 