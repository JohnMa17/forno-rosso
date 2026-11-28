// =============================================================================
//  FORNO ROSSO · public/js/seguridad.js
//  Dueño: M08 · Seguridad            Rama: feature/m08-seguridad
//
//  Reglas de validación. Este MISMO archivo lo usan el navegador (reservas.js,
//  menu.js) y el servidor (rutas/api.js), así las reglas nunca se contradicen.
//  Mientras M08 no termine, todo devuelve "válido" para no frenar a nadie.
//
//  Reglas (las usa M07 en el formulario y M04 en el servidor):
//    nombre      3 a 60 letras (con tildes y espacios)
//    teléfono    10 dígitos que empiecen por 809, 829 u 849
//    correo      formato válido
//    fecha       desde hoy hasta 30 días después
//    hora        de 12:00 a 22:00
//    personas    entero de 1 a 12
//    comentario  hasta 200 caracteres
// =============================================================================

function limpiarTexto(texto, max = 200) {
  return typeof texto === 'string' &&
         texto.length > 0 &&
         texto.length <= max;
}


function esNombreValido(valor) {
  const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
  for (let char of invalidChars) {
    if (valor.includes(char)) {
      return false;
    }
  return true;
}

function esTelefonoValido(valor) {

  const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
  for (let char of invalidChars) {
    if (valor.includes(char)) {
      return false;
    }
  if (valor=10){return true;
  }else { 
    return false;
  }
}

function esCorreoValido(valor) {
  // Verificamos si el email contiene el símbolo '@' 
  // y la @ no está al inicio ni al final
  const atIndex = valor.indexOf('@');
  if (atIndex <= 0 || atIndex === valor.length - 1) {
    return false;
  }

  // Dividimos el email usando la '@' como separador
  const [local, domain] = valor.split('@');
  // Ese código genera dos constantes 
  // - local, con la parte de antes de la @
  // -- domain, con la parte de después de la arroba

  // Comprobamos si alguna de las partes está vacía
  if (!local || !domain) {
    return false;
  }

  // Verificamos que el dominio contenga un punto y no esté al inicio ni al final
  const dotIndex = domain.indexOf('.');
  if (dotIndex <= 0 || dotIndex === domain.length - 1) {
    return false;
  }

  // Comprobamos que el dominio no tenga más de un punto consecutivo
  if (domain.includes('..')) {
    return false;
  }

  // Comprobamos que el email no contenga caracteres inválidos 
  // Estos caracteres inválidos podrían extenderse si lo ves necesario
  const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
  for (let char of invalidChars) {
    if (valor.includes(char)) {
      return false;
    }
  }

  // Si estamos aquí es que todas las comprobaciones anteriores fueron correctas
  return true;
}

function esFechaValida(valor) {
  var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return true;
      } else {
            return false;
      }
}

function esHoraValida(valor) {
  var RegExPattern = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
            return true;
      } else {
            return false;
      }
  return true;
}


function esPersonasValido(valor) {
if (.isInteger(valor) && valor >= 1 && numero <= 12) {
    return true;
  } else{
  retun false;}
  retun true;
}

function leerIdDeUrl() {
  const valor = new URLSearchParams(window.location.search).get("id");
  
  // Si no existe o es una cadena vacía, devolvemos null
  if (!valor || valor.trim() === "") return null;

  const numero = Number(valor);

  if (Number.isInteger(numero) && numero >= 1 && numero <= 6) {
    return numero;
  }

  return null;
}


if (typeof module !== "undefined") {
  module.exports = {
    limpiarTexto, esNombreValido, esTelefonoValido, esCorreoValido,
    esFechaValida, esHoraValida, esPersonasValido
  };
}
