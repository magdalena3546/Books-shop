import { Card, Row, Col, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link, Navigate,  useNavigate,  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Image from 'react-bootstrap/Image';
import { IMGS_URL } from '../../../config';
import Carousel from 'react-bootstrap/Carousel';
import { getBookById } from "../../../redux/booksRedux";
import shortid from "shortid";
import { useEffect, useState } from "react";
import styles from './Product.module.scss';
import { addCartLocalStorage, addToCart, editProductCart} from "../../../redux/cartRedux";
import Modal from 'react-bootstrap/Modal';
import AmountWidget from "../../features/AmountWidget/AmountWidget";

const Product = () => {
    const {id} = useParams();
    const productData = useSelector(state => getBookById(state, id));
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0)
    const [show, setShow] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (productData) {
            setTotalPrice(product.price * count);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productData, count]);

    let product = null;

    if (productData) {
        product = {
            id: shortid.generate(),
            name: productData.name,
            count: parseInt(count),
            price: productData.price,
            productId: productData.id,
            totalPrice: productData.price * parseInt(count),
            additionalInformation: ''
        };
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addCartLocalStorage(product));
        setShow(true);
    }

    const handleCountChange = (newCount) => {
        setCount(newCount);
        dispatch(editProductCart({
            id: productData.id,
            count: newCount,
            price: productData.price * newCount
        }),
        );
    }

    if(!productData) return <Navigate to ="/" />
    return(
    <Container>
        <Card border="light">
            <Card.Title className='my-4' as='h1'>{productData.name}</Card.Title>
            
            <Row className='justify-content-between'>
                <Col md={6}>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img className={styles.image} src={IMGS_URL + productData.mainImage} alt=''/>
                    </Carousel.Item>
                    {productData.images.map(image => <Carousel.Item key={shortid.generate()}><img className={styles.image} src={IMGS_URL + image} alt='' /></Carousel.Item>)}
                </Carousel>
                </Col>
                <Col md={7}>
                    <Card.Text className='my-4'><strong>Price:</strong> {totalPrice}</Card.Text>
                    <Card.Text className='my-4'>{productData.description}</Card.Text>
                </Col>
                <Col md={7}><AmountWidget count = {count} handleCountChange = {handleCountChange} /></Col>
                <Col md={6}>
                    <Button onClick = {handleClick} className='mx-2 mb-2' variant="outline-dark">Ad to cart</Button>
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