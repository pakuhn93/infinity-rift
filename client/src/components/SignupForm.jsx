import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REGISTER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const [register, { error }] = useMutation(REGISTER);

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

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await register({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.register.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad
                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your signup!
                </Alert> */}

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your username"
                        name="username"
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Username is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your email address"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Email is required!
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Password is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type="submit"
                    variant="success"
                    onSubmit={
                        <Alert
                            dismissible
                            onClose={() => setShowAlert(false)}
                            show={showAlert}
                            variant="success"
                        >
                            Something went wrong with your signup!
                        </Alert>
                    }
                >
                    Submit
                </Button>
                <Link
                    to="/login"
                    className="btn-nav"
                    id="btn-login"
                >
                    Login
                </Link>
            </Form>
        </>
    );
};

export default SignupForm;
