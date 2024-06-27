import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <Row className="g-3">
        {books.map((book) => (
          <Col xs={12} md={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default BookList;
