import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ExploreCar = ({ car }) => {
    const { _id, name, description, img, price, modelYear, category } = car || {};
    const history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/car/${id}`)
    };
    return (
        <Col xs={12} md={6} lg={4}>
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
                        <button className="buy-button" onClick={() => handleBuyNow(_id)}>Buy Now </button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ExploreCar;