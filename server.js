// =============================================================================
//  FORNO ROSSO · server.js
//  Dueño: M09 · Integración          Rama: feature/m09-integracion
//
//  Arranca el servidor. Entrega las páginas de public/ y conecta la API.
//  Este archivo ya funciona desde la Fase 0: con "npm start" el sitio abre en
//  http://localhost:3000 aunque los demás módulos todavía estén vacíos.
// =============================================================================

const path = require("node:path");
const express = require("express");

const cabecerasSeguras = require("./seguridad/cabeceras"); // M08
const rutasApi = require("./rutas/api");                    // M04

const app = express();
const PUERTO = process.env.PORT || 3000;

// No decir qué tecnología usamos
app.disable("x-powered-by");

// Cabeceras de seguridad (las completa M08)
app.use(cabecerasSeguras);

// Leer JSON en las peticiones, con un límite de tamaño
app.use(express.json({ limit: "10kb" }));

// Solo se entrega lo que está en public/ (nunca la base de datos ni este código)
app.use(express.static(path.join(__dirname, "public")));

// API (rutas de M04)
app.use("/api", rutasApi);

// Cualquier otra ruta bajo /api que no exista
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador de errores: nunca mostrar detalles internos al usuario
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed" || err.type === "entity.too.large") {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  console.error(err);
  res.status(500).json({ error: "Error interno" });
});

app.listen(PUERTO, () => {
  console.log(`Forno Rosso listo en http://localhost:${PUERTO}`);
});

// TODO M09: revisar este archivo en cada punto de control y probar el recorrido completo.
