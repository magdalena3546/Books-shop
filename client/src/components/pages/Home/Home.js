import { Container } from "react-bootstrap";
import ProductRender from "../../features/ProductRender";

const Home = () => {
    return (
        <Container className = 'my-4'>
            <h2>All products</h2>
            <ProductRender />
        </Container>
    )
}

export default Home;