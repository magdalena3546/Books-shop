import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import BooksReducer from './booksRedux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import CartReducer from './cartRedux';
import OrdersReducer from './ordersRedux';

const subreducers = {
    books: BooksReducer,
    cart: CartReducer,
    orders: OrdersReducer
};

const reducer = combineReducers(subreducers);
const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;