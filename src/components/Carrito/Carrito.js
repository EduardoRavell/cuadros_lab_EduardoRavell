import './Carrito.css';
import {useContext,useState,useEffect} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link,NavLink} from 'react-router-dom';
import {Button,Modal,Form} from 'react-bootstrap';
import {getFirestore,collection, addDoc} from 'firebase/firestore';
import swal from 'sweetalert';
function Carrito(){
    const {carrito,eliminarCarrito,totalCompra,limpiarCarrito} = useContext(CartContext);
    const [carritoVacio,setCarritoVacio] = useState(true);
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
    const submitHandler =async ()=>{
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
         await addDoc(ordersCollection,orden).then((doc)=>
         swal({
            icon:'success',
            title: `Gracias por su compra!  Su folio de seguimiento es: ${doc.id}`,
            button: {
                buttonText:'Confirmar',
                className: 'botonCarrito swal-boton'
              },
            closeOnClickOutside: true
           })
            
               );
              
            console.log(idOrden);
        
        limpiarCarrito();
        setShow(false);
        limpiarFormulario();
    }
    useEffect(()=>{
        if(carrito.length===0){
            setCarritoVacio(true);
        }else{
            setCarritoVacio(false)
        }
    },[carrito.length])
   
    
    return (
        <>
        <h1>Carrito</h1>
        
            {!carritoVacio ? 
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
            <Button className="botonFinalizar botonLimpiar" onClick={()=>{limpiarCarrito()}}
        >Limpiar Carrito</Button>
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
          <Button  onClick={()=>submitHandler()} className="botonCarrito" >
            Finalizar Pedido
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      
        </>
    )
}

export default Carrito;