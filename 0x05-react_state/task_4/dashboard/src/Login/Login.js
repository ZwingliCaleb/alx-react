import React, { Component } from "react";
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
    form: {
        marginTop: '1rem',
    },
    submitButton: {
        marginTop: '0.5rem',
    },

    '@media (max-width: 900px)': {
        label: {
            marginRight: '0',
        },
        input: {
            marginRight: '0',
            marginBottom: '0.5rem',
        },
        submitButton: {
            marginTop: '0.5rem',
        },
    },
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            enableSubmit: false,
        };

        // Bind the event handler functions to this instance
        this.handleLabelClick = this.handleLabelClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLabelClick(idInput) {
        const input = document.getElementById(idInput);
        if (input) {
            input.focus();
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state.formData;
        if (email.trim() !== '' && password.trim() !== '') {
            this.props.logIn(email, password); // Call the logIn function from props
        }
    }

    handleChangeEmail(e) {
        const newFormData = { ...this.state.formData, email: e.target.value };
        this.setState({ formData: newFormData }, () => this.validateSubmitButton());
    }

    handleChangePassword(e) {
        const newFormData = { ...this.state.formData, password: e.target.value };
        this.setState({ formData: newFormData }, () => this.validateSubmitButton());
    }

    validateSubmitButton() {
        const { email, password } = this.state.formData;
        const isNotEmpty = email.trim() !== '' && password.trim() !== '';
        this.setState({ enableSubmit: isNotEmpty });
    }

    render() {
        const { formData, enableSubmit } = this.state;

        return (
            <div className={css(styles.appBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
                    <label className={css(styles.label)} htmlFor="email" onClick={() => this.handleLabelClick('email')}>
                        Email Address:
                    </label>
                    <input
                        className={css(styles.input)}
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={this.handleChangeEmail}
                    />
                    <label className={css(styles.label)} htmlFor="password" onClick={() => this.handleLabelClick('password')}>
                        Password:
                    </label>
                    <input
                        className={css(styles.input)}
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={this.handleChangePassword}
                    />
                    <input
                        className={css(styles.submitButton)}
                        type="submit"
                        value="Login"
                        disabled={!enableSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default Login;
