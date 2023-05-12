import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to handle CreatePost form submission
  const handleCreatePost = (e) => {
    e.preventDefault();
    // Implement create post logic
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
