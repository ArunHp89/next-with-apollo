import { gql } from "@apollo/client";

const productsQuery = `
{
    products {
      edges {
        node {
          id
          name
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  ${productsQuery}
`;
