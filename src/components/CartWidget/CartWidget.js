import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function CartWidget(){
    return (
        <>
        <div>
        <a href="carrito#">
        <FontAwesomeIcon icon={faCartShopping} color="black" size="lg"/>
        </a>
        </div>
      </>
    );
  }

  export default CartWidget;