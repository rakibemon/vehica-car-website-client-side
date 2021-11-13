import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Review from './Review';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // use this state to determain data is lodded or not
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://young-inlet-90443.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
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
        <Container id='review'>
            <Row className='g-4'>
                <h1 className='title'> Testimonial </h1>
                {
                    reviews.map(review => <Review key={review?._id} review={review}> </Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;