import React from "react";


const Post = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            {/* Add comment section */}
        </div>
    );
};


export default Post;