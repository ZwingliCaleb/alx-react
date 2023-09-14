import React from "react";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appBody: {
        padding: '1.5rem 3rem 0',
        height: '50vh',
        borderBottom: '2px solid rgb(217, 37, 37)',
    },
    label: {
        marginRight: '1rem',
        display: 'block', 
    },
    input: {
        marginRight: '1rem',
        width: '100%', 
        marginBottom: '1rem', 
    },
    button: {
        marginTop: '1rem', 
    },
    
    '@media (max-width: 900px)': {
        label: {
            marginRight: '0',
        },
        input: {
            marginRight: '0',
            marginBottom: '0.5rem',
        },
        button: {
            marginTop: '0.5rem',
        },
    },
});

function Login() {
    const handleLabelClick = (idInput) => {
        const input = document.getElementById(idInput);
        if (input) {
            input.focus();
        }
    };

    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <label className={css(styles.label)} htmlFor="email" onClick={() => handleLabelClick('email')}>
                Email Address:
            </label>
            <input className={css(styles.input)} type="email" name="email" id="email" />
            <label className={css(styles.label)} htmlFor="password" onClick={() => handleLabelClick('password')}>
                Password:
            </label>
            <input className={css(styles.input)} type="password" name="password" id="password" />
            <button className={css(styles.button)}>OK</button>
        </div>
    );
}

export default Login;
