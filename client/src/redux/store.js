import {
    createStore,
    combineReducers
} from 'redux';
import BooksReducer from './booksRedux';
import initialState from './initialState';

const subreducers = {
    books: BooksReducer
};

const reducer = combineReducers(subreducers);
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;