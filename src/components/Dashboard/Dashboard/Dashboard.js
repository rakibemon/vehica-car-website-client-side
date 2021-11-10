import React from 'react';
import { ProSidebar, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { NavLink } from 'react-router-dom';
const Dashboard = () => {
    return (
        <ProSidebar>
            <SidebarHeader>
                {/**
     *  You can add a header for the sidebar ex: logo
     */}
            </SidebarHeader>
            <SidebarContent>
                <NavLink to='/home'> Home </NavLink>
            </SidebarContent>
            <SidebarFooter>
                {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Dashboard;