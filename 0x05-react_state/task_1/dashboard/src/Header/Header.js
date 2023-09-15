import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
    },

    appHi: {
        color: 'rgb(217, 37, 37)',
        alignSelf: 'center',
    },

    imag: {
        width: '40%'
    }
});

function Header() {
    return (
        <header className={css(styles.appHeader)}>
            <img src={logo} alt='Holberton logo' className={css(styles.imag)}></img>
            <h1 className={css(styles.appHi)}>School dashboard</h1>
      </header>
    );
};

export default Header