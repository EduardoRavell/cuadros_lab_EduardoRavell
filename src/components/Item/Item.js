import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './Item.css';
function Item({id,img,titulo,descripcion,categoria,precio,stock}){
  const [ultimaPieza,setUltimaPieza]=useState(false);
  const validarUltimaPieza = ()=>{
    if(parseInt(stock)===1){
        setUltimaPieza(true);
    }
}
useEffect(()=>{
  validarUltimaPieza();
},[])

    return (
        <>

<Card className="cuadro" id="cuadro">
  <Card.Body>
  <Card.Img variant="top" src={img} className="imagen" />
    {ultimaPieza==true ? <b>¡Ultima Pieza Disponible!</b> : ''}
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>
    {descripcion}
    </Card.Text>
    <Card.Text>
    <b>Categoria:</b> {categoria}
    </Card.Text>
    <Card.Text>
    <b>${precio}</b>
    </Card.Text>
   
   <Link  to={`/cuadro/${id}`}><button className="botonCuadro"> Ver detalles</button></Link>
  </Card.Body>
</Card>
        </>
    );
}

export default Item;