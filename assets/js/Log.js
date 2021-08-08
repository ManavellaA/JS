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
  let log = false;

  if(!usuario || !pass){
      alert("Falta completar un campo");
      estado = false
  }

  switch(estado){
    case true:
      for (let busqueda of userArray){
        // normalmente tendria que enviar la info de logueo a Back-end a travez de una API
        if(busqueda.user === usuario.toUpperCase() && busqueda.pass === pass){
          let msj = {usuario:usuario, pass:pass};
          log = true
          ajax(msj, usuario);
        }
      }
      switch(log){
        case false:
          alert("Usuario no Registrado");
        break;
      }
    break;
  }

  document.getElementById(`usuario`).value = "";
  document.getElementById(`pass`).value = "";

}

function ajax(dato1, dato2){
  $.ajax({
    type: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: dato1,
    complete: function(xhr) { console.log(xhr.status); },
    success: function () {
        arrayFunc(dato2);
    },
    
  });
}


function arrayFunc(dato2){
  $(`#btn-session`).text(`${dato2}`);
  $(`.apend`).html(`
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">
        Hola, ${dato2}
      </h5>
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
        <button type="button" class="btn btn-primary" id="guardar">
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

function cerrarSession() { 
  $(`#cerrarSession`).click(function (e) { 
    e.preventDefault();
    
  });

 }

 function guardarDatos() { 
  $(`#guardar`).click(function (e) { 
    e.preventDefault();
    dataArray.push 
    localStorage.setItem("DatosUsuario", JSON.stringify(dataArray))
  });

  }
