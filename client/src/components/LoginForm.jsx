// see SignupForm.js for comments
import './Login.css';
import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({
        username: '',
        password: '',
    });
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN);

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            username: '',
            password: '',
        });
    };

    return (
        <>
            <Form
                onSubmit={handleFormSubmit}
                id="body"
            >
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your login credentials!
                </Alert>
                <Form.Group
                    // class="forms"
                    className="mb-3"
                >
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your username"
                        name="username"
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback
                        // class="feedback"
                        type="invalid"
                    >
                        Username is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    // class="forms"
                    className="mb-3"
                >
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback
                        // class="feedback"
                        type="invalid"
                    >
                        Password is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type="submit"
                    variant="success"
                    onSubmit={'Logged In User!!'}
                >
                    Submit
                </Button>

                <Link
                    to="/signup"
                    className="btn-nav"
                    id="btn-login"
                >
                    Signup?
                </Link>
            </Form>
        </>
    );
};

export default LoginForm;
