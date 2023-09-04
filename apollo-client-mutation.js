// utils/apolloClient.js

// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: `${process.env.WPENDPOINT}/graphql/`,
//   cache: new InMemoryCache(),
// });

// export default client;
// utils/apolloClient.js

// apolloClient.js

// apolloClient.js

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost/maison-de-sabre/graphql", // Replace YOUR_WORDPRESS_PORT with the actual port
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
