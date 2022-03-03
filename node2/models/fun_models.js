const req = require('express/lib/request');
const res = require('express/lib/response');
const {ModeloPelicula} = require('./models');
// La función para mostrar todas las instancias 
// select*from table
const getAllMovies = async(req,res)=>{ 
 try{
 const Peliculas =await ModeloPelicula.findAll();
 res.json(Peliculas);
 }catch(error){
 res.json({message: 'no se encontraron instancias'})
 
 }
 
 }
 

// La función para mostrar solo una instancia
//sql:select*from table where id_pelicula = 1;
const getOneMovie = async(req,res)=>{
try{
const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
res.json(Pelicula_unica);
}catch(error){
res.json({message: 'no se encontró instancia'}) 

}

}

// sequelize va a ser usado de una manera asincrona; requiere una respuesta y una petición

//La función para crear un registro

//La función para actualizar un registro

//La función para eliminar un registro(=> modelo pelicula)