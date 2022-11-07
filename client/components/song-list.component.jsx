import React from "react";
import { gql } from "@apollo/client";
// import { graphql } from "react-apollo";
import { graphql } from "@apollo/client/react/hoc";

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

const SongList = ({ data }) => {
  const renderSongs = () => {
    return data.songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  };

  if (data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <ul className="collection">{renderSongs()}</ul>
    </div>
  );
};

export default graphql(query)(SongList);
