import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCartOrders } from "../../../redux/cartRedux";
import CartOrderRender from "../../features/CartOrderRender.js/CartOrderRender";

const Cart = () => {
    const cartOrders = useSelector(getAllCartOrders);
    if (cartOrders.length !== 0) { 
    return (<CartOrderRender cartOrders={cartOrders}/>)
    }
    return(<p className = 'my-4 mx-2'>The cart is empty</p>)
}

export default Cart;