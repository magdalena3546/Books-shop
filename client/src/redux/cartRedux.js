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

export const addToCart = payload => ({
    payload,
    type: ADD_TO_CART
})

const CartReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...statePart, {
                ...action.payload,
                id: shortid.generate()
            }];
        default:
            return statePart;
    }
}

export default CartReducer;