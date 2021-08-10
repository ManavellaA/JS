class User {
  constructor(datos, locacion, usuario, pass) {
    this.datos = datos;
    this.locacion = locacion;
    this.usuario = usuario;
    this.pass = pass;
  }
}

function reg() {
  document.getElementById(`registrar`).addEventListener("click", () => {
    modalSec();
    clickReg();
  });
}
reg();

function volver() {
  document.getElementById("volver").addEventListener("click", () => {
    modalStd();
    reg()
  });
}

function modalSec() {
  $(`.apend`).html(
    ` <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          Registro
        </h5>
      </div>
      <div class="modal-body">
        <div class="d-grid gap-3 justify-content-center">
          <div class="form-group d-grid gap-3">
            <label>Datos Personales:</label>
            <input type="text" id="nombre" class="form-control" placeholder="Nombre" required>
            <input type="text" id="apellido" class="form-control" placeholder="Apellido" required>
          </div>

          <div class="form-group d-grid gap-3">
            <label>Locación:</label>
              <input type="text" id="provincia" class="form-control d-flex" placeholder="Provincia" required>
              <input type="text" id="ciudad" class="form-control d-flex" placeholder="Ciudad" required>
              <input type="text" id="calle" class="form-control d-flex" placeholder="Calle" required>
              <input type="number" id="num_calle" class="form-control d-flex" placeholder="N°" required>
          </div>

          <div class="form-group d-grid gap-3">
            <label>Sessión:</label>
            <input type="text" id="usuario" class="form-control" placeholder="Usuario" required>
            <input type="password" id="pass" class="form-control" placeholder="Contraseña" required>
            <div class="d-flex justify-content-center align-items-center"><label id="ver">Ver</label></div>  
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#" id="volver">Volver</a>
        <button type="button" class="btn btn-primary" id="click_registro" ">
          Registrarme!
        </button>
      </div>
      `
  );
  verPass();
  volver();
}

function modalStd() {
  $(`.apend`).html(
    `<div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">
         Inicio Session
       </h5>
     </div>
     <div class="modal-body">
       <div class="row">
         <div class="col-md-6 form-group">
           <input type="text" id="usuario" class="form-control" placeholder="Usuario" required>
         </div>
         <div class="col-md-6 form-group mt-3 mt-md-0">
           <input type="password" id="pass" class="form-control" placeholder="Contraseña" required>
           <div class="d-flex justify-content-center align-items-center"><label id="ver">Ver</label></div> 
         </div>
       </div>
     </div>
     <div class="modal-footer">
       <a href="#" id="registrar" style="margin-right: ">Registrarme</a>
       <button type="button" class="btn btn-primary" id="iniciarSession" data-bs-dismiss="modal">
         Iniciar
       </button>
     </div>
    `
  );
  verPass();
}

function clickReg() {
  document.getElementById(`click_registro`).addEventListener("click", function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let provincia = document.getElementById("provincia").value
    let ciudad = document.getElementById("ciudad").value
    let calle = document.getElementById("calle").value
    let numero = document.getElementById("num_calle").value
    let usuario = document.getElementById("usuario").value
    let pass = document.getElementById("pass").value
    let estado = true

    if (!nombre || !apellido || !provincia || !ciudad || !calle || !numero || !usuario || !pass) {
      alert("falta completar un campo");
      clickReg();
    }
    else {
      userArray = JSON.parse(localStorage.getItem("usuarios"))
      if (userArray !== null) {
        for (let busqueda of userArray) {
          if (busqueda.usuario === usuario.toUpperCase()) {
            alert("el usuario esta en uso");
            estado = false
          }
        }
      } else { userArray = [] }
      if (estado) {
        let datos = `${nombre} ${apellido}`
        let locacion = `${provincia}, ${ciudad}, ${calle} ${numero}`
        userArray.push(new User(datos, locacion, usuario, pass))
        RegExitoso();
      }
    }
  });
}

function RegExitoso() {
  $(`.apend`).html(
    `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          Registro
        </h5>
      </div>
      <div class="modal-body">
        <div class="d-grid gap-3 justify-content-center">
          <div class="form-group d-flex row gap-3 justify-content-center">
            <img src="./assets/img/Approved.png" alt="img_approved" class="img-fluid p_img_form" style="width: 12vh; display: none;">
            <p style="text-align: center; margin-top: 1vh; display: none; font-size: 2vh;" class="p_img_form"><strong>Registro exitoso, espera a ser redireccionado.</strong></p>
          </div>
        </div>
      </div>
    `)
  $(`.p_img_form`).fadeIn(300)
  localStorage.setItem("usuarios", JSON.stringify(userArray))
  setTimeout(() => {
    $(`.p_img_form`).fadeOut(300)
  }, 2000);
  setTimeout(() => {
    modalStd();
    reg();
    iniciarSession();
  }, 2500);
}

//----------------------------Efecto vista de Contraseña-----------------//
function verPass() {
  document.getElementById(`ver`).addEventListener("mouseover", () => {
    document.getElementById(`pass`).setAttribute(`type`, `text`);
  });
  document.getElementById(`ver`).addEventListener("mouseleave", () => {
    document.getElementById(`pass`).setAttribute(`type`, `password`);
  });
  //-----------------------------------------------------------------------//
}
verPass();
