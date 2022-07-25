import './CartWidget.css';
import {useContext,useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../CartContext/CartContext';
import {NavLink} from 'react-router-dom';
function CartWidget(props){
  const {carrito} = useContext(CartContext);
  const [elementosCarrito,setElementosCarrito]=useState(0);
   useEffect(()=>{
    setElementosCarrito(carrito.reduce((previous,current)=>previous+current.cantidad,0));
  },[carrito]);
    return (
        <>
        <div className  ="contenedor-carrito">
        <NavLink to={props.link}>
          {elementosCarrito>=1 && (<div className="contador-carrito">{elementosCarrito}</div>) }
       
          <FontAwesomeIcon icon={faCartShopping} className="carrito" color="black" size="lg"/>
        </NavLink>
        </div>
      </>
    );
  }

  export default CartWidget;