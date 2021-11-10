import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Home from '../../Home/Home/Home'
import MyOrder from '../MyOrder/MyOrder';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
function Navbar() {
    const { user, logOut } = useAuth();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    let { path, url } = useRouteMatch();

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='d-flex user-info'>
                        <p className='me-3 text-white logged-user-name'>{user.displayName}</p>
                        <figure>
                            <img className='user-img me-5' src={user.photoURL} alt='userImage' />
                        </figure>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='/home'>
                                <AiIcons.AiFillHome />
                                <span>Home</span>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={`${url}${item.path}`}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li className='nav-text' onClick={logOut}>
                            <Link to='/home'>
                                <FiIcons.FiLogOut />
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path={path}>
                    <MyOrder></MyOrder>
                </Route>
                <Route exact path={`${path}/myorder`}>
                    <MyOrder></MyOrder>
                </Route>
                <Route exact path={`${path}/allOrders`}>
                    <ManageAllOrder></ManageAllOrder>
                </Route>
                <Route exact path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
            </Switch>
        </>
    );
}

export default Navbar;