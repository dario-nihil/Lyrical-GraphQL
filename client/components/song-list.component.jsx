import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "@apollo/client/react/hoc";

import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../queries/deleteSong";

const SongList = (props) => {
  const onSongDeleteHandler = async (id) => {
    try {
      await props.mutate({ variables: { id } });
      props.data.refetch();
    } catch (error) {
      console.log("An error occur during the cancellation of a song", error);
    }
  };

  const renderSongs = () => {
    return props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`songs/${id}`}>{title}</Link>
        <i
          className="material-icons right delete-icon"
          style={{ cursor: "pointer" }}
          onClick={onSongDeleteHandler.bind(this, id)}
        >
          delete
        </i>
      </li>
    ));
  };

  if (props.data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </>
  );
};

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
