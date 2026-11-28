// =============================================================================
//  FORNO ROSSO · seguridad/cabeceras.js
//  Dueño: M08 · Seguridad            Rama: feature/m08-seguridad
//
//  Middleware de Express que agrega las cabeceras de seguridad a TODAS las
//  respuestas del servidor. server.js ya lo conecta; tú solo lo rellenas.
// =============================================================================

function cabecerasSeguras(req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://api.open-meteo.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
  );
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  next();
}

module.exports = cabecerasSeguras;
