// =============================================================================
//  FORNO ROSSO · public/js/reservas.js
//  Dueño: M07 · Reservas y validación      Rama: feature/m07-reservas
//
//  Formulario #form-reserva. main.js ya llama iniciarReservas() en reservas.html.
//
//  Usa de otros:
//    - Validadores y limpiarTexto() de M08 (seguridad.js)
//    - guardarReserva() de M04 (datos.js), que devuelve { ok, status, errores }
//
//  Ids: nombre, telefono, correo, fecha, hora, personas, comentario,
//       error-<campo> (uno por campo), btn-reservar, mensaje-reserva
// =============================================================================

function iniciarReservas() {
  // TODO M07:
  //  1. submit con preventDefault() (el form ya tiene novalidate).
  //  2. Validar cada campo al salir de él (blur) y al enviar; el mensaje va en
  //     #error-<campo> y el campo se marca con .campo-error.
  //  3. Si hay un solo error, no enviar.
  //  4. Desactivar #btn-reservar mientras se envía.
  //  5. Enviar con guardarReserva(). Si status es 201: "Gracias, [nombre]. Tu
  //     reserva quedó registrada" en #mensaje-reserva (con textContent) y
  //     limpiar el formulario. Si es 400: poner cada error del servidor en su
  //     campo. Si falla la red: avisar sin borrar lo escrito.
  console.log("[M07] iniciarReservas pendiente");
}
