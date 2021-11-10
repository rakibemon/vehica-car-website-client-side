import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import download from '../../../img/download.jpg';
import './Download.css'
const Download = () => {
    return (
        <Container id='download'>
            <Row className='g-4' style={{ margin: '80px 0px' }}>
                <Col xs={12} md={6} style={{ margin: '0px' }}>
                    <div className='d-sm-flex download-right'>
                        <div>
                            <h1 className='download-title'>Download <br /> Our App</h1>
                            <div className='download-btn-group'>
                                <Button className='download-btn download-btn-first rounded-pill mt-4 mb-4'>For iOs</Button>
                                <br />
                                <Button className='download-btn rounded-pill'>For Android</Button>
                            </div>
                        </div>

                        <figure>
                            <img className='img-fluid' src={download} alt="" />
                        </figure>
                    </div>
                </Col>
                <Col xs={12} md={6} style={{ margin: '0px' }}>
                    <div className='d-sm-flex download-left'>
                        <div className='d-flex flex-column justify-content-center'>
                            <h1 className='download-title'>How to buy <br /> a car?</h1>
                            <button className="button mt-4" style={{ borderRadius: '10px' }}>Read More</button>
                        </div>
                        <ul className='text-white list-unstyled d-flex flex-column justify-content-center ps-5 lh-lg'>
                            <li>
                                <i className="fas fa-check-circle me-3 fill"></i>
                                best deals
                            </li>
                            <li>
                                <i className="fas fa-check-circle me-3 fill"></i>
                                sell your car

                            </li>
                            <li>
                                <i className="fas fa-check-circle me-3 fill"></i>
                                car book values
                            </li>
                            <li>
                                <i className="fas fa-check-circle me-3 fill"></i>
                                car dealers
                            </li>
                            <li>
                                <i className="fas fa-check-circle me-3 fill"></i>
                                compare prices
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Download;