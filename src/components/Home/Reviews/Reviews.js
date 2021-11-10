import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <Container id='review'>
            <Row className='g-4'>
                <h1 className='title'> Testimonial </h1>
                {
                    reviews.map(review=> <Review key={review?._id} review={review}> </Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;