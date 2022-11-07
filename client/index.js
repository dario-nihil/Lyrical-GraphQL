import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import SongList from "./components/song-list.component.jsx";

const client = new ApolloClient({ cache: new InMemoryCache() });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

// ReactDOM.render(<Root />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Root />);
