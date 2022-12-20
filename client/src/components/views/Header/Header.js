import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styles from './Header.module.scss';
import { IMGS_URL } from '../../../config';

const Header = () => {
    const header1 = 'header1.jpg';
    const header2 = 'header2.jpg';
    const header3 = 'header3.jpg';
    const header4 = 'header4.jpg';
    return(
        <Container className='my-4'>
        <Row>
            <Col className={styles.aside} md= {3}>
                <div className={styles.box}>
                    <img className={styles.background} src={IMGS_URL + header3} alt="Red book"/>
                </div>
                <div className={styles.box}>
                    <img className={styles.background} src={IMGS_URL + header4} alt="Book cover"/>
                </div>
            </Col>
            <Col md= {8} className='offset-1'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className={styles.image}
                        src={IMGS_URL + header1}
                        alt="Open book"
                        />
                        <Carousel.Caption className = {styles.text}>
                        <h1 className={styles.title}>Start your adventure</h1>
                        <h3 className={styles.subtitle}>Find your favourite books with us...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className={styles.image}
                        src={IMGS_URL + header2}
                        alt="books arranged in the shape of a heart"
                        />
                        <Carousel.Caption className = {styles.text}>
                        <h1 className={styles.title}>Start your adventure</h1>
                        <h3 className={styles.subtitle}>Find your favourite books with us...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
            </Col>
        </Row>
        </Container>
    )
};

export default Header