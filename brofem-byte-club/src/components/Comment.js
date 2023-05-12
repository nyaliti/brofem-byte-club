import React from "react";


const comment = ({ comment }) => {
    return (
        <div>
            <p>{comment.content}</p>
            {/* Display user information */}
        </div>
    );
};


export default Comment;