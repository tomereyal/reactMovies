import React, { useState } from "react";
import { GrLike, GrDislike } from "react-icons/gr";

export interface IPropsLikesBox {
  likes: number;
}

export default function LikesBox(props: IPropsLikesBox) {
  const { likes } = props;
  const [currentLikes, setLikes] = useState(likes);

  function increaseLikes(): void {
    setLikes((current) => current + 1);
  }
  function decreaseLikes(): void {
    setLikes((current) => current - 1);
  }
  return (
    <div>
      <button
        onClick={(e) => {
          increaseLikes();
        }}
      >
        {" "}
        <GrLike></GrLike>{" "}
      </button>
      <button
        onClick={() => {
          decreaseLikes();
        }}
      >
        {" "}
        <GrDislike></GrDislike>{" "}
      </button>

      <span>{` ${currentLikes} Likes`} </span>
    </div>
  );
}
