import {
    API_URL
} from '../config';
import shortid from 'shortid';


const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_ORDER= createActionName('ADD_ORDER');


export const addOrder = payload => ({payload, type: ADD_ORDER});

// export const adFetchOrder = async (orderData) => {
//     return(dispatch) => {
//         const options = {
//             method: 'POST',
//             headers: {'Content-Type':'application/json'},
           
//             body: JSON.stringify({
//                 firstName: orderData.firstName,
//             })
//         };
//         await fetch(`${API_URL}/${reducerName}`, options)
//             .then(() => dispatch(addOrder(orderData)));
//     } 
// }

const OrdersReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...statePart,  {...action.payload}];
        default:
            return statePart;
    }
}

export default OrdersReducer;