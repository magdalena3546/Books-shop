import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartOrders, loadProductsCart } from "../../../redux/cartRedux";
import CartOrderRender from "../../features/CartOrderRender.js/CartOrderRender";

const Cart = () => {
    const cartOrders = JSON.parse(localStorage.getItem('cart')) || [];
    const dispatch = useDispatch();

    if (cartOrders.length !== 0) { 
    return (<CartOrderRender cartOrders={cartOrders}/>)
    }
    return(<p className = 'my-4 mx-2'>The cart is empty</p>)
}

export default Cart;