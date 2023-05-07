# PROYECTO PERSONAL TALENTO DIGITAL - REST API Digitalizate

## Link repositorio

https://github.com/BryanC7/REST-API-Talento-Digital

## Obtener repositorio en tu pc
Clonar el repositorio
```bash
  git clone https://github.com/BryanC7/REST-API-Talento-Digital
```

## Instrucciones para la ejecución del proyecto  
1. En primer lugar, ejecutar mediante terminal el comando `npm i` para llevar a cabo las instalaciones de todas las dependencias implementadas.
2. Se recomienda instalar la extensión de postgreSQL en Visual Studio Code para tener un mayor control de la base de datos y sus tablas.
3. Ejecutar el comando `npm run db-tables` para la creación de la base de datos, sincronización de los modelos, generación de las tablas, se agregan los 2 roles de administrador / cliente y se agrega un usuario de prueba el cual posee rol administrador (Para crear un usuario de tipo cliente simplemente registrarse y logearse en la página).

```bash
Correo electrónico: admin.prueba@gmail.com
Contraseña: 1234
```
3. Finalmente, en la terminal ejecutar `npm run dev` para arrancar la api en el puerto previamente definido (Si utilizas otro distinto al 4000 va a ser necesario cambiar la url usada en el repositorio "Portafolio-Talento-Digital").

## Rúbrica
Items de la rúbrica y sus archivos respectivos (La totalidad de los puntos a evaluar están divididos entre ambos proyectos):
#### Consultas base de datos
- Selección de columnas requeridas para presentar la información solicitada: `/src/controllers`
- Uso de JOIN para relacionar la información de distintas tablas: `/src/controllers/order.js`
- Uso de WHERE para filtrar la información requerida: `/src/controllers` 
- Uso de cláusulas de ordenamiento para presentar la información: `/src/controllers/user.js` 
- Uso de cláusulas de agrupación de información para obtener datos agregados: `/src/controllers/user.js`

#### Lenguaje Node
- Inclusión de paquetes y librerias de usuario: `package.json`
- Agrupación de código y separación por funcionalidad: `/src`
- Utilización de funciones asíncronas: `/src/controllers`
- Lectura de parámetros de entrada: `/src/routes`
- Funcionamiento general del aplicativo: `/src/routes`

#### Uso de express
- Creación de servicio REST: `/src/app.js` `/src/config.js` `/src/db.js` `/src/index.js`

## Screenshots

#### Modelo entidad-relación
<p align="center">
    <img src="https://github.com/BryanC7/REST-API-Talento-Digital/blob/master/screenshots/modelo-entidad-relacion.png?raw=true"/>
</p>

#### Visualización de tablas una vez creadas
<p align="center">
    <img src="https://github.com/BryanC7/REST-API-Talento-Digital/blob/master/screenshots/db-tablas.png?raw=true"/>
</p>
