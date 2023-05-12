import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the server
    // Update the "posts" state
  }, []);

  return (
    <div>
      <h2>Welcome to the Blogging Platform</h2>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
