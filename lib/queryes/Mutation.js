import { gql } from "@apollo/client";

export const ADD_COMMENT_MUTATION = gql`
  mutation AddComment($postId: ID!, $content: String!) {
    createComment(input: { content: $content, postId: $postId }) {
      comment {
        id
        content
      }
    }
  }
`;
