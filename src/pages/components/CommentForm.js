// pages/components/CommentForm.js

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../../lib/queryes/CommentMutation";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [addCommentMutation, { loading, error }] = useMutation(ADD_COMMENT);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addCommentMutation({
        variables: {
          input: {
            content: comment,
            author: "John Doe", // Replace with the actual author's name or ID
            post: postId, // Pass the ID of the post to which you want to add the comment
          },
        },
      });

      console.log("New comment created:", data.addComment.comment);

      // You can perform any additional actions or UI updates here upon successful comment creation
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment..."
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding comment..." : "Add Comment"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default CommentForm;
