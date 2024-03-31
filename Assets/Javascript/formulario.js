const expresiones = {
 nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
 apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
 correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 telefono: /^\d{8,14}$/,
 mensaje: /^.{4,}$/
};

const campos = {
 nombre: false,
 apellido: false,
 correo: false,
 telefono: false,
 mensaje: false
};

const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputCorreo = document.getElementById("correo");
const inputTelefono = document.getElementById("telefono");
const inputMensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formulario");

const validarNombre = (evento) => {
 console.log("Se soltó una tecla");

 if (expresiones.nombre.test(evento.target.value)) {
  console.log("El dato esta correcto");

  document.querySelector("#grupo_nombre i").classList.remove("icono_input_con_error");
  document.querySelector("#grupo_nombre input").classList.remove("formulario_input_con_error");
  document.querySelector("#grupo_nombre p").classList.remove("formulario_input_error_activo");
  
  campos.nombre = true;
 }

 else {
  console.log("El dato esta incorrecto");

  document.querySelector("#grupo_nombre i").classList.add("icono_input_con_error");
  document.querySelector("#grupo_nombre input").classList.add("formulario_input_con_error");
  document.querySelector("#grupo_nombre p").classList.add("formulario_input_error_activo");

  campos.nombre = false;
 }
};

const validarApellido = (evento) => {
 console.log("Se soltó una tecla");

 if (expresiones.apellido.test(evento.target.value)) {
  console.log("El dato esta correcto");

   document.querySelector("#grupo_apellido i").classList.remove("icono_input_con_error");
   document.querySelector("#grupo_apellido input").classList.remove("formulario_input_con_error");
   document.querySelector("#grupo_apellido p").classList.remove("formulario_input_error_activo");

   campos.apellido = true;
 }

 else {
  console.log("El dato esta incorrecto");

  document.querySelector("#grupo_apellido i").classList.add("icono_input_con_error");
  document.querySelector("#grupo_apellido input").classList.add("formulario_input_con_error");
  document.querySelector("#grupo_apellido p").classList.add("formulario_input_error_activo");

  campos.apellido = false;
 }
};

const validarCorreo = (evento) => {
 console.log("Se soltó una tecla");

 if (expresiones.correo.test(evento.target.value)) {
  console.log("El dato esta correcto");

  document.querySelector("#grupo_correo i").classList.remove("icono_input_con_error");
  document.querySelector("#grupo_correo input").classList.remove("formulario_input_con_error");
  document.querySelector("#grupo_correo p").classList.remove("formulario_input_error_activo");

  campos.correo = true;
 }

 else {
  console.log("El dato esta incorrecto");

  document.querySelector("#grupo_correo i").classList.add("icono_input_con_error");
  document.querySelector("#grupo_correo input").classList.add("formulario_input_con_error");
  document.querySelector("#grupo_correo p").classList.add("formulario_input_error_activo");

  campos.correo = false;
 }
};

const validarTelefono = (evento) => {
 console.log("Se soltó una tecla");

 if (expresiones.telefono.test(evento.target.value)) {
  console.log("El dato esta correcto");

  document.querySelector("#grupo_telefono i").classList.remove("icono_input_con_error");
  document.querySelector("#grupo_telefono input").classList.remove("formulario_input_con_error");
  document.querySelector("#grupo_telefono p").classList.remove("formulario_input_error_activo");

  campos.telefono = true;
 }

 else {
  console.log("El dato esta incorrecto");

  document.querySelector("#grupo_telefono i").classList.add("icono_input_con_error");
  document.querySelector("#grupo_telefono input").classList.add("formulario_input_con_error");
  document.querySelector("#grupo_telefono p").classList.add("formulario_input_error_activo");

  campos.telefono = false;
 }
};

const validarMensaje = (evento) => {
 console.log("Se soltó una tecla");

 if (expresiones.mensaje.test(evento.target.value)) {
  console.log("El dato esta correcto");

  document.querySelector("#grupo_mensaje i").classList.remove("icono_input_con_error");
  document.querySelector("#grupo_mensaje textarea").classList.remove("formulario_input_con_error");
  document.querySelector("#grupo_mensaje p").classList.remove("formulario_input_error_activo");

  campos.mensaje = true;
 }

 else {
  console.log("El dato esta incorrecto");

  document.querySelector("#grupo_mensaje i").classList.add("icono_input_con_error");
  document.querySelector("#grupo_mensaje textarea").classList.add("formulario_input_con_error");
  document.querySelector("#grupo_mensaje p").classList.add("formulario_input_error_activo");

  campos.mensaje = false;
 }
};

inputNombre.addEventListener("keyup", validarNombre);
inputApellido.addEventListener("keyup", validarApellido);
inputCorreo.addEventListener("keyup", validarCorreo);
inputTelefono.addEventListener("keyup", validarTelefono);
inputMensaje.addEventListener("keyup", validarMensaje);

inputNombre.addEventListener("blur", validarNombre);
inputApellido.addEventListener("blur", validarApellido);
inputCorreo.addEventListener("blur", validarCorreo);
inputTelefono.addEventListener("blur", validarTelefono);
inputMensaje.addEventListener("blur", validarMensaje);

formulario.addEventListener("submit", (evento) => {
 evento.preventDefault();
    
 if (campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.mensaje) {
  console.log("Los datos estan correctos");

  document.getElementById("formulario_mensaje_correcto").classList.add("formulario_mensaje_correcto_activo");

  setTimeout(() => {
   document.getElementById("formulario_mensaje_correcto").classList.remove("formulario_mensaje_correcto_activo");
  }, 5000);

  console.log("Se envio el formulario");

  formulario.reset();
        
  setTimeout(() => {
   document.location.reload(true);
  }, 5000);
 }
 else {
  console.log("Los datos estan incorrectos");
        
  document.getElementById("formulario_mensaje").classList.add("formulario_mensaje_error_activo");

  setTimeout(() => {
   document.getElementById("formulario_mensaje").classList.remove("formulario_mensaje_error_activo");
  }, 5000);
 }
});