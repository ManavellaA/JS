let c = false

//-------------------------------Inicio de Session----------------------------//
function iniciarSession() {
  document.getElementById(`iniciarSession`).addEventListener("click", function (e) {
    e.preventDefault();
    validacion();
  });
}
iniciarSession();

function validacion() {
  let usuario = document.getElementById(`usuario`).value
  let pass = document.getElementById(`pass`).value
  let estado = true;
  let log = true;

  if (!usuario || !pass) {
    alert("Falta completar un campo");
    estado = false
  }

  if (estado) {
    userArray = JSON.parse(localStorage.getItem("usuarios"))
    for (let busqueda of userArray) {
      // normalmente tendria que enviar la info de logueo a Back-end a travez de una API
      if (busqueda.usuario === usuario && busqueda.pass === pass) {
        let msj = { usuario: usuario, pass: pass };
        log = false
        ajax(msj, usuario);
      }
    }
    if (log) {
      alert("Usuario no Registrado");
    }
  }
  document.getElementById(`usuario`).value = "";
  document.getElementById(`pass`).value = "";
}

function ajax(msj, usuario) {
  $.ajax({
    type: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: msj,
    success: function () {
      login = true
      arrayFunc(usuario);
    },
    complete: function (xhr) { console.log(xhr.status); },
  });
}

function arrayFunc(usuario) {
  $(`#btn-session`).text(`Hola,  ${usuario}!`);
  $(`.apend`).html(`
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel" tyle="font-size: 3.5vh;">
        Hola, ${usuario}
      </h5>
      <button type="button" class="btn btn-primary btn_cancel" data-bs-dismiss="modal">X</button>
    </div>
    <div class="modal-body append2">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" id="guardar" data-bs-dismiss="modal">
        Guardar Datos
      </button>
      <button type="button" class="btn btn-primary" id="cerrarSession" data-bs-dismiss="modal">
        Cerrar Session 
      </button>
    </div>
    `);
  append2();
}

function append2() {
  $(`.append2`).html(`
      <div class="row">
        <div class="col-md-12 form-group">
          <p style="font-size: 2.5vh; text-decoration: underline;">Bienvenido a  tu panel de información</p>
          <p>Tus datos de hoy son:</p>
          <div class="col-md-12 form-group">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item mt-5">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed p-imc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Informacion sobre tu IMC
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body datos_imc">
                            <p><strong>Todavia no lo realizaste!!</strong></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-5">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed p-ciclo" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Ciclo de entrenamiento Running
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body datos_ciclo">
                          <p><strong>Todavia no lo realizaste!!</strong></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mt-5">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed p-fc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Zonas de Trabajo FC
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body datos_fc">
                        <p><strong>Todavia no lo realizaste!!</strong></p>
                        </div>
                    </div>
                </div>
            </div>
          </div>    
        </div>
      </div> 
    
  `);
  cerrarSession();
  clickGuardar();
  btn_imc();
  btn_ciclo();
  btn_fc();
}

function btn_imc() {
  $(`.p-imc`).click(() => {
    for (const imc of sessionArray) {
      if (imc.Imc !== undefined && login === true) {
        $(`.datos_imc`).html(`
          <p><strong>Tu IMC es:</strong> ${imc.Imc}</p>
          <p><strong>Segun OMS clasificas como:</strong> ${imc.ImcClasificacion}</p>
          `)
      }
    }
  });
}

function btn_ciclo() {
  $(`.p-ciclo`).click(() => {
    for (const ciclo of sessionArray) {
      if (c === false) {
        guardadoCiclo();
      }
      if (ciclo.ciclos !== undefined && login === true) {
        $(`.datos_ciclo`).html(`
          <p><strong>Cantidad de Ciclos:</strong> ${ciclo.ciclos}</p>
          <p><strong>Promedio general:</strong> ${ciclo.ciclosPromedio} min/km</p>
          <p><strong>Tiempo Total:</strong> ${ciclo.ciclosSuma} min</p>
          `)
      }
    }

  });
}

function btn_fc() {
  $(`.p-fc`).click(() => {
    for (const fc of sessionArray) {
      if (fc.fcEdad !== undefined && login === true) {
        $(`.datos_fc`).html(`
          <p><strong>Tu Edad la hora del calculo:</strong> ${fc.fcEdad} Años.</p>
          <p><strong>Freciencia en reposo:</strong> ${fc.fcRep} ppm</p>
          <p><strong>Freciencia Maxima:</strong> ${fc.fcMax} ppm</p>
          <p><strong>Zona 1:</strong> ${fc.z[0]} - ${fc.z[1]} (Muy Suave: 50-60%)</p>
          <p><strong>Zona 2:</strong> ${fc.z[1]} - ${fc.z[2]} (Suave: 60-70%)</p>
          <p><strong>Zona 3:</strong> ${fc.z[2]} - ${fc.z[3]} (Moderada: 70-80%)</p>
          <p><strong>Zona 4:</strong> ${fc.z[3]} - ${fc.z[4]} (Intensa: 80-90%)</p>
          <p><strong>Zona 5:</strong> ${fc.z[4]} - ${fc.fcMax} (Limite: 90-100%)</p>
          `)
      }
    }
  });
}

function guardadoCiclo() {
  if (i !== 0) {
    let sumaTiempos = localStorage.getItem("Promedios")
    let prom = sumaTiempos / i
    prom = prom.toFixed(2);
    let datosCiclo = {
      ciclos: i,
      ciclosSuma: sumaTiempos,
      ciclosPromedio: prom,
    }
    sessionArray.push(datosCiclo);
    c = true
  }
}

function cerrarSession() {
  $(`#cerrarSession`).click(() => {
    guardarDatos();
    modalStd();
    reg();
    iniciarSession();
    setTimeout(() => {
      $(`#btn-session`).text(`Iniciar Session`);
    }, 200);
    login = false
  });
}

function clickGuardar() {
  $(`#guardar`).click(() => {
    guardarDatos();
  })
}

function guardarDatos() {
  guardadoCiclo();
  let hoy = new Date();
  hoy = hoy.toDateString()

  // Lo Ideal seria mandar este array a un back-end a travez de una API, para que 
  // se guarden los datos del usuario en una base de datos y los pueda llamar como un historico pero no llegue a completar esa parte. 

  sessionArray.unshift(hoy);
  localStorage.setItem("SessionUsuario", JSON.stringify(sessionArray))
}