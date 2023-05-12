import React from 'react';
import Login from './Login';
import Register from './Register';
import CreatePost from './CreatePost';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
                <li>Create Post</li>
            </ul>
        </nav>
    );
    
};


export default Navbar;