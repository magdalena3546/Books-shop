import { faCreditCard, faMessage, faRocket, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row, Card } from "react-bootstrap";
import styles from './ServiceBlock.module.scss'

const ServiceBlock = () => {
    return (
        <Container className={styles.container}>
            <Row>
            <Col md={3}>
                <Card className = 'mb-4'>
                    <Card.Body>
                        <FontAwesomeIcon className={styles.icon} icon={faTruck} />
                        <Card.Title className="mt-2">Fast Free Delivery</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">For On $80</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className = 'mb-4'>
                    <Card.Body>
                        <FontAwesomeIcon className={styles.icon} icon={faMessage} />
                        <Card.Title className="mt-2">24/7 Online Support</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Best Support</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className = 'mb-4'>
                    <Card.Body>
                        <FontAwesomeIcon className={styles.icon} icon={faCreditCard} />
                        <Card.Title className="mt-2">Easy Safe Payment</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">100$ Secure</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className = 'mb-4'>
                    <Card.Body>
                        <FontAwesomeIcon className={styles.icon} icon={faRocket} />
                        <Card.Title className="mt-2">Easy Store Search</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Best Location</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
    )
};

export default ServiceBlock;