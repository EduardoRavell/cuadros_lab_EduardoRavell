import {Card,Button} from 'react-bootstrap';
import './Item.css';
function Item({titulo,descripcion,categoria,precio}){
    return (
        <>

<Card className="cuadro">
  <Card.Body>
    
    <Card.Title>{titulo}</Card.Title>
    <Card.Text>
    {descripcion}
    </Card.Text>
    <Card.Text>
    {categoria}
    </Card.Text>
    <Card.Text>
    ${precio}
    </Card.Text>
    <Button variant="primary">Ver detalles</Button>
  </Card.Body>
</Card>
        </>
    );
}

export default Item;