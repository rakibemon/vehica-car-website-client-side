import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ChooseUs.css'
const ChooseUs = () => {
    const [quality, setQuality] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/quality')
            .then(res => res.json())
            .then(data => setQuality(data))
    }, [])
    return (
        <Container id='chooseus'>
            <Row className='g-5'>
                <h1 className="title text-center">Why choose us?</h1>
                {
                    quality.map(data => {
                        const { _id, icon, name, description } = data || {};
                        return (
                            <Col xs={12} md={6} lg={4} key={_id}>
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