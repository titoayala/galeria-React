import Card from 'react-bootstrap/Card';

function Cards(props) {
    const estiloTitulo = {fontSize:'1.5rem', color: 'black'}
    const estiloDescripcion = {fontSize:'1rem', color: 'gray'}
    return (
        <div>
            <Card className='tarjeta' style={{ width: "25rem" }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title style={estiloTitulo}>{props.title}</Card.Title>
                    <Card.Text style={estiloDescripcion}>{props.descripcion}</Card.Text>
                </Card.Body>
            </Card>
            <hr />
        </div>
    );
}

export default Cards;