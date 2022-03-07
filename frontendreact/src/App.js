import logo from './logo.svg';
import './App.css';
import ComponenteMostrarPelicula from './peliculas/MostrarPelicula';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import react from 'react';
function App() {
  return (
    <div className="App">
         <div className="container">
       <h1>Tabla de películas</h1>
     </div>
     <BrowserRouter>
     <Routes>
<Route path='/' element={<ComponenteMostrarPelicula/>}/>



     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
