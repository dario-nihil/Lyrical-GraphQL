import { gql } from "@apollo/client";

export default gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;
