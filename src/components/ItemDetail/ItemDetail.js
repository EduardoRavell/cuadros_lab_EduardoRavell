import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
function ItemDetail(props){
    const {id,img,titulo,categoria,descripcion,precio,stock}=props;
    const [compraRealizada,setCompraRealizada]=useState(false);
    const onAdd = (cantidad)=>{
        setCompraRealizada(true);
        // addToCart()
    };
    return (
       
    <>
         <div className="ItemDetail">
         <h1>Detalles</h1>
            <img src={img} className="img_cuadro"></img>
            <h1>{titulo}</h1>
            <p>Categoria: {categoria}</p>
           <p>{descripcion}</p>
           <p>${precio}</p>
        {compraRealizada ? ( 
        <Link to="/carrito" className="botonCarrito"
        onClick={console.log('comprado')}>Ir al carrito</Link>)
        :
        (
        <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
        )}
         
        
        </div>
    </>
    );
}

export default ItemDetail;