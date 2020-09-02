import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export interface IPropsListItem {
  title: string;
  hours?: string;
}

export default function ListItem({ title, hours }: IPropsListItem) {
  return (
    <ListGroup.Item>
      {title}
      {hours}
    </ListGroup.Item>
  );
}
