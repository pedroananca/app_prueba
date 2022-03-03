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
//sql: insert into table ...{}
const createOneMovie = async(req,res)=>{
  try{
   // en este caso se almacena directamente
   await ModeloPelicula.create(req.body);
   // de lo que me da el cliente lo cojo
   res.json({message:"Registro creado exitosamente"});
  } catch(error){

res.json({message:"No se ha realizado ningún registro"})
  }
}

//La función para actualizar un registro
const updateOneMovie = async(req,res)=>{
 try{
  await ModeloPelicula.update(req.body({where:{id:req.params.id}}))
  res.json({message: "Registro actualizado"})
 }catch(error){res.json({message: "No se ha podido actualizar el registro"})}

};
//La función para eliminar un registro(=> modelo pelicula)
const deleteOneMovie = async(req,res)=>{

try{
 await ModeloPelicula.destroy(req.body({where:{id:req.params.id}
 }))
 res.json({messsage: "Eliminado correctamente"})
}catch(error){res.json({message:"No se ha podido eliminar el registro"})}


};
module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie};