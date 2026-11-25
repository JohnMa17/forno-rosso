# Forno Rosso

Sitio web de una pizzería inventada, hecho en equipo como práctica de Tecnología de Internet II (ISW-312).
Son 5 páginas con HTML, CSS y JavaScript puro, un servidor pequeño con Node y Express, y una base de datos SQLite.

---

## Cómo ejecutarlo

Necesitas **Node 22.13 o más reciente** (trae SQLite incluido).

```bash
npm install      # solo la primera vez
npm start
```

Abre **http://localhost:3000**. No hace falta Live Server: el servidor entrega las páginas.

Si no hay internet para `npm install`, pide a M09 la carpeta `node_modules` y pégala en la raíz del proyecto.

---

## Cómo empezar a trabajar

1. Clona el repositorio y entra a tu rama:
   ```bash
   git clone URL_DEL_REPOSITORIO
   cd forno-rosso
   git checkout feature/m0X-tu-modulo
   ```
2. En VS Code, presiona **Ctrl+Shift+F** y busca **`TODO M0X`** (con tu número). Ahí está todo lo que te toca.
3. Trabaja **solo en tus archivos** (tabla de abajo).
4. Haz commits pequeños y súbelos:
   ```bash
   git add .
   git commit -m "Agregar filtro por categoría"
   git push
   ```

El proyecto ya arranca desde el principio con **datos de prueba**. Así puedes ver tu parte funcionando aunque los demás no hayan terminado.

---

## Módulos y archivos

| Módulo | Rama | Archivos |
|---|---|---|
| M01 · Estructura y SEO | `feature/m01-estructura` | `public/*.html` |
| M02 · Diseño | `feature/m02-diseno` | `public/css/variables.css`, `base.css`, `componentes.css` |
| M03 · Layout y responsive | `feature/m03-layout` | `public/css/layout.css` |
| M04 · Base de datos | `feature/m04-base-datos` | `db/`, `rutas/api.js`, `public/js/datos.js`, `public/img/` |
| M05 · Menú y detalle | `feature/m05-menu` | `public/js/menu.js` |
| M06 · Interactividad y clima | `feature/m06-interactividad` | `public/js/interactividad.js` |
| M07 · Reservas y validación | `feature/m07-reservas` | `public/js/reservas.js` |
| M08 · Seguridad | `feature/m08-seguridad` | `public/js/seguridad.js`, `seguridad/cabeceras.js` |
| M09 · Integración | `feature/m09-integracion` | `package.json`, `server.js`, `README.md`, `.gitignore`, `public/js/main.js` |

```
forno-rosso/
├── package.json · server.js · README.md · .gitignore     M09
├── db/            esquema.sql · semilla.sql · db.js       M04
├── rutas/         api.js                                  M04
├── seguridad/     cabeceras.js                            M08
└── public/        todo lo que ve el navegador
    ├── *.html                                             M01
    ├── css/       variables · base · componentes          M02
    │              layout                                  M03
    ├── img/                                               M04
    └── js/        seguridad.js                            M08
                   datos.js                                M04
                   menu.js                                 M05
                   interactividad.js                       M06
                   reservas.js                             M07
                   main.js                                 M09
```

---

## Reglas del equipo

1. Cada uno trabaja **solo en sus archivos**. Si necesitas un cambio en el archivo de otro, se lo pides a su dueño.
2. Los **contratos** (ids, clases, nombres de funciones, rutas de la API y tablas) no se cambian sin avisar al grupo.
3. Cada módulo trabaja en su rama. Nadie hace commits en `main`.
4. Los commits llevan un verbo en infinitivo: `Agregar ruta de reservas`, `Validar teléfono`.
5. **Nunca se arma SQL pegando texto.** Siempre con `?` y los valores aparte.
6. Nada de `innerHTML` con datos del usuario, de la URL o de la API. Se usa `textContent` o `createElement`.
7. Nada de `onclick`, `style="..."` ni `<script>` dentro del HTML. Todo con `addEventListener` y en los archivos .css y .js.
8. Ningún color ni medida suelta en el CSS: todo sale de `variables.css`.
9. La única dependencia es Express. No se suben `node_modules` ni el archivo `.db`.
10. No se guardan claves ni contraseñas en el código.

---

## Contratos rápidos

**API**

| Ruta | Responde |
|---|---|
| `GET /api/platos` | 200 con la lista |
| `GET /api/platos/:id` | 200 con el plato · 400 id inválido · 404 no existe |
| `POST /api/reservas` | 201 `{ id }` · 400 `{ errores: { campo: "mensaje" } }` |

**Funciones del navegador**

| Función | Archivo | La usa |
|---|---|---|
| `obtenerMenu()`, `obtenerPlato(id)`, `guardarReserva(r)` | datos.js | main.js, menu.js, reservas.js |
| `mostrarDestacados()`, `mostrarMenu()`, `iniciarFiltro()`, `mostrarDetalle()` | menu.js | main.js |
| `iniciarModoOscuro()`, `marcarPaginaActiva()`, `iniciarHorario()`, `mostrarClima()` | interactividad.js | main.js |
| `iniciarReservas()` | reservas.js | main.js |
| `limpiarTexto()`, `esNombreValido()` y demás validadores, `leerIdDeUrl()` | seguridad.js | reservas.js, menu.js y rutas/api.js |

Las tablas de la base de datos, los ids del HTML y las clases están descritos en los comentarios de cada archivo.

---

## Puntos de control

| Punto | Qué tiene que funcionar |
|---|---|
| 1 · Base | El servidor arranca, se ven las 5 páginas y el menú muestra los 6 platos de la base de datos. |
| 2 · Funciones | Filtro, detalle por URL, reserva completa con sus errores, modo oscuro, horario y clima. Diseño aplicado. |
| 3 · Pulido | Cabeceras de seguridad activas, pruebas de ataque de M08 pasadas y consola limpia. |

En cada punto, cada uno sube su rama y M09 la une en `develop`. Al final, M09 pasa `develop` a `main`.

---

## Montaje inicial del repositorio (solo M09, una vez)

```bash
cd forno-rosso
git init
git add .
git commit -m "Crear base del proyecto (Fase 0)"
git branch -M main
git branch develop
for r in m01-estructura m02-diseno m03-layout m04-base-datos m05-menu m06-interactividad m07-reservas m08-seguridad m09-integracion; do
  git branch feature/$r develop
done
git remote add origin URL_DEL_REPOSITORIO
git push -u origin --all
```

En Windows (PowerShell), el `for` se escribe así:

```powershell
"m01-estructura","m02-diseno","m03-layout","m04-base-datos","m05-menu","m06-interactividad","m07-reservas","m08-seguridad","m09-integracion" | ForEach-Object { git branch "feature/$_" develop }
```
