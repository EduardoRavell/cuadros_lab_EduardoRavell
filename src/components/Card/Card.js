import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Card(props){
    return (
        <>
        <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
    
        </>
    );
}

export default Card;