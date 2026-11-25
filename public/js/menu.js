// =============================================================================
//  FORNO ROSSO · public/js/menu.js
//  Dueño: M05 · Menú y detalle       Rama: feature/m05-menu
//
//  Pinta los platos en el inicio, en el menú y en el detalle.
//  Regla: todo con createElement y textContent. Nada de innerHTML.
//  main.js ya llama estas funciones en la página que toca.
// =============================================================================

/**
 * Inicio (#grid-destacados): los 3 primeros platos.
 * TODO M05
 */
function mostrarDestacados(platos) {
  console.log("[M05] mostrarDestacados pendiente", platos);
}

/**
 * Menú (#grid-menu): una tarjeta (.tarjeta) por plato con foto, nombre,
 * categoría (.etiqueta), precio (.tarjeta-precio, formato "RD$ 650") y un
 * enlace a plato.html?id=...
 * TODO M05
 */
function mostrarMenu(lista) {
  console.log("[M05] mostrarMenu pendiente", lista);
}

/**
 * Menú: los botones de #filtro-categoria (data-categoria="todos|pizzas|pastas|bebidas")
 * filtran con .filter(), vuelven a llamar mostrarMenu() y marcan el activo (.activo).
 * TODO M05
 */
function iniciarFiltro(platos) {
  console.log("[M05] iniciarFiltro pendiente");
}

/**
 * Detalle (#detalle-plato): toma el id con leerIdDeUrl() (M08), pide el plato
 * con obtenerPlato(id) (M04) y lo muestra. Si el id es null o el plato no
 * existe, muestra "Plato no encontrado" con un enlace para volver al menú.
 * TODO M05
 */
async function mostrarDetalle() {
  console.log("[M05] mostrarDetalle pendiente");
}
