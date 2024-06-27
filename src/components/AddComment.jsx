import { Component } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un commento"
            value={this.state.newComment.comment}
            onChange={(e) => {
              this.setState({ newComment: { ...this.state.newComment, comment: e.target.value } });
            }}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={this.state.newComment.rate}
          onChange={(e) => {
            this.setState({ newComment: { ...this.state.newComment, rate: e.target.value } });
          }}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Button type="submit" variant="primary">
          Invia commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
