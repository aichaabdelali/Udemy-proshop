import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body as="div">
        <a href={`/product/${product._id}`}>
          <strong>{product.name}</strong>
        </a>
      </Card.Body>

      <Card.Text as="div">
        <div className="my-3">
          {product.rating} from {product.numReviews}
        </div>
      </Card.Text>

      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
