import { Component } from "react";
import { Badge, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleToggle = () => {
    this.setState({ selected: true });
  };

  render() {
    const { book } = this.props;

    return (
      <Card onClick={(e) => this.handleToggle()}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-end">
            <u>Price:</u> <Badge>{book.price}€</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
