const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie} = require('../models/fun_models')
router.get('/',getAllMovies);
router.get('/:id',getOneMovie);

router.get('/', createOneMovie);
router.post('/', createOneMovie);
router.delete('/:id',deleteOneMovie);
//put lo que realiza es actualizar
router.put('/:id',updateOneMovie);

/*
router.get('/',(req,res)=>{
console.log("Paso 1 realizado");
res.send(`<h1>Todo bien y funcionando</h1>`);

}); */

module.exports.inicio = router; 