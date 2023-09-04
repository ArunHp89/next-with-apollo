// pages/posts/[postId].js

import { useRouter } from "next/router";
import CommentForm from "./components/CommentForm";

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  // Fetch post data using WPGraphQL or any other method

  return (
    <div>
      {/* Display post content */}
      <h1>Post Title</h1>
      <p>Post content goes here...</p>

      {/* Display existing comments, if any */}
      <h2>Comments</h2>
      {/* ... display comments here ... */}

      {/* Render the comment form */}
      <h2>Add Comment</h2>
      <CommentForm postId={postId} />
    </div>
  );
};

export default PostPage;
