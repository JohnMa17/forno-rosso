--Base de dadtos, con tabla PLATOS, CLIENTE Y RESVERVAS 
--Use el Check como parametro de seguridad final, base 3. Es lo adecuado para proteccion
--Obliga a que se verifque 

model {
  table platos {
    id integer [pk, increment]
    nombre varchar(255) [not null]
    descripcion text
    precio decimal(10, 2) [not null, check: precio > 0]
    categoria varchar(50) [not null, check: categoria in ('pizzas', 'pastas', 'bebidas')]
    imagen varchar(255)
  }

  table cliente {
    id integer [pk, increment]
    nombre varchar(255) [not null]
    correo varchar(255) [not null]
    fecha date [not null]
  }



  table adminitrador {
    id integer [pk, increment]
    nombre varchar(255) [not null]
    correo varchar(255) [not null]
    contraseña varchar(255) [not null]
  } 

    table reservas {
    id integer [pk, increment]
    fecha date [not null]
    hora time [not null]
    personas integer [not null]
    comentario text [not null]
    creada_en timestamp [default: `CURRENT_TIMESTAMP`]
}