// =============================================================================
//  FORNO ROSSO · public/js/datos.js
//  Dueño: M04 · Base de datos        Rama: feature/m04-base-datos
//
//  Funciones del navegador que hablan con la API (/api/...).
//  Mientras M04 no termine, devuelven datos de prueba para que M05 y M07
//  puedan trabajar.
// =============================================================================

// ---- DATOS DE PRUEBA (borrar cuando las funciones usen fetch) ----
const PLATOS_PRUEBA = [
  { id: 1, nombre: "Pizza Margarita", descripcion: "Plato de prueba.", precio: 650, categoria: "pizzas", imagen: "img/plato1.jpg" },
  { id: 2, nombre: "Pizza de prueba 2", descripcion: "Plato de prueba.", precio: 750, categoria: "pizzas", imagen: "img/plato2.jpg" },
  { id: 3, nombre: "Pasta de prueba 1", descripcion: "Plato de prueba.", precio: 550, categoria: "pastas", imagen: "img/plato3.jpg" },
  { id: 4, nombre: "Pasta de prueba 2", descripcion: "Plato de prueba.", precio: 600, categoria: "pastas", imagen: "img/plato4.jpg" },
  { id: 5, nombre: "Bebida de prueba 1", descripcion: "Plato de prueba.", precio: 150, categoria: "bebidas", imagen: "img/plato5.jpg" },
  { id: 6, nombre: "Bebida de prueba 2", descripcion: "Plato de prueba.", precio: 200, categoria: "bebidas", imagen: "img/plato6.jpg" }
];

/**
 * Devuelve la lista de platos.
 * TODO M04: fetch("/api/platos") con async/await, revisar respuesta.ok y
 *           devolver respuesta.json().
 */
async function obtenerMenu() {
  return PLATOS_PRUEBA;
}

/**
 * Devuelve un plato, o null si no existe (la API responde 404).
 * TODO M04: fetch(`/api/platos/${id}`); si el status es 404 o 400, devolver null.
 */
async function obtenerPlato(id) {
  return PLATOS_PRUEBA.find((p) => p.id === id) || null;
}

/**
 * Envía una reserva a la API.
 * Devuelve { ok, status, errores }:
 *   - 201  -> { ok: true,  status: 201, errores: null }
 *   - 400  -> { ok: false, status: 400, errores: { campo: "mensaje" } }
 * TODO M04: fetch("/api/reservas", { method: "POST", headers: { "Content-Type": "application/json" },
 *           body: JSON.stringify(reserva) }) y armar el objeto de arriba.
 */
async function guardarReserva(reserva) {
  return { ok: true, status: 201, errores: null };
}
