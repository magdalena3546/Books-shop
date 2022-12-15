import { Button, Card, Container } from "react-bootstrap"

const CartOrder = (props) => {

    return(
        <Container className="col-12 col-sm-3 mx-auto">
            <Card>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text><strong>Price: </strong>{props.price}</Card.Text>
                    <span>count: </span>
                    <input value = {props.count} type='number' min='0' max='10'></input>
                    <span>additional information: </span>
                    <input type='text'></input>
                </Card.Body>
            </Card>
            <Button variant="dark" type="submit">Buy</Button>
        </Container>
    )
}

export default CartOrder;