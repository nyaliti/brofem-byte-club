import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const BlogPost = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the blog post from the server
    // Update the "comments" state
  }, []);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default BlogPost;
