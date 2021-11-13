import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ExploreCar from './ExploreCar';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);
    // use this state to determain data is lodded or not
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://young-inlet-90443.herokuapp.com/explorecars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setIsLoading(false)
            })
    }, []);
    //change the title when change the route
    useEffect(() => {
        document.title = 'Explore Cars';
    }, []);
    // Show spinner when data is not lodded
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };
    return (
        <Container>
            <Row className='g-4'>
                <h1>Popular Makes</h1>
                {
                    cars.map(car => <ExploreCar key={car?._id} car={car}></ExploreCar>)
                }
            </Row>
        </Container>
    );
};

export default ExploreCars;