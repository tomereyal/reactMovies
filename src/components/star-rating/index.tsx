import React from "react";
import { IoIosStar } from "react-icons/io";

export interface IpropsStarRating {
  rating: number;
  starColor: string;
}

export default function StarRating({ rating, starColor }: IpropsStarRating) {
  let starSpanArray = [];
  for (let i = 1; i <= rating; i++) {
    starSpanArray.push(
      <span>
        <IoIosStar style={{ color: starColor }} />
      </span>
    );
  }
  return <span>{starSpanArray}</span>;
}
