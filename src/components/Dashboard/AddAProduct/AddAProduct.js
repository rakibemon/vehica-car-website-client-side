import React from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const AddAProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        reset();
    };
    return (
        <Container style={{ marginTop: '120px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
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
                    <Button className='regular-button py-2 px-3 text-white' type="submit">
                        Submit
                    </Button>
                    {errors.exampleRequired && <span>This field is required</span>}
                </Row>
            </form>

        </Container>
    );
};

export default AddAProduct;