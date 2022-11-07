import React from "react";
import { graphql } from "@apollo/client/react/hoc";

import likeLyric from "../queries/likeLyric";

const LyricList = ({ lyrics, mutate }) => {
  const onLikeClickHandler = (id) => {
    console.log(id);

    mutate({ variables: { id } });
  };

  const renderLyrics = lyrics
    ? lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <span className="badge">{likes}</span>
          <i
            className="material-icons right"
            style={{ cursor: "pointer" }}
            onClick={onLikeClickHandler.bind(this, id)}
          >
            thumb_up
          </i>
        </li>
      ))
    : "No data availiable";
  return <ul className="collection">{renderLyrics}</ul>;
};

export default graphql(likeLyric)(LyricList);
