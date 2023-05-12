import React from "react";


const comment = ({ comment }) => {
    return (
        <div>
            <p>{comment.content}</p>
            <p>Posted by: {comment.user}</p>
            {/* Display user information */}
        </div>
    );
};


export default Comment;