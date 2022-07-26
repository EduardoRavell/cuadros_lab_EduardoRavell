import './Carrito.css';
import {useContext,useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link,NavLink} from 'react-router-dom';
import {Button,Modal,Form} from 'react-bootstrap';
import {getFirestore,collection, addDoc} from 'firebase/firestore';
function Carrito(){
    const {carrito,eliminarCarrito,totalCompra,limpiarCarrito} = useContext(CartContext);
     const [idOrden,setIdOrden]=useState('');
    const eliminarArticulo = (item)=>{
        eliminarCarrito(item);
    };
    const [show, setShow] = useState(false);
    const [nombre,setNombre] =useState('');
    const [telefono,setTelefono] =useState('');
    const [email,setEmail] =useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nombreHandler = (event)=>{
        setNombre(event.target.value);
    }
    const telefonoHandler = (event)=>{
        setTelefono(event.target.value);
    }
    const emailHandler = (event)=>{
        setEmail(event.target.value);
    }
    const limpiarFormulario =()=>{
        setNombre('');
        setTelefono('');
        setEmail('');
    }
    const submitHandler = ()=>{
        const nuevoComprador ={
            nombre:nombre,
            telefono:telefono,
            email:email,
            fecha: Date()
        }

        const orden = {
            comprador:nuevoComprador,
            total:totalCompra(),
            items:carrito,
            fecha: Date()
        }
                const db = getFirestore();
        const ordersCollection = collection(db,"ordenes");
        addDoc(ordersCollection,orden).then((doc)=>{
            console.log(doc.id)});
           
      
        
        limpiarCarrito();
        setShow(false);
        limpiarFormulario();
    }

    
    
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
        <Button className="botonFinalizar" onClick={handleShow}
        >Finalizar Compra</Button>
       </div>
        </div> : <div><p>No hay articulos en el carrito </p> <br/> <NavLink className="botonCarrito" to="/productos">Seguir comprando</NavLink></div>
        
            }
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingrese sus datos</Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" value={nombre} onChange={nombreHandler} />
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Telefono" value={telefono} onChange={telefonoHandler}/>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email}onChange={emailHandler} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="botonCarrito" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={()=>submitHandler()} className="botonCarrito" >
            Finalizar Pedido
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
        </>
    )
}

export default Carrito;