import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { Link } from "react-router-dom";

import fetchSong from "../queries/fetchSong";
import LyricCreate from "./lyric-create.component";
import LyricList from "./lyric-list,component";

const songDetail = ({ data, match }) => {
  if (data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricList lyrics={data.song.lyrics} />
      <LyricCreate songId={match.params.id} />
    </>
  );
};

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(songDetail);
