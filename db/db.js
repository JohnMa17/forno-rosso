
//Lista de platos 
function obtenerPlatos() {
  return PLATOS_PRUEBA;
}
//Lista de Platos pero por ID
function obtenerPlatoPorId(id) {
  return PLATOS_PRUEBA.find((p) => p.id === id);
}

//Guardar reserva
function insertarReserva(reserva) {
  return Date.now(); 
}

module.exports = { obtenerPlatos, obtenerPlatoPorId, insertarReserva };
