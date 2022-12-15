import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import styles from './ProductDescription.module.scss';
import { IMGS_URL } from '../../../config';

const ProductDescription = (props) => {
    return(
        <Col>
        <Card className="mt-4">
        <Image fluid alt ='photo'src={ IMGS_URL+ props.mainImage}  className={styles.image}  />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text><strong>Price: </strong>{props.price}</Card.Text>
            <Button  as={Link} to= {`/product/${props.id}`} variant="outline-dark">Read more</Button>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default ProductDescription;