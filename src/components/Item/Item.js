import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Item.css';
function Item({id,img,titulo,descripcion,categoria,precio,stock}){
    return (
        <>

<Card className="cuadro" id="cuadro">
  <Card.Body>
  <Card.Img variant="top" src={img} className="imagen" />
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
   <Link  to={`/cuadro/${id}`}><Button className="btnDetalles"> Ver detalles</Button></Link>
  </Card.Body>
</Card>
        </>
    );
}

export default Item;