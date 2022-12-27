import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './SectionInformation.module.scss'

const SectionInformation = () => {
  return(
    <div className ={styles.div}>
        <Container>
            <Row>
                <Col md={6}>
                    <h3 className="mb-3">Quick Information</h3>
                    <p className="my-2" >Bookwarm</p>
                    <p className="my-2" >Lorem street 5</p>
                    <p className="my-2" >30-000 Poland</p>
                    <p className="my-2">555-444-333</p>
                    <p className="my-2">lorem@gmail.com</p>
                </Col>
                <Col md={6}>
                    <h3 className="mb-3">Products</h3>
                    <Link className="d-block my-2" to='/'>Home</Link>
                    <Link className="d-block my-2" to='/delivery'>Delivery</Link>
                    <Link className="d-block my-2" to='/new'>New Products</Link>
                    <Link className="d-block my-2" to='/contact'>Contact Us</Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
};

export default SectionInformation;