// =============================================================================
//  FORNO ROSSO · public/js/main.js
//  Dueño: M09 · Integración          Rama: feature/m09-integracion
//
//  Arranca cada página. Lee <body data-pagina="..."> y llama solo las
//  funciones de esa página. Ya funciona desde la Fase 0: cuando cada módulo
//  rellene sus funciones, aparecen solas en la página correcta.
// =============================================================================

document.addEventListener("DOMContentLoaded", async () => {
  // En todas las páginas
  iniciarModoOscuro();
  marcarPaginaActiva();

  const pagina = document.body.dataset.pagina;

  try {
    if (pagina === "inicio") {
      const platos = await obtenerMenu();
      mostrarDestacados(platos);
      mostrarClima();
    } else if (pagina === "menu") {
      const platos = await obtenerMenu();
      mostrarMenu(platos);
      iniciarFiltro(platos);
    } else if (pagina === "plato") {
      await mostrarDetalle();
    } else if (pagina === "reservas") {
      iniciarReservas();
    } else if (pagina === "nosotros") {
      iniciarHorario();
    }
  } catch (error) {
    console.error("[main] No se pudo cargar la página:", error);
  }
});
