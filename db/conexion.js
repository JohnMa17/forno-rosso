
const path = require('path'); //Armar rutas de Archivo
const fs = require('fs'); //Archivos de Sistema
const Database = require('better-sqlite3'); // Manejador de BD



const db = new Database(RUTA_BD);

// WAL es un componente que permite que la conexión de lectura lea mientras otra escribe,
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

const esquema = fs.readFileSync(path.join(__dirname, 'esquema.sql'), 'utf8');
db.exec(esquema); // 

// Datos 
function sembrarDatos() {
  const { total } = db.prepare('SELECT COUNT(*) AS total FROM usuarios').get();
  if (total > 0) return;


  const clientes = [
    ['Ana', 'ana@gmail.com', 'cliente'],
    ['Administración', 'admin@gmail.com', 'admin'],
  ];

  const insertarPlato = db.prepare(
    'INSERT INTO platos (nombre, descripcion, precio, categoria) VALUES (?, ?, ?, ?)'
  );
  const platos = [
    ['Pizza Margarita', 'Tomate, mozzarella y albahaca', 10, 'pizza'],
    ['Pizza Pepperoni', 'Tomate, mozzarella y pepperoni', 9.5, 'pizza'],
    ['Pizza Cuatro Quesos', 'Mozzarella, gorgonzola, parmesano y ricotta', 10.5, 'pizza'],
  ];

  // Una transacción
  const sembrar = db.transaction(() => {
    for (const p of platos) insertarPlato.run(...p);
  });
  sembrar();
}
sembrarDatos();

const dbLectura = new Database(RUTA_BD, { readonly: true, fileMustExist: true });
dbLectura.pragma('foreign_keys = ON');


module.exports = { db, dbLectura, RUTA_BD };
