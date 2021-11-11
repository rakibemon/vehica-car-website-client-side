import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
const BookingInfo = () => {
    const history = useHistory();
    const [singleCar, setSingleCar] = useState({});
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { carId } = useParams();
    useEffect(() => {
        fetch(`https://young-inlet-90443.herokuapp.com/car/${carId}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, [carId]);
    const { user } = useAuth()
    const onSubmit = data => {
        if (singleCar) {
            data.carInfo = singleCar;
            data.status = 'Pending';
            axios.post('https://young-inlet-90443.herokuapp.com/purchasingInfo', data)
                .then(data => {
                    if (data) {
                        alert("Purchase Successfully");
                        history.push('/dashboard')
                        reset();
                    }
                })
        }

    };
    return (
        <div className='mt-5 w-50 mx-auto'>

        <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center mb-4 info-title'> Super exsiting <span style={{color:'#FF4605'}}>{singleCar?.name}</span> is waiting for you</h1>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formPlaintextName">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control {...register("displayName")} style={{ fontWeight: '700', color: '#50C878' }} plaintext readOnly defaultValue={user?.displayName} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                            <Form.Control {...register("email")} style={{ fontWeight: '700', color: '#50C878' }} plaintext readOnly defaultValue={user?.email} />
                        </Col>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formPlaintextName">
                        <Form.Label column sm="2">Car Category</Form.Label>
                        <Col sm="10">
                            <Form.Control style={{ fontWeight: '700', color: '#50C878' }} plaintext readOnly defaultValue={singleCar?.category} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Price ($USD)</Form.Label>
                        <Col sm="10">
                            <Form.Control style={{ fontWeight: '700', color: '#50C878' }} plaintext readOnly defaultValue={singleCar?.price}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Model Year</Form.Label>
                        <Col sm="10">
                            <Form.Control style={{ fontWeight: '700', color: '#50C878' }} plaintext readOnly defaultValue={singleCar?.modelYear} />
                        </Col>
                    </Form.Group>
                </Row>

                <Row className="mb-3">

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control  {...register("address", { required: true })} placeholder="House, Road, PS" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPayMethod">
                        <Form.Label>Payment Meythod</Form.Label>
                        <Form.Select {...register("PaymentMthod", { required: true })}>
                            <option>Credit Card</option>
                            <option>Paypal</option>
                            <option>Mobile Banking</option>
                            <option>Cash On Delivery</option>
                        </Form.Select>
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control {...register("phone", { required: true })} />
                    </Form.Group>



                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select {...register("State", { required: true })}>
                            <option>Azimpur</option>
                            <option>Kafrul</option>
                            <option>Dhanmondi</option>
                            <option>Uttara</option>
                        </Form.Select>
                    </Form.Group>



                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control {...register("zip", { required: true })} />
                    </Form.Group>
                </Row>
                {errors.exampleRequired && <span>This field is required</span>}
                <button className='button' type="submit">
                    Confirm Your Car
                </button>
            </form>
        </Container>
    </div>
    );
};

export default BookingInfo;