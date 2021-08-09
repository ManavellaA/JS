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

function ajax(dato1, dato2) {
  $.ajax({
    type: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: dato1,
    success: function () {
      arrayFunc(dato2);
    },
    complete: function (xhr) { console.log(xhr.status); },
  });
}


function arrayFunc(dato2) {
  $(`#btn-session`).text(`Hola, ${dato2}`);
  $(`.apend`).html(`
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">
        Hola, ${dato2}
      </h5>
      <p style="border: 1px solid black; padding-left: 5px; padding-right: 5px" data-bs-dismiss="modal">X</p>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-6 form-group">
          <p id="p-imc" class="">IMC:</p>
          <p id="p-pasada" class="">PASADA:</p>
          <p id="p-fc" class="">FC:</p>
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
  guardarDatos();
}

function btnUsuario() {
  document.getElementById(`#btn-session`).addEventListener("click", () => {

    arrayFunc();
  });
}

function cerrarSession() {
  $(`#cerrarSession`).click(function (e) {
    e.preventDefault();

  });

}

function guardarDatos() {
  $(`#guardar`).click(function (e) {
    e.preventDefault();
    let sumaTiempos = localStorage.getItem("Promedios")
    let datosCiclo = {
      ciclos: i,
      ciclosSuma: sumaTiempos,
      ciclosPromedio: sumaTiempos / i,
    }
    sessionArray.push(datosCiclo);
    sessionArray.unshift(new Date());
    localStorage.setItem("SessionUsuario", JSON.stringify(sessionArray))
  });

}
