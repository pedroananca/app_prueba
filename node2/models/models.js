// Tenemos que definir  1 modelo porque solo hay 1 entidad
// se tienen que definir tantos modelos como relaciones existan + sus relaciones n a n(En algunos casos)
const {Sequelize, Datatypes, DataTypes} = require('sequelize');
const {database} = require('../database/db');
//console.log(database);
// generar una instancia del modelo
const ModeloPelicula = database.define('Pelicula', {
title: {type: DataTypes.STRING },
content: {type: DataTypes.STRING }

})
console.log(ModeloPelicula);
module.exports.ModeloPelicula = ModeloPelicula;