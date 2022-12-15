import { API_URL } from '../config';
export const getAllBooks = ({ books }) => books;

export const getBookById = ({books}, bookId) => books.find(book => book.id === bookId);

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_BOOKS = createActionName('LOAD_BOOKS');

export const loadBooks = payload => ({
    payload,
    type: LOAD_BOOKS
});

export const fetchBooks = () => {
    return (dispatch) => {
        fetch(`${API_URL}/${reducerName}`)
            .then(res => res.json())
            .then(books => {
                dispatch(loadBooks(books))
            })
    }
};

const BooksReducer = (statePart = [], action) => {
    switch (action.type) {
        case LOAD_BOOKS:
            return [...action.payload];
        default:
            return statePart;
    }
}

export default BooksReducer;