import React, { useState } from "react";


const Register = () => {
    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Function to handle registration form submission
    const handleRegister = (e) => {
        e.preventDefault();
        //Implement registration logic
    };


    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};


export default Register;