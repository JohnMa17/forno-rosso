// =============================================================================
//  FORNO ROSSO · db/db.js
//  Dueño: M04 · Base de datos        Rama: feature/m04-base-datos
//
//  ÚNICO archivo que habla con SQLite. Nadie más escribe SQL.
//  Mientras M04 no termine, estas funciones devuelven datos de prueba para que
//  el resto del equipo pueda trabajar.
// =============================================================================

// TODO M04: abrir la base de datos con node:sqlite
//   const { DatabaseSync } = require("node:sqlite");
//   const db = new DatabaseSync(path.join(__dirname, "forno.db"));
//   Si las tablas no existen, ejecutar esquema.sql y semilla.sql (db.exec).

// ---- DATOS DE PRUEBA (borrar cuando la base de datos funcione) ----
const PLATOS_PRUEBA = [
  { id: 1, nombre: "Pizza Margarita", descripcion: "Plato de prueba.", precio: 650, categoria: "pizzas", imagen: "img/plato1.jpg" },
  { id: 2, nombre: "Pizza de prueba 2", descripcion: "Plato de prueba.", precio: 750, categoria: "pizzas", imagen: "img/plato2.jpg" },
  { id: 3, nombre: "Pasta de prueba 1", descripcion: "Plato de prueba.", precio: 550, categoria: "pastas", imagen: "img/plato3.jpg" },
  { id: 4, nombre: "Pasta de prueba 2", descripcion: "Plato de prueba.", precio: 600, categoria: "pastas", imagen: "img/plato4.jpg" },
  { id: 5, nombre: "Bebida de prueba 1", descripcion: "Plato de prueba.", precio: 150, categoria: "bebidas", imagen: "img/plato5.jpg" },
  { id: 6, nombre: "Bebida de prueba 2", descripcion: "Plato de prueba.", precio: 200, categoria: "bebidas", imagen: "img/plato6.jpg" }
];

/**
 * Devuelve la lista de todos los platos.
 * TODO M04: SELECT con consulta preparada (db.prepare(...).all()).
 */
function obtenerPlatos() {
  return PLATOS_PRUEBA;
}

/**
 * Devuelve un plato por su id, o undefined si no existe.
 * TODO M04: SELECT ... WHERE id = ?  (el id va como parámetro, NUNCA pegado al texto).
 */
function obtenerPlatoPorId(id) {
  return PLATOS_PRUEBA.find((p) => p.id === id);
}

/**
 * Guarda una reserva y devuelve su id nuevo.
 * TODO M04: INSERT INTO reservas (...) VALUES (?, ?, ?, ...) con .run(...)
 *           y devolver el lastInsertRowid.
 */
function insertarReserva(reserva) {
  return Date.now(); // id falso mientras no hay base de datos
}

module.exports = { obtenerPlatos, obtenerPlatoPorId, insertarReserva };
