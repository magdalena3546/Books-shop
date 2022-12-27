import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Card, Form, Button, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { editProductCart, editProductCartInfo, getAllCartOrders, removeProduct, removeProductFromLocalStorage } from "../../../redux/cartRedux";
import AmountWidget from "../../features/AmountWidget/AmountWidget";

const CartOrder = (props) => {
    const [ additionalInformation, setAdditionalInformation ] = useState('' || props.additionalInformation);
    const [count, setCount] = useState(props.count);
        
    const dispatch = useDispatch();
   
    const [show, setShow] = useState(false);
    
    useEffect(() => {
       dispatch(editProductCartInfo({ id: props.id, additionalInformation: additionalInformation}));
    }, [additionalInformation, dispatch, props.id]);

    const handleCountChange = (newCount) => {
        setCount(newCount);
        dispatch(editProductCart({
            id: props.id,
            count: newCount,
            price: props.price * newCount,
            addInfo: props.additionalInformation
        }),
        );
    }

      const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeProductFromLocalStorage(props.id));
        setShow(true);
    }

    return(
        <>
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control placeholder="Price" value = {props.price * props.count} disabled />
                </Form.Group>
                <AmountWidget count = {count} handleCountChange = {handleCountChange} /> 
                <Form.Group className="mb-3">
                <Form.Label>Additional information:</Form.Label>
                <Form.Control placeholder="Additional information" value = {props.additionalInformation} onChange = {e => setAdditionalInformation(e.target.value)} type='text' />
                </Form.Group>
                <Button variant="danger" onClick={handleRemove}><FontAwesomeIcon icon={faTrash}/></Button>
            </Card.Body>
            <Modal size="sm" show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Product remove! Please refresh!</Modal.Body>
        </Modal>
        </Card> 
        </>
    )
}

export default CartOrder;