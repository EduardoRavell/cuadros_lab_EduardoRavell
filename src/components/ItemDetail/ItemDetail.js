import {useContext, useState,useEffect} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
function ItemDetail(props){
    const {agregarCarrito} = useContext(CartContext);
    const {id,img,titulo,categoria,descripcion,precio,stock}=props;
    const [compraRealizada,setCompraRealizada]=useState(false);
    const [ultimaPieza,setUltimaPieza]=useState(false);

    const validarUltimaPieza = ()=>{
        if(parseInt(stock)===1){
            setUltimaPieza(true);
        }
    }
    useEffect(()=>{
        validarUltimaPieza();
    },[])
    const onAdd = (cantidad)=>{
        setCompraRealizada(true);
        agregarCarrito(props,cantidad);
    };
    return (
       
    <>
   
         <div className="ItemDetail">
         <h1>Detalles</h1>
            <img src={img} className="img_cuadro"></img>
            <h1>{titulo}</h1>
            <p>Categoria: {categoria}</p>
           <p>{descripcion}</p>
           <p>Disponibles: {stock}</p>
           {ultimaPieza==true ? <p><b>¡Ultima Pieza Disponible!</b></p>:<p></p>}
           <p>${precio}</p>
        {compraRealizada ? ( 
        <Link to="/carrito" className="botonCarrito"
        >Ir al carrito</Link>)
        :
        (
        <ItemCount stock={stock} initial={1} onAdd={onAdd}></ItemCount>
        )}
         
        </div>
    </>
    );
}

export default ItemDetail;