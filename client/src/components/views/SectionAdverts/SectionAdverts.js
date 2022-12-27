import { Col, Container, Row } from 'react-bootstrap';
import styles from './SectionAdverts.module.scss'
import { IMGS_URL } from '../../../config';

const SectionAdverts = () => {
    const advert1 = 'advert1.jpg';
    const advert2 = 'advert2.jpg';
    return(
        <Container className={styles.container}>
            <h2>Promotions</h2>
            <Row>
                <Col md={6}>
                    <div className={styles.box}>
                        <img className={styles.img} src={IMGS_URL + advert1} alt="">
                        </img>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles.box}>
                        <img className={styles.img} src={IMGS_URL + advert2} alt="">
                        </img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default SectionAdverts;