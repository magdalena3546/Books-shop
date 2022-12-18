import { Row, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCartOrders } from "../../../redux/cartRedux";
import CartOrder from "../../common/CartOrder/CartOrder";
import { Link } from "react-router-dom";


const CartOrderRender = ({cartOrders}) => {


    return(
        <Container className="col-12 col-sm-3 mx-auto my-4 justify-content-center">
            {cartOrders.map(elm => <CartOrder key = {elm.id} {...elm}/>)}
            <Button as = {Link} to = '/order' variant="dark" type="submit">Buy</Button>
       </Container>
    )
};

export default CartOrderRender;