import React from "react";
import './Login.css';

function Login() {
    const handleLabelClick = (idInput) => {
        const input = document.getElementById(idInput);
        if (input) {
          input.focus();
        }
        };
        
    return (
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email" onClick={() => handleLabelClick('email')}>
            Email Address:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password" onClick={() => handleLabelClick('password')}>
            Password:</label>
            <input type="password" name="password" id="password" />
            <button>OK</button>
        </div>
    );
}

export default Login