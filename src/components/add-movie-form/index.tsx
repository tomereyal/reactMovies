import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

export interface IPropsMovieForm {
  componentFunction: Function;
}

export default function AddMovieForm(props: IPropsMovieForm) {
  const [currentTitle, setTitle] = useState("");
  const [currentYear, setYear] = useState(2000);
  const [currentRank, setRank] = useState(3);
  const [currentPoster, setPoster] = useState("");
  const [currentImdbId, setImdbId] = useState("");
  const [currentType, setType] = useState("");
  const [currentLikes, setLikes] = useState("");

  return (
    <Row>
      <Col md={{ offset: 3 }}>
        <Form className={"customed-form"}>
          <Form.Group controlId="formBasicUrl">
            <Form.Label>Image-Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter url"
              onChange={(e) => {
                setPoster(e.target.value);
              }}
              value={currentPoster}
            />
            <Form.Text className="text-muted">
              Paste the link of the movie image url.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie year"
              onChange={(e) => {
                setYear(parseInt(e.target.value, 10));
              }}
              value={currentYear}
            />
          </Form.Group>

          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={currentTitle}
            />
          </Form.Group>

          <Form.Group controlId="formBasicType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie type"
              onChange={(e) => {
                setType(e.target.value);
              }}
              value={currentType}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={() => {
              console.log("I am responding");
              const newMovie = {
                Poster: currentPoster,
                Title: currentTitle,
                rank: currentRank,
                Year: currentYear,
                imdbID: "???",
                Type: currentType,
                Likes: 0,
              };
              //    const { Title, Year, rank, Poster, imdbID, Type, Likes } = movie;
              props.componentFunction(newMovie);
            }}
          >
            Add Movie
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
