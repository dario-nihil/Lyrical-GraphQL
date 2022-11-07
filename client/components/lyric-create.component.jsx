import React, { useState } from "react";
import { graphql } from "@apollo/client/react/hoc";

import addLyric from "../queries/addLyric";

const LyricCreate = ({ mutate, songId }) => {
  const [content, setContent] = useState("");

  const onInputChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await mutate({
        variables: { content, songId },
      });

      setContent("");
    } catch (error) {
      console.log("An error occured while creating a lyric", error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Add a Lyric</label>
      <input value={content} onChange={onInputChangeHandler} />
    </form>
  );
};

export default graphql(addLyric)(LyricCreate);
