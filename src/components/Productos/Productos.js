import './Productos.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import {Link} from 'react-router-dom';
function Productos(){
    return (
    <>
    <div className="body">
    <ItemListContainer titulo="Bienvenidos a CuadrosLab"/>
    {/* <ItemDetailContainer/> */}
        
    </div>
    </>
    );
}

export default Productos;