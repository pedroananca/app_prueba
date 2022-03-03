// lugar de configuración de nuestro servidor ...
// importamos express
const express = require('express');
const routes = require('../routs/routs.js');
const {database} = require('../database/db');
// Express es una clase configurable, es un servicio http
// Nota: se necesita crear una instancia; una clase contiene instancias
//clase: polo, instancia viene a ser polo rojo, otra un polo negro, ...
const server_app = express(); //inicializando el proceso
//conectarnos a la base de datos
server_app.set('port', process.env.PORT || 4000) // verifica un puerto libre o lo envía al 4000

try{

 database.authenticate();
 console.log("Conectado");
 //await ; o sea va a esperar; va a pasar a cola(asincrono), va a revisar cada uno de los elementos de database; peliculas, root, Pc199818,localhost,...;

} catch(error){console.log("Algo está mal")}
 
server_app.listen(server_app.get('port'),() =>{console.log('server on port',server_app.get('port'))});
;// configuración de nuestro servidor
server_app.use('/movie',routes.inicio);
console.log("Terminado al final");