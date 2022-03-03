// Tenemos que definir  1 modelo porque solo hay 1 entidad
// se tienen que definir tantos modelos como relaciones existan + sus relaciones n a n(En algunos casos)
const {Sequelize, Datatypes} = require('sequelize');
const {database} = require('../database/db');
console.log(database);

