import React from "react";
import MovieCard, { IPropsMovieCard } from "../movie-card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IPropsMoviesDeck {
  movies: Array<IPropsMovieCard>;
  noDataMessage?: string;
}

export default function MovieCards(props: IPropsMoviesDeck) {
  const { movies,noDataMessage } = props;
  if (!movies.length) return <h1> {noDataMessage}</h1>
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
