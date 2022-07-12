import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './components/Productos/Productos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Carrito from './components/Carrito/Carrito';
function App() {
  return (
    <div className="App">
      
      <header className="header">
      <NavBar/>
      <Routes>
        <Route index element={<Productos/>}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        <Route path="/cuadro/:cuadroId" element={<ItemDetailContainer/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route> 
        <Route path="/contacto" element={<Contacto/>}></Route> 
        <Route path="/carrito" element={<Carrito/>}></Route> 
      </Routes>
      </header>
     
    </div>
  );
}

export default App;
