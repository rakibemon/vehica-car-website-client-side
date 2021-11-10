import React, { useEffect } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css';
import loginImg from '../../img/login.jpg'
const Login = () => {
    const { signInUsingGoogle, setUser, setError, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    //where user wanted to go or send user to homepage
    const redirect_uri = location.state?.from || '/home';
    //Google Sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };
    //change the title when change the route
    useEffect(() => {
        document.title = 'Login';
    }, []);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <Container style={{ marginTop: '120px' }}>
            <Row className='g-4 d-flex justify-content-center align-items-center w-75 mx-auto login-row p-3'>
            <h3 className="text-center">Please Log in</h3>

                <Col xs={12} md={6}>
                    <figure>
                        <img className='img-fluid' src={loginImg} alt="" />
                    </figure>
                </Col>

                <Col xs={12} md={6}>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Currently We have Google Login Only Later we will add more options */}


                            <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control {...register("email")} required type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("password")} required type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="info" type="submit" className='py-2 px-3 text-white'>
                                Login
                            </Button>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </form>
                        <div className="d-flex mt-5 align-items-center">
                            <p className='login-with'>Or log in With</p>
                            <i onClick={handleGoogleSignIn} className="fab fa-google-plus-square mx-4 login google"></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default Login;