-- =============================================================================
--  FORNO ROSSO · db/esquema.sql
--  Dueño: M04 · Base de datos        Rama: feature/m04-base-datos
--
--  Crea las tablas de la base de datos. db.js lo ejecuta al arrancar si las
--  tablas todavía no existen.
-- =============================================================================

-- TODO M04: tabla platos
--   id, nombre, descripcion, precio, categoria, imagen
--   precio mayor que 0 y categoria solo 'pizzas', 'pastas' o 'bebidas' (CHECK)

-- TODO M04: tabla reservas
--   id (AUTOINCREMENT), nombre, telefono, correo, fecha, hora, personas,
--   comentario, creada_en (DEFAULT CURRENT_TIMESTAMP)
--   personas entre 1 y 12 (CHECK)

-- Usa CREATE TABLE IF NOT EXISTS y NOT NULL en los campos obligatorios.
-- Usa exactamente esos nombres de columnas: el resto del equipo los usa.
