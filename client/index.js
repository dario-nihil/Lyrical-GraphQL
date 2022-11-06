import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({ cache: new InMemoryCache() });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  );
};

// ReactDOM.render(<Root />, document.querySelector("#root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Root />);
