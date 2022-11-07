import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Router, Route, HashRouter } from "react-router-dom";

import SongList from "./components/song-list.component.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route exact path="/" component={SongList} />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Root />);
