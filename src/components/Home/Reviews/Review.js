import React from 'react';
import { Col } from 'react-bootstrap';
import * as AiIcons from 'react-icons/ai';
import Rating from 'react-rating';
import './Review.css'
const Review = ({ review }) => {
    const { name, designation, description, img, rating } = review || {};
    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <div>
                    <div className="d-flex review-card">
                        <figure>
                            <img className='review-img rounded-circle' src={img} alt="User Img" />
                        </figure>
                        <div className='d-flex flex-column justify-content-center'>
                            <h5>{name}</h5>
                            <h6>{designation}</h6>
                        </div>
                    </div>
                    <p className='review-desc'>{description.slice(0, 100)}</p>
                    <div className='rating'>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<AiIcons.AiOutlineStar className='emptystar' />}
                            fullSymbol={<AiIcons.AiFillStar className='fillstar' />}
                            readonly
                        />
                    </div>
                </div>
            </Col>

        </>
    );
};

export default Review;