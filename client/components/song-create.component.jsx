import React, { useState } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { Link, useHistory } from "react-router-dom";

import fetchSongs from "../queries/fetchSongs";
import createSong from "../queries/createSong";

const SongCreate = ({ mutate }) => {
  const [title, setTitle] = useState("");
  const history = useHistory();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await mutate({
        variables: { title },
        refetchQueries: [{ query: fetchSongs }],
      });

      history.push("/");
    } catch (error) {
      console.log("An error occur while creating a new song ", error);
    }
  };

  return (
    <>
      <Link to="/" className="blue-text text-darken-2">
        Back
      </Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmitHandler}>
        <label>Song Title</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </form>
    </>
  );
};

export default graphql(createSong)(SongCreate);
