var sumaCiclo = 0; 
var i = 0;

function ciclo(){
    let ciclo = document.getElementById("btn_pasada");
    ciclo.addEventListener("click", calcPasada);
    let enter = document.getElementById("calc_pasada");
    enter.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            calcPasada(e);
        }
        });
    
    function calcPasada(e){
    e.preventDefault();
    let pasada = document.getElementById("calc_pasada").value;
    pasada = parseFloat(pasada);
        if( !pasada || pasada == " "){
        alert("Dato ingresado no valido");
        }
        else{               
            sumaCiclo = sumaCiclo + pasada;
            i++;
        }
        promedio = sumaCiclo / i;
        promedio = promedio.toFixed(2);
        
        let contenedor = document.querySelector(".div_ciclo");
        contenedor.innerHTML = 
             `<p>Tu promedio es: <strong style="color: #67b0d1;">${promedio} min/km</strong></p>
             <input type="number" id="calc_pasada" class="form-control" placeholder="Tiempo de Ciclo">
             <button type="button" id="btn_pasada" class="btn btn-outline-primary">Sumar</button>`;
    }
}
ciclo();

function calcImc(){
    let imc = document.getElementById("btn_imc");
    imc.addEventListener("click", validacionIMC);
    let enter1 = document.getElementById("calc_altura");
    enter1.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionIMC();
        }
        });
    let enter2 = document.getElementById("calc_peso");
    enter2.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionIMC();
        }
        });

        function validacionIMC(){
            let peso = document.getElementById("calc_peso").value;
            let altura = document.getElementById("calc_altura").value;

            peso = parseInt(peso);
            altura = parseInt(altura);

            if( peso > 0 && altura > 0 ){
                let calc = (peso * ((altura/100) * (altura/100)))/10;
                let imc = calc.toFixed(2);
                //DIV de contenido 
                let contenedorNuevo = document.createElement("div");
                contenedorNuevo.setAttribute("class", "row d-flex align-items-center justify-content-center");
                contenedorNuevo.innerHTML = 
                     `<p>Tu IMC es: <strong style="color: #67b0d1;">${imc}</strong></p>
                      <p>Segun la OMS clasificaria como:</p>
                      <p style="color: #67b0d1";"><strong>${ImcClasificacion(imc)}</strong></p>`
                //Intercambio
                let contenedorViejo = document.getElementById("div_imc");
                let nodoPadre = contenedorViejo.parentNode
                nodoPadre.replaceChild(contenedorNuevo, contenedorViejo);
            }else{
                alert("No ingresaste todos los campos requeridos");
            }
        }
}
calcImc();

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

function mensaje(){
    //Al no tener donde enviar el mensaje lo almaceno en el local Storage
    let contact = document.getElementById("paraContacto");
    contact.addEventListener("click", envioMensaje);

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
    
            let contenedorNuevo = document.createElement("div");
            contenedorNuevo.setAttribute("class", "col-lg-6 d-flex align-items-center justify-content-center");
            let contenedorNuevoData = document.createElement("div");
            contenedorNuevoData.setAttribute("class", "row d-flex align-items-center justify-content-center");
            contenedorNuevoData.innerHTML = 
                 `<img src="./assets/img/Approved.png" alt="img_approved" class="img-fluid" style="width: 15vh;">
                  <p style="text-align: center; margin-top: 3vh"><strong>Gracias por escribirnos, en breve nos contactaremos.</strong></p>`
            contenedorNuevo.appendChild(contenedorNuevoData);
            //Intercambio
            let contenedorViejo = document.getElementById("form");
            let nodoPadre = contenedorViejo.parentNode
            nodoPadre.replaceChild(contenedorNuevo, contenedorViejo);
        }
        document.getElementById("contactoNombre").value = "";
        document.getElementById("contactoEmail").value = "";
        document.getElementById("contactoAsunto").value = "";
        document.getElementById("contactoMensaje").value = "";
    }
}
mensaje();

function calcFc(){
    let fc = document.getElementById("btn_fc");
    fc.addEventListener("click", validacionFC);
    let enter1 = document.getElementById("calc_fcEdad");
    enter1.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionFC(e);
        }
        });
    let enter2 = document.getElementById("calc_fcReposo");
    enter2.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            validacionFC(e);
        }
        });

        function validacionFC(e){
            e.preventDefault();
            let fcEdad = document.getElementById("calc_fcEdad").value;
            let fcRep = document.getElementById("calc_fcReposo").value;
            fcEdad = parseInt(fcEdad);
            fcRep = parseInt(fcRep);
            if( fcEdad > 0 && fcRep > 0 ){
                let fcMax = 208 - (0.7 * fcEdad);
                fcMax = Math.round(fcMax);

                let z1 = ((fcMax - fcRep) * 0.6) + fcRep;
                z1 = Math.round(z1);
                let z2 = ((fcMax - fcRep)*0.7) + fcRep;
                z2 = Math.round(z2);
                let z3 = ((fcMax - fcRep)*0.8) + fcRep;
                z3 = Math.round(z3);
                let z4 = ((fcMax - fcRep)*0.9) + fcRep;
                z4 = Math.round(z4);
                let z5 = fcMax;

                //DIV de contenido 
                let contenedorNuevo = document.createElement("div");
                contenedorNuevo.setAttribute("class", "div_fc bx");
                contenedorNuevo.innerHTML = 
                     `<p>FC Reposo: <strong style="color: #67b0d1;">${fcRep} ppm</strong></p>
                     <p>FC 60% Zona 1: <strong style="color: #67b0d1;">${z1} ppm</strong></p>
                     <p>FC 70% Zona 2: <strong style="color: #67b0d1;">${z2} ppm</strong></p>
                     <p>FC 80% Zona 3: <strong style="color: #67b0d1;">${z3} ppm</strong></p>
                     <p>FC 90% Zona 4: <strong style="color: #67b0d1;">${z4} ppm</strong></p>
                     <p>FC 100 Zona 5: <strong style="color: #67b0d1;">${z5} ppm</strong></p>`
                //Intercambio
                let contenedorViejo = document.querySelector(".div_fc");
                let nodoPadre = contenedorViejo.parentNode
                nodoPadre.replaceChild(contenedorNuevo, contenedorViejo);
            }else{
                alert("No ingresaste todos los campos requeridos");
            }
        }
}
calcFc();