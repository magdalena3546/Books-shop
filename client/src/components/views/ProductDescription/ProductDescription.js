import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


const ProductDescription = (props) => {
    return(
        <Col>
        <Card className="mt-4">
          <Card.Body>
            {/* <Card.Image></Card.Image> */}
            <Card.Title>{props.title}</Card.Title>
            <Card.Text><strong>Price: </strong>{props.price}</Card.Text>
            <Button  as={Link} to= {`/product/${props.id}`} variant="outline-dark">Read more</Button>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default ProductDescription;