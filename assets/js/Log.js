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
      <h5 class="modal-title" id="exampleModalLabel">
        Hola, ${usuario}
      </h5>
      <p style="border: 1px solid black; padding-left: 5px; padding-right: 5px" data-bs-dismiss="modal">X</p>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-6 form-group">
          <p> Tus datos de hoy son:</p>
          <p id="p-imc"> IMC: Todavia no realizado hoy</p>
          <p id="p-imc-d"> IMC Clasificacion: Todavia no realizado hoy</p>
        </div>
      </div> 
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
  cerrarSession();
  clickGuardar();
}

// function btnUsuario() {
//   document.getElementById(`#btn-imc`).addEventListener("click", () => {
//     if(sessionArray[0] !== undefined && login === true){
//       $(`#p-imc`).text(`${sessionArray[0]}`);
//       $(`#p-imc-d`).text(`${sessionArray[1]}`);
//     }
//   });
// }
// btnUsuario();

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

function clickGuardar(){
  $(`#guardar`).click(() => {
    guardarDatos();
  })
}

function guardarDatos() {
    if(i !== 0){
      let sumaTiempos = localStorage.getItem("Promedios")
      let datosCiclo = {
        ciclos: i,
        ciclosSuma: sumaTiempos,
        ciclosPromedio: sumaTiempos / i,
      }
      sessionArray.push(datosCiclo);
    }
    let hoy = new Date();
    hoy = hoy.toDateString()

    sessionArray.unshift(hoy);
    localStorage.setItem("SessionUsuario", JSON.stringify(sessionArray))
}
