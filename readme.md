# PROYECTO PERSONAL TALENTO DIGITAL - REST API Digitalizate
## Link repositorio
https://github.com/BryanC7/REST-API-Talento-Digital
## Instrucciones para la ejecución del proyecto  
1. En primer lugar, ejecutar mediante terminal el comando ```npm i``` para llevar a cabo las instalaciones de todas las dependencias implementadas.
2. Es necesario la creación manual de la base de datos con ```postgreSQL``` (Idealmente utilizar las variables de entorno definidas en el archivo "config.js". De lo contrario, en el archivo previamente nombrado cambiar los valores asignados por tus credenciales personales de postgreSQL).
3. Ejecutar el comando ```npm run tables``` para la sincronización de los modelos, generar las tablas, agregar los 2 roles de administrador / cliente y agregar un usuario de prueba el cual posee rol administrador (Para crear un usuario de tipo cliente simplemente registrarse y logearse en la página).
4. Finalmente, en la terminal ejecutar ```npm run dev``` para arrancar la api en el puerto previamente definido (Si utilizas otro distinto al 4000 va a ser necesario cambiar la url usada en el repositorio "Portafolio-Talento-Digital").

## Rúbrica
Items de la rúbrica y sus archivos respectivos (La totalidad de los puntos a evaluar están divididos entre ambos proyectos):
#### Consultas base de datos
- Selección de columnas requeridas para presentar la información solicitada: ```/src/controllers```
- Uso de JOIN para relacionar la información de distintas tablas: ```/src/controllers/order.js``` 
- Uso de WHERE para filtrar la información requerida: ```/src/controllers``` 
- Uso de cláusulas de ordenamiento para presentar la información: ```/src/controllers/user.js``` 
- Uso de cláusulas de agrupación de información para obtener datos agregados: ```/src/controllers/user.js``` 

#### Lenguaje Node
- Inclusión de paquetes y librerias de usuario: ```package.json```
- Agrupación de código y separación por funcionalidad: ```/src```
- Utilización de funciones asíncronas: ```/src/controllers```
- Lectura de parámetros de entrada: ```/src/routes```
- Funcionamiento general del aplicativo: ```/src/routes```

#### Uso de express
- Creación de servicio REST: ```/src/app.js``` ```/src/config.js``` ```/src/db.js``` ```/src/index.js```

## Screenshots
#### Modelo entidad - relación
![App Screenshot](https://github.com/BryanC7/REST-API-Talento-Digital/blob/main/screenshots/creacion-db.png?raw=true)
#### Creación base de datos (uso de extensión postgreSQL en VSC)
![App Screenshot](https://github.com/BryanC7/REST-API-Talento-Digital/blob/main/screenshots/nombre-db.png?raw=true)
#### Query para la creación de la base de datos (nombre)
![App Screenshot](https://github.com/BryanC7/REST-API-Talento-Digital/blob/main/screenshots/db-tablas.png?raw=true)