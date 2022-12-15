import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link, Navigate,  useNavigate,  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Image from 'react-bootstrap/Image';
import { IMGS_URL } from '../../../config';
import Carousel from 'react-bootstrap/Carousel';
import { getBookById } from "../../../redux/booksRedux";
import shortid from "shortid";
import { useState } from "react";
import styles from './Product.module.scss';
import { addToCart} from "../../../redux/cartRedux";
import Modal from 'react-bootstrap/Modal';

const Product = () => {
    const {id} = useParams();
    const productData = useSelector(state => getBookById(state, id));
    const [countProduct, setCountProduct] = useState(0);
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const product = {
            name: productData.name,
            price: productData.price,
            count: countProduct
        }
        dispatch(addToCart(product));
        setShow(true);
    }

    if(!productData) return <Navigate to ="/" />
    return(
    <Container>
        <Card border="light">
            <Card.Title className='my-4' as='h1'>{productData.name}</Card.Title>
            
            <Row className='justify-content-between'>
                <Col md={7}>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img className={styles.image} src={IMGS_URL + productData.mainImage} alt=''/>
                    </Carousel.Item>
                    {productData.images.map(image => <Carousel.Item key={shortid.generate()}><img className={styles.image} src={IMGS_URL + image} alt='' /></Carousel.Item>)}
                </Carousel>
                </Col>
                <Col md={7}>
                    <Card.Text className='my-4'><strong>Price:</strong> {productData.price}</Card.Text>
                    <Card.Text className='my-4'>{productData.description}</Card.Text>
                </Col>
                <Col md={6}>
                    <span>count: </span>
                    <input className = {styles.input} onChange = {e => setCountProduct(e.target.value)} type='number' min='0' max='10'></input>
                    <Button onClick = {handleClick} className='mx-2' variant="outline-dark">Ad to cart</Button>
                </Col>
            </Row>
        </Card>
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Added to cart!</Modal.Body>
      </Modal>
    </Container>
    )
}

export default Product;