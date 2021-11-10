import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import logo from '../../img/logo.png'
import './Header.css';
const Header = () => {
    const { user, logOut } = useAuth();
    // Style when the page active
    const activeStyle = {
        color: "#fff",
        backgroundColor: '#FF4605'
    }
    return (
        <div>
            <Navbar collapseOnSelect style={{background: 'rgba(0,0, 0, 1)'}} expand="lg" fixed='top' >
                <Container>
                    <Navbar.Brand> <NavHashLink to="/home#banner" style={{ textDecoration: 'none' }}><img className='logo' src={logo} alt="Logo" /></NavHashLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="me-auto d-flex justify-content-start align-items-center">
                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#hero'> Home</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#cars'> Cars</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#review'> Reviews</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#chooseus'> Why Us</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#download'> Download</NavHashLink>

                            <NavLink activeStyle={activeStyle} className="nav-link" to='/explorecars'> Explore Cars</NavLink>


                            {/* When User logged in "Logout button" when not Login & SignUp button */}
                            {user.displayName || user.email ?

                                <button className='button' onClick={logOut}> Log out</button>
                                :
                                <NavLink className="link" to='/login'> <button className='button'>Log in</button></NavLink>
                            }
                        </Nav>



                        {/* display logged user info */}
                        <Nav className="ms-auto">
                            {
                                (user.displayName || user.email) &&
                                <div className='d-flex user-info'>
                                    <p className='me-3 logged-user-name'>{user.displayName}</p>
                                    <figure>
                                        <img className='user-img' src={user.photoURL} alt={user.displayName + " Image"} />
                                    </figure>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;