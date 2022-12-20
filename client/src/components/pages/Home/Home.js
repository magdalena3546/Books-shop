import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../../redux/booksRedux";
import ProductRender from "../../features/ProductRender";
import { useEffect } from "react";
import Header from "../../views/Header/Header";
import ServiceBlock from "../../views/ServiceBlock/ServiceBlock";
import styles from './Home.module.scss';
import SectionAdverts from "../../views/SectionAdverts/SectionAdverts";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchBooks()), [dispatch]);
    
    return (
        <>
            <Header />
            <ServiceBlock />
            <Container className = {styles.container}>
                <h2>All products</h2>
                <ProductRender />
            </Container>
            <SectionAdverts />
        </>
    )
}

export default Home;