import React from "react";
import MovieCard, { IPropsMovieCard } from "../movie-card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IPropsMoviesDeck {
  movies: Array<IPropsMovieCard>;

}

export default function MovieCards(props: IPropsMoviesDeck) {
  const { movies } = props;
  return (
    <Row>
      <CardDeck>
        {movies.map((IPropsMovieCard: any) => (
          <MovieCard {...IPropsMovieCard} />
        ))}
      </CardDeck>
    </Row>
  );
}
