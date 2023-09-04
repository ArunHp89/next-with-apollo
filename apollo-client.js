// ./apollo-client.js

// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://countries.trevorblades.com",
//   cache: new InMemoryCache(),
// });

// export default client;

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let client;

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      // uri: "http://localhost/wordpress/graphql/",
      uri: `${process.env.WPENDPOINT}/graphql/`,
    }),
    cache: new InMemoryCache(),
  });
}
