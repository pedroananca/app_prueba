// una forma de hacerlo
//const sequelize = require('sequalize');
//const database = new sequelize.Sequelize()
//2°forma de hacerlo
// sequelize permite conectarme a una base de datos
const { Sequelize } = require('sequelize');
const database = new Sequelize('peliculas','root','Pc199818',{
host:'localhost',
dialect:'mysql'
}
);

module.exports.database = database;
// con try probamos si tenemos conexion con la base de datos
//try{

// database.authenticate();
 //console.log("Conectado");
 // await ; o sea va a esperar; va a pasar a cola(asincrono), va a revisar cada uno de los elementos de database; peliculas, root, Pc199818,localhost,...;

//} catch(error){console.log("Algo está mal")}


//para probar en el json, ya que no se permite escribir comentarios
//"test_database": "node ./database/db.js"