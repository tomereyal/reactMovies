import React, { useState } from "react";
import "./index.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import StarRating, { IpropsStarRating } from "../star-rating";
import LikesBox, { IPropsLikesBox } from "../likes-box";
import { RiDeleteBin5Line } from "react-icons/ri";

export interface IPropsMovieCard {
  title: string;
  poster: string;
  year: string;
  type: string;
  rating: number;
  starColor: string;
  likes: number;
  movieId: string;
  moreInfoBaseUrl?: string;
  removeMovie: Function;
}

enum bgClassColors {
  default = "background-default",
  selected = "background-selected",
}

export default function MovieCard(props: IPropsMovieCard) {
  const [currentBgColor, setBgColor] = useState(bgClassColors.default);
  function changeBgColor(): void {
    const bgColor =
      currentBgColor === bgClassColors.default
        ? bgClassColors.selected
        : bgClassColors.default;
    setBgColor(bgColor);
  }
  return (
    <Col xs={6} md={4}>
      <Card
        style={{
          width: "16rem",
          height: "26rem",
          margin: "3rem",
        }}
        className={`${currentBgColor} card-style`}
      >
        <RiDeleteBin5Line
          onClick={() => {
            props.removeMovie(props.movieId);
          }}
        ></RiDeleteBin5Line>
        <Card.Img
          variant="top"
          src={props.poster}
          height="150px"
          width="200px"
        />
        <Card.Body
          onClick={() => {
            changeBgColor();
          }}
        >
          <Card.Title style={{ height: "2.5rem" }}>{props.title} </Card.Title>
          <StarRating rating={props.rating} starColor={props.starColor} />
          <Card.Text style={{ height: "1rem" }}>
            {`Type: ${props.type}`}
          </Card.Text>
          <Card.Text style={{ height: "1rem" }}>
            {" "}
            {`Year: ${props.year}`}
          </Card.Text>
          <Card.Text style={{ height: "1rem" }}></Card.Text>
          <div className={"link-button"}>
            {" "}
            <Card.Link href="primary">Go</Card.Link>
          </div>
        </Card.Body>
        <LikesBox likes={props.likes}></LikesBox>
      </Card>
    </Col>
  );
}

function isValidUrl(url: string): boolean {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return regex.test(url);
}
