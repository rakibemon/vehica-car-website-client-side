import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './ChooseUs.css'
const ChooseUs = () => {
    const [quality, setQuality] = useState([]);
     // use this state to determain data is lodded or not
     const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://young-inlet-90443.herokuapp.com/quality')
            .then(res => res.json())
            .then(data => {
                setQuality(data)
                setIsLoading(false)
            })
    }, []);
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };
    return (
        <Container id='chooseus'>
            <Row className='g-5'>
                <h2 className="title">Why choose us?</h2>
                {
                    quality.map(data => {
                        const { _id, icon, name, description } = data || {};
                        return (
                            <Col xs={12} md={6} lg={4} key={_id} >
                                <div className='quality-card text-center'>
                                    
                                    <figure className='text-center'>
                                        <img className='quality-logo' src={icon} alt="" />
                                    </figure>
                                    
                                    <h4 className='quality-name'>{name}</h4>
                                    <p className='quality-desc'>{description}</p>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

export default ChooseUs;