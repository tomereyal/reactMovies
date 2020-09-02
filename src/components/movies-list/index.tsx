import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListItem, { IPropsListItem } from "../movie-list-item";
import Row from "react-bootstrap/Row";

export interface IPropsMoviesList {
  movieListItems: Array<IPropsListItem>;
}

export default function MovieList(props: IPropsMoviesList) {
  const { movieListItems } = props;
  return (
    <Row className="justify-content-md-center" style={{ marginBottom: "20px" }}>
      <ListGroup style={{ width: "600px" }}>
        {movieListItems.map((movieListItem: any) => {
          return <ListItem title={movieListItem.title} />;
        })}
      </ListGroup>
    </Row>
  );
}
