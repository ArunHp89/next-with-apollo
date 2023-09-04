import { gql } from "@apollo/client";

const headerQuery = `
{
    menus {
      nodes {
        id
        databaseId
        name
        menuItems {
          edges {
            node {
              id
              label
              parentId
            }
          }
        }
      }
    }
  }
`;

export const GET_HEADER = gql`
  ${headerQuery}
`;
