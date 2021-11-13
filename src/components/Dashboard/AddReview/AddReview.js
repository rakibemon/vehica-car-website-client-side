import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // Send user review on DB
    const onSubmit = data => {
        data.name = user?.displayName;
        axios.post('https://young-inlet-90443.herokuapp.com/addReview', data)
            .then(data => {
                if (data.data.acknowledged) {
                    alert("Data Inserted Successfully")
                    reset();
                }
            })
    };
    //change the title when change the route
    useEffect(() => {
        document.title = 'Add Review';
    }, []);
    return (
        <Container style={{ marginTop: '120px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Row>
                    <Form.Group as={Col} xs={6} lg={4} className="mb-3" controlId="formBasicDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control {...register("designation")} required type="text" placeholder="Designation" />
                    </Form.Group>

                    <Form.Group as={Col} xs={6} lg={2} className="mb-3" controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Select {...register("rating")}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} xs={12} lg={6} className="mb-3" controlId="formBasicImage">
                        <Form.Label>Your Image URL</Form.Label>
                        <Form.Control {...register("img")} required type="text" placeholder="Your image url" />
                    </Form.Group>

                </Row>
                <FloatingLabel className="mb-3" controlId="floatingTextarea" label="Your Review">
                    <Form.Control {...register("description")}
                        as="textarea"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button className='regular-button py-2 px-3 text-white' type="submit">
                    Submit
                </Button>
                {errors.exampleRequired && <span>This field is required</span>}

            </form>

        </Container>
    );
};

export default AddReview;