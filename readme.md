# Repositorio
https://github.com/BryanC7/REST-API-Talento-Digital
## Instrucciones para la ejecución del proyecto  
1. En primer lugar, ejecutar mediante terminal el comando ```npm i``` para llevar a cabo las instalaciones de todas las dependencias implementadas.
2. Es necesario la creación manual de la base de datos con ```postgreSQL``` (Idealmente utilizar las variables de entorno definidas en el archivo "config.js". De lo contrario, en el archivo previamente nombrado cambiar los valores asignados por tus credenciales personales de postgreSQL).
3. Ejecutar el comando ```npm run tables``` para la sincronización de los modelos, generar las tablas, agregar los 2 roles de administrador / cliente y agregar un usuario de prueba el cual posee rol administrador (Para crear un usuario de tipo cliente simplemente registrarse y logearse en la página).
4. Finalmente, en la terminal ejecutar ```npm run dev``` para arrancar la api en el puerto previamente definido (Si utilizas otro distinto al 4000 va a ser necesario cambiar la url usada en el repositorio "Portafolio-Talento-Digital").