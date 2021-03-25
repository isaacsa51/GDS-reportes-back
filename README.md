# GDS-reportes-back

### Requerimientos

- No ser flojo y chambear.
- Echarle ganas pa acabar esto rápido.
- Tener instalado NodeJS.
- Investigarle un chingo a NodeJS porque ni yo sé.
- Saber usar Postman.

### Instrucciones

Clonar el repositorio con el comando `git clone <url de este repositorio>`

Una vez hecho esto dentro del proyecto abrir Powershell o Bash en caso de Linux y ejecutar el siguiente comando:

`npm install`

Este nos ayudará para poder instalar las librerias necesarias que se necesita para poder arrancar la API, ya sea como Express, uuid, etc...

Para finalizar, para correr el programa bastará con un:

`npm run dev`

Para poder ver activo la API se encuentra en el _localhost:5000_.

## Endpoints a realizar

- LOGIN

  - **POST**
    - Email - usuarios TEXT
    - Password - usuarios TEXT

- REGISTRO

  - **POST**
    - Email - usuarios TEXT
    - Password - usuarios TEXT

- RESET PASSWORD
  _Antes de resetear el pass checar si existe el correo metido dentro de la app mediante una petición GET hacía el servidor, en caso de existir dicho correo, resetar el password con el nuevo ingresado._

  - **PUT** - Email - usuarios TEXT - Password - usuarios TEXT

- REPORTES

  - **GET, todos**

    - Usuario, dependiendo de que ID sea sacar su nombre - reportes TEXT
    - Descripcion - reportes TEXT
    - Empresa dirigida, se checa el ID empresa y se saca su nombre - reportes TEXT
    - Numero de comentarios, contar el total de comentarios por ID del reportes - reportes INT
    - Likes, total de likes por ID del reporte - reportes INT
    - Posición - reportes
      - Se guardará ya sea un objeto JSON o dos campos, lat y long.

  - **GET, find by Empresa**

    - Usuario, dependiendo de que ID sea sacar su nombre - reportes TEXT
    - Descripcion - reportes TEXT
    - Empresa dirigida, se checa el ID empresa y se saca su nombre - reportes TEXT
    - Numero de comentarios, contar el total de comentarios por ID del reporte - reportes INT
    - Likes, total de likes por ID del reporte - reportes INT
    - Posición - reportes
      - Se guardará ya sea un objeto JSON o dos campos, lat y long

  - **POST**

    - URI, archivo del video en sí - reportes TEXT
    - Ubicación - reportes TEXT _va a hacer un objeto JSON, subjeto a cambios_
    - Empresa - reportes TEXT
    - Titulo - reportes TEXT
    - Descripción - reportes TEXT

  - **GET, pantalla de mapa**
    - Titulo - reportes TEXT
    - Descripción - reportes TEXT
    - Ubicación - reportes TEXT

- COMENTARIOS

  - **GET**

    - Nombre del usuario - comentarios TEXT
    - Fecha - comentarios DATE
    - Texto - comentarios TEXT

  - **POST**
    _Los demás valores los agarrará desde la cuenta logeada, así que solo se enviara el puro texto del comentario a publicar_
    - Texto - comentarios TEXT

- PERFIL

  - **GET**

    - Nombre - usuarios TEXT
    - Apellidos - usuarios TEXT
    - Email - usuarios TEXT

  - **PUT**
    - Nombre
    - Apellidos
    - Email
    - Telefono
