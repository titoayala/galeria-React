import Card from 'react-bootstrap/Card';

function Cards(props) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.descripcion}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;