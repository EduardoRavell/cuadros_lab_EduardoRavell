import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function CartWidget(props){
    return (
        <>
        <div>
        <a href={props.link}>
        <FontAwesomeIcon icon={faCartShopping} color="black" size="lg"/>
        </a>
        </div>
      </>
    );
  }

  export default CartWidget;