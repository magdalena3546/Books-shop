import { Button, Container } from "react-bootstrap";
import CartOrder from "../../common/CartOrder/CartOrder";
import { Link } from "react-router-dom";

const CartOrderRender = ({cartOrders}) => {

    return(
        <Container className="col-12 col-sm-3 mx-auto my-4 justify-content-center">
            {cartOrders.map(elm => <CartOrder key = {elm.id} {...elm} id = {elm.id} />)}
            <Button as = {Link} to = '/order' variant="dark" type="submit">Buy</Button>
       </Container>
    )
};

export default CartOrderRender;