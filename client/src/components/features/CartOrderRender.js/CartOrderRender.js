import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCartOrders } from "../../../redux/cartRedux";
import CartOrder from "../../common/CartOrder/CartOrder";


const CartOrderRender = () => {
    const cartOrders = useSelector(getAllCartOrders);
    return(
        <Row>
        {cartOrders.map(elm => <CartOrder key = {elm.id} {...elm}/>)}
       </Row>
    )
};

export default CartOrderRender;
