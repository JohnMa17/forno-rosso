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

/** Quita espacios de los extremos y corta al largo máximo. */
function limpiarTexto(texto, max = 200) {
  // TODO M08
  return String(texto ?? "");
}

function esNombreValido(valor) {
  // TODO M08
  return true;
}

function esTelefonoValido(valor) {
  // TODO M08
  return true;
}

function esCorreoValido(valor) {
  // TODO M08
  return true;
}

function esFechaValida(valor) {
  // TODO M08
  return true;
}

function esHoraValida(valor) {
  // TODO M08
  return true;
}

function esPersonasValido(valor) {
  // TODO M08
  return true;
}

/**
 * Lee el ?id= de la URL (plato.html?id=3).
 * Devuelve el número si es un entero del 1 al 6; si no, null.
 */
function leerIdDeUrl() {
  // TODO M08: validar que sea un entero del 1 al 6 (hoy acepta cualquier cosa)
  const valor = new URLSearchParams(window.location.search).get("id");
  return valor === null ? null : Number(valor);
}

// Para que el servidor (Node) también pueda usar este archivo. No borrar.
if (typeof module !== "undefined") {
  module.exports = {
    limpiarTexto, esNombreValido, esTelefonoValido, esCorreoValido,
    esFechaValida, esHoraValida, esPersonasValido
  };
}
