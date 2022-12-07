import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductDescription from '../views/ProductDescription/ProductDescription';
import { getAllBooks } from '../../redux/booksRedux';


const ProductRender = () => {
    const books = useSelector(getAllBooks);
    return (
        <> 
            {!books &&(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            )}
            <Row>
                {books.map(book => <Col md="3" key={book.id}><ProductDescription {...books} /></Col>)}
            </Row>
        </>
    )
}

export default ProductRender;