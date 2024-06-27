import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    reviews: [],
  };
  fetchReviews = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmZmNDdjMjM5YzAwMTUyZjRiNzQiLCJpYXQiOjE3MTgzNTM5MDgsImV4cCI6MTcxOTU2MzUwOH0.YxOTllrumawWZJ4LtdXWOHBZKu9J2pg4-y4aQ09JeiQ",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento delle recensioni");
        }
      })
      .then((review) => {
        this.setState({ reviews: review });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchReviews();
  }
  render() {
    return <CommentList />;
  }
}
export default CommentArea;
