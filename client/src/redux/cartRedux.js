import {
    API_URL
} from '../config';
import shortid from 'shortid';

export const getAllCartOrders = ({
    cart
}) => cart;

const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const EDIT_PRODUCT_CART = createActionName('EDIT_PRODUCT_CART')
const EDIT_PRODUCT_CART_INFO = createActionName('EDIT_PRODUCT_CART_INFO')
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = payload => (
    {
    payload,
    type: ADD_TO_CART
    }

);

export const editProductCart = payload => ({
    type: EDIT_PRODUCT_CART,
    payload
});

export const editProductCartInfo = payload => ({
    type: EDIT_PRODUCT_CART_INFO,
    payload
});

let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')) : [];
export const addCartLocalStorage = (product) => {
    return(dispatch) => {
        dispatch(addToCart(product))
        try {
            cart.push(product);
            } catch (e) {
                console.log('getError', e.message);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export const removeProduct = payload =>({payload, type: REMOVE_PRODUCT});

export const clearCart = () =>({type: CLEAR_CART});

const CartReducer = (statePart = cart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...statePart, {
                ...action.payload,
                id: shortid.generate()
            }];
        case EDIT_PRODUCT_CART:
            return statePart.map(elm => (elm.id === action.payload.id ? {...elm,  count: action.payload.count,
                totalPrice: action.payload.totalPrice, additionalInformation: action.payload.additionalInformation} : elm));
        case EDIT_PRODUCT_CART_INFO:
            return statePart.map(elm => (elm.id === action.payload.id ? {...elm,  additionalInformation: action.payload.additionalInformation} : elm));
        case REMOVE_PRODUCT: 
            return statePart.filter(elm=> elm.id !== action.payload);
        case CLEAR_CART:
            return (statePart = []);
        default:
            return statePart;
    }
}

export default CartReducer;