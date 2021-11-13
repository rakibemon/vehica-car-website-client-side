import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner, Form, Col, Row } from 'react-bootstrap';
import './ManageAllOrder.css'
const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    const [modifiedAcknowledged, setModifiedAcknowledged] = useState(false);
    const [updatedStatus, setUpdatedStatus] = useState('')
    //change the title when change the route
    useEffect(() => {
        document.title = 'All Booking (Admin)';
    }, []);

    // take Update Status Pending to Shipped or Deliveried
    const handleUpdateStatus = (e) => {
        setUpdatedStatus(e.target.value)
    };

    // Load all order data from DB
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://young-inlet-90443.herokuapp.com/allOrder')
            .then(data => {
                setAllOrder(data.data);
                setIsLoading(false)
            })
    }, [deleteAcknowledged, modifiedAcknowledged])

    // Show spinner when data isn't loaded up
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };

    // Delete specific Order
    const handleDelete = (id) => {
        const warning = window.confirm("Are you sure to cancle Order")
        if (warning) {
            axios.delete(`https://young-inlet-90443.herokuapp.com/delete/${id}`)
                .then(data => {
                    if (data) {
                        alert('Order Canceled Successfully');
                        setDeleteAcknowledged(true)
                    }
                })
        }
    };

    // Update Status Pending to Shipped or Deliveried
    const handleStatus = (id) => {
        const status = { status: updatedStatus };
        axios.put(`https://young-inlet-90443.herokuapp.com/status/${id}`, status)
            .then(data => {
                if (data) {
                    alert(`Status Updated to ${updatedStatus}`);
                    setModifiedAcknowledged(true)
                }
            })
    };
    return (
        <Container fluid className='mt-4'>
            <h4 className="text-center">Total Order : {allOrder.length}</h4>
            {
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Car Name</th>
                            <th>Price($)</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    {
                        allOrder.map((order, index) => {
                            return (
                                <tbody key={order?._id} style={{ fontWeight: '500' }}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order?.displayName}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.carInfo?.name}</td>
                                        <td>{order?.carInfo?.price}</td>
                                        <td>{order?.phone}</td>
                                        <td style={{ color: '#f15d30' }}>{order?.status}</td>
                                        <td><Button onClick={() => handleDelete(order?._id)} className='regular-button'>Delete Order</Button></td>

                                        <td>
                                            <Form>
                                                <Row className='w-75'>
                                                    <Form.Group as={Col} controlId="formGridStatus">
                                                        <Form.Select onChange={handleUpdateStatus} defaultValue={order?.status}>
                                                            <option>Pending</option>
                                                            <option>Shipped</option>
                                                            <option>Delivered</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group as={Col}>
                                                        <Button className='regular-button' onClick={() => handleStatus(order?._id)}>Change Status</Button>
                                                    </Form.Group>
                                                </Row>

                                            </Form>
                                        </td>

                                    </tr>
                                </tbody>
                            );
                        })
                    }
                </Table>
            }
        </Container>
    );
};

export default ManageAllOrder;