import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'
const Review = ({ review }) => {
    const { name, designation, description, img, rating } = review || {};
    return (
        <Col xs={12} md={6} lg={4}>
            <div>
                <div className="d-flex review-card">
                    <figure>
                        <img className='review-img' src={img} alt="User Img" />
                    </figure>
                    <div className='d-flex flex-column justify-content-center'>
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                    </div>
                </div>
                <p className='review-desc'>{description.slice(0, 100)}</p>
                <p>{rating}/5</p>
            </div>
        </Col>
    );
};

export default Review;