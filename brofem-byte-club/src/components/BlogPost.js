import React from "react";


const BlogPost = ({ post }) => {
    return (
        <div>
            <h3>{post }</h3>
            <p>{post.content}</p>
            {/* Display comments */}
        </div>
    );
};


export default BlogPost;