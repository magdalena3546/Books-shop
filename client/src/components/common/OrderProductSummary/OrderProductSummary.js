import { useState } from "react";
import { Card, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { editProductCart } from "../../../redux/cartRedux";

const OrderProductSummary = (props) => {
    return(
            <Card className="my-2">
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                        <Form.Group className="mb-3">
                        <Form.Label>Total price:</Form.Label>
                    <Form.Control placeholder="Total price" value = {props.price * props.count} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Count:</Form.Label>
                        <Form.Control placeholder="Count" value = {props.count} type='number' min='0' max='10' disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Additional information:</Form.Label>
                        <Form.Control placeholder="Additional information" type='text'  value = {props.additionalInformation} disabled/>
                    </Form.Group>
                </Card.Body>
            </Card> 
    )
}

export default  OrderProductSummary;