//axios es una libreria de js para conectar frontend con backend=> envia datos en direcciones opuestas; 
//del frontend al backend y viceversa
//react-router-dom: Libreria para colocar rutas del backend

import axios from 'axios';
// Es una función que solo se usa cuando sucede un efecto ocurre un estado; por ejemplo: click borrar; entonces el estado es que el nombre desaparezca;
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
//import {symlink} from 'fs'; 
//symlink("../../../fun_models","app/frontendreact/src/peliculas");

const URL = 'http://localhost:4000/movie/'





const ComponenteMostrarPelicula =()=> {

 const [movies,setMovie] = useState([]);useEffect(()=>{getMovies();},[]);
 
 const getMovies = async() =>{
  await axios.get(URL).then((response)=>{setMovie(response.data);});}
  
 
const deleteMovie=async(id)=>{
 await axios.delete(`${URL}${id}`);
getMovies();
}
return(
 <div className='container'>
<div className='row'>
<div className='col'>
 <Link to = '/create' className='btn btn-primary mt-2 mb-2'>Create</Link>
 <table className='table'>
  <thead className='table primary'>
    <tr>
     <th>Title</th>
     <th>Content</th>
     <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {movies.map((movie)=>{
      <tr key = {movie.id}> 
        <td>{movie.title}</td>
        <td>{movie.content}</td>
        <td><Link to = {`/edit/${movie.id}`} className="btn btn-info">Editar
         </Link>
         <button onclick ={deleteMovie(movie.id)} className="btn btn-danger">Delete</button>
        </td>

      </tr>

    })}

  </tbody>
  
 </table>
</div>

</div>


 </div>

);


}
export default ComponenteMostrarPelicula;