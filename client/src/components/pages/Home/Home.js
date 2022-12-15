import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../../redux/booksRedux";
import ProductRender from "../../features/ProductRender";
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchBooks()), [dispatch]);
    
    return (
        <Container className = 'my-4'>
            <h2>All products</h2>
            <ProductRender />
        </Container>
    )
}

export default Home;