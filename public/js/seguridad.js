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
}

function esCorreoValido(valor) {
  // Verificamos si el email contiene el símbolo '@' 
  // y la @ no está al inicio ni al final
  const atIndex = valor.indexOf('@');
  if (atIndex <= 0 || atIndex === valor.length - 1) {
    return false;
  }

  const [local, domain] = valor.split('@');

  if (!local || !domain) {
    return false;
  }

  const dotIndex = domain.indexOf('.');
  if (dotIndex <= 0 || dotIndex === domain.length - 1) {
    return false;
  }

  if (domain.includes('..')) {
    return false;
  }

  const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
  for (let char of invalidChars) {
    if (valor.includes(char)) {
      return false;
    }
  }

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
