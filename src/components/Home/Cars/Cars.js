import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Car from '../Car/Car';
import './Cars.css'
const Cars = () => {
    const [cars, setCars] = useState([]);
    // use this state to determain data is lodded or not
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://young-inlet-90443.herokuapp.com/explorecars')
            .then(res => res.json())
            .then(data => {
                setCars(data.slice(0, 6));
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
        <Container id='cars'>
            <Row className='g-4'>
                <h1 className='title'>Popular Makes</h1>
                {
                    cars.map(car => <Car key={car?._id} car={car}></Car>)
                }
            </Row>
        </Container>
    );
};

export default Cars;