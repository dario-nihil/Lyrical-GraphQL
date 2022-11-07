import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Routes, Route, HashRouter, Switch } from "react-router-dom";

import SongList from "./components/song-list.component.jsx";
import SongCreate from "./components/song-create.component.jsx";
import App from "./components/app.component.jsx";
import songDetail from "./components/song-detail.component.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    dataIdFromObject: (o) => o.id,
  }),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={SongList} />
            <Route exact path="/songs/new" component={SongCreate} />
            <Route exact path="/songs/:id" component={songDetail} />
          </Switch>
        </HashRouter>
      </App>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
