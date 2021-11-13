import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    // use this state to determain data is lodded or not
    const [isLoading, setIsLoading] = useState(true);
    //change the title when change the route
    useEffect(() => {
        document.title = 'Manage Product (Admin)';
    }, []);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://young-inlet-90443.herokuapp.com/explorecars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setIsLoading(false)
            })
    }, [deleteAcknowledged]);
    const handleDelete = (id) => {
        const warning = window.confirm("Are you sure to delete this Product")
        if (warning) {
            axios.delete(`http://localhost:5000/manageProduct/${id}`)
                .then(data => {
                    console.log(data)
                    if (data.data.acknowledged) {
                        alert('Car Deleted Successfully');
                        setDeleteAcknowledged(true)
                    }
                })
        };
    };
    // Show spinner when data is not lodded
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };
    return (
        <Container>
            <Row className='g-4 mt-4'>
                {
                    cars.map(car => {
                        const { _id, name, description, img, price, modelYear, category } = car || {};
                        return (
                            <Col key={_id} xs={12} md={6} lg={4}>
                                <div className='car-card'>
                                    <figure>
                                        <img className='img-fluid' src={img} alt="" />
                                    </figure>
                                    <div className="car-text">
                                        <h5>{name}</h5>
                                        <p className='car-desc'>{description.slice(0, 80)}</p>
                                        <h6>Starting at ${price}</h6>
                                        <hr style={{ width: '80%', margin: '0px auto' }} />
                                        <div className="d-flex mt-3">
                                            <p className="model-year">{modelYear}</p>
                                            <p className="mx-4 category">{category}</p>
                                            <button className="buy-button" onClick={() => handleDelete(_id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};
export default ManageProducts;