// =============================================================================
//  FORNO ROSSO · seguridad/cabeceras.js
//  Dueño: M08 · Seguridad            Rama: feature/m08-seguridad
//
//  Middleware de Express que agrega las cabeceras de seguridad a TODAS las
//  respuestas del servidor. server.js ya lo conecta; tú solo lo rellenas.
// =============================================================================

function cabecerasSeguras(req, res, next) {
  // TODO M08: agregar estas cabeceras con res.setHeader(nombre, valor):
  //   - Content-Security-Policy: solo recursos propios ('self') y, en connect-src,
  //     la API del clima (https://api.open-meteo.com). Sin scripts en línea.
  //   - X-Frame-Options: DENY
  //   - X-Content-Type-Options: nosniff
  //   - Referrer-Policy: strict-origin-when-cross-origin
  //
  // Actívalas cuando todo lo demás ya funcione (punto de control 3) y revisa
  // en F12 > Red que aparezcan sin romper nada.

  next();
}

module.exports = cabecerasSeguras;
