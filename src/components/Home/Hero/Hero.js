import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import './Hero.css';
const Hero = () => {
    return (
        <div>
            <div className='home-bg' id='hero'>
                <Container>
                    <Row className='hero-section'>
                        <Col xs={12} md={12}>
                            <h1 className='hero-title'>Find Your <span>Perfect</span> Car</h1>
                            <p>Thousand of Cars avaiable here. make your own one. Best car best value here</p>
                            <NavHashLink to='/home#destination'><button className='rounded-lg button' >Have a look</button></NavHashLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Hero;