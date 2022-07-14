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
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter} from 'react-router-dom';
import {CartProvider} from './components/CartContext/CartContext';

function App() {
  return (
    <div className="App">
      
      <header className="header">
        <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route index element={<Productos/>}></Route>
            <Route path="/productos" element={<Productos/>}></Route>
            <Route path="/cuadro/:cuadroId" element={<ItemDetailContainer/>}></Route>
            <Route path="/nosotros" element={<Nosotros/>}></Route> 
            <Route path="/contacto" element={<Contacto/>}></Route> 
            <Route path="/carrito" element={<Carrito/>}></Route> 
            <Route path="/:idCategoria" element={<Productos/>}></Route> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </header>
     
    </div>
  );
}

export default App;
