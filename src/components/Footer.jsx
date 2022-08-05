import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <div>
            <hr />
            <Alert key={'success'} variant={'success'}>
                Desea ver mas fotos gratis? Haga click en {' '}
                <Alert.Link href="https://www.pexels.com/es-es/" target="_blank">Este enlace.</Alert.Link>
            </Alert>
        </div>
    );
};

export default Footer;