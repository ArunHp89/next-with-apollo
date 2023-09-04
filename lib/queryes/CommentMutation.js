// utils/graphql.js

import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment($input: AddCommentInput!) {
    addComment(input: $input) {
      comment {
        id
        content
        date
        author {
          name
        }
      }
    }
  }
`;
