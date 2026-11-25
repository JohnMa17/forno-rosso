// =============================================================================
//  FORNO ROSSO · rutas/api.js
//  Dueño: M04 · Base de datos        Rama: feature/m04-base-datos
//
//  Las 3 rutas por donde las páginas leen y guardan datos.
//  server.js ya las conecta bajo /api. Respeta los códigos de estado de cada ruta.
// =============================================================================

const express = require("express");
const { obtenerPlatos, obtenerPlatoPorId, insertarReserva } = require("../db/db");
const validar = require("../public/js/seguridad"); // reglas de M08 (las mismas del navegador)

const router = express.Router();

// GET /api/platos  ->  200 con la lista
router.get("/platos", (req, res) => {
  res.status(200).json(obtenerPlatos());
});

// GET /api/platos/:id  ->  200 con el plato · 400 si el id no es válido · 404 si no existe
router.get("/platos/:id", (req, res) => {
  const id = Number(req.params.id);

  // TODO M04: si el id no es un entero positivo, responder 400 { error: "Id inválido" }

  const plato = obtenerPlatoPorId(id);
  if (!plato) {
    return res.status(404).json({ error: "Plato no encontrado" });
  }
  res.status(200).json(plato);
});

// POST /api/reservas  ->  201 { id } · 400 { errores: { campo: "mensaje" } }
router.post("/reservas", (req, res) => {
  const datos = req.body || {};

  // TODO M04: validar OTRA VEZ cada campo con las funciones de M08
  //   (validar.esNombreValido, validar.esTelefonoValido, ...).
  //   Si alguno falla, responder 400 con { errores: { nombre: "...", ... } }.
  //   Si todo está bien, limpiar los textos con validar.limpiarTexto(...)
  //   antes de guardarlos.

  const id = insertarReserva(datos);
  res.status(201).json({ id });
});

module.exports = router;
