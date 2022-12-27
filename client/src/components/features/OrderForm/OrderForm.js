import { useState } from "react";
import { Row, Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import {
    useSelector
} from "react-redux";
import {
    clearCart,
    getAllCartOrders
} from '../../../redux/cartRedux';
import OrderProductSummary from '../../common/OrderProductSummary/OrderProductSummary';
import { addOrder } from "../../../redux/ordersRedux";
import { API_URL } from "../../../config";

const OrderForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState(null);
    const cart =  JSON.parse(localStorage.getItem('cart')) || [];
    const dispatch = useDispatch();
    let navigate = useNavigate('/');
    const [show, setShow] = useState(false);

    const handleSubmit = () => {
        let productsInfo = [];
        let totalPrice = 0;
        if(cart.length > 0){
            for(let elm of cart) {
                const product = {
                    productId: elm.productId,
                    name: elm.name,
                    count: elm.count,
                    price: elm.price,
                    addInfo: elm.additionalInformation
                }
                totalPrice += elm.totalPrice;
                productsInfo.push(product);
            } 
        }
        
        const orderData = {
            firstName, lastName, email, city, street, number,  
            orderProducts: productsInfo,
            totalPrice: totalPrice
        };

        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                firstName: orderData.firstName,
                lastName: orderData.lastName,
                email: orderData.email,
                city: orderData.city,
                street: orderData.street,
                number: parseInt(orderData.number),
                orderProducts: orderData.orderProducts,
                totalPrice: orderData.totalPrice
            })
        };
        dispatch(addOrder(orderData));
        fetch(`${API_URL}/orders`, options);
        dispatch(clearCart());
        localStorage.removeItem('cart');
        setShow(true);
    };
   
    return (
        <Container className="col-12 col-sm-3 mx-auto my-4 justify-content-center">
            <Row>
                {cart.map(elm => <OrderProductSummary key={elm.id} {...elm} />)}
            </Row>
            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control placeholder="First name" value = {firstName} onChange = {e => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control placeholder="Last name" value = {lastName} onChange = {e => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control placeholder="Email" type='email' value = {email} onChange = {e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City:</Form.Label>
                    <Form.Control placeholder="City" value = {city} onChange = {e => setCity(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Street:</Form.Label>
                    <Form.Control placeholder="Street" value = {street} onChange = {e => setStreet(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Number:</Form.Label>
                    <Form.Control placeholder="Number" value = {number} onChange = {e => setNumber(e.target.value)} />
                </Form.Group>
                <Button variant="dark" type="submit">Order</Button>
            </form>
            <Modal size="sm" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>Order send</Modal.Body>
            </Modal>
        </Container> 
    )
};

export default OrderForm;