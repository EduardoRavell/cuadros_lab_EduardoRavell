import './Carrito.css';
import {useContext,useEffect} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link,NavLink} from 'react-router-dom';
function Carrito(){
    const {carrito,eliminarCarrito,totalCompra} = useContext(CartContext);
    const eliminarArticulo = (item)=>{
        eliminarCarrito(item);
    };

    return (
        <>
        <h1>Carrito</h1>
        
            {carrito.length>=1 ? 
            <div className='contenedor_carrito'>
            <div className='articulo_carrito'>
            {
            carrito.map((elemento)=>(
                <div className='carrito_item'>     
                    <img className='imagen_item' src={elemento.item.img}></img>
                    <div className='item_informacion'>
                        <p><b>Titulo:</b>{elemento.item.titulo}</p>
                        <p><b>Cantidad:</b> {elemento.cantidad}</p>
                        
                    </div>
                    <div className='item_precio'>
                    <p><b>Precio:</b> ${elemento.item.precio}</p>
                    </div>
            <button className="boton_accion" onClick={()=>eliminarArticulo(elemento.item)}>Eliminar</button>
                </div>
                
           ))}
           </div>
       <div className="resumen_carrito">
       <span className='total'>Total: $ {totalCompra()}</span>
        <Link to="/carrito" className="botonCarrito"
        >Finalizar Compra</Link>
       </div>
        </div> : <div><p>No hay articulos en el carrito </p> <br/> <NavLink className="botonCarrito" to="/productos">Seguir comprando</NavLink></div>
        
            }
       
      
        </>
    )
}

export default Carrito;