import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
export const SidebarData =  [
        {
            title: 'My Orders',
            path:'/myorder',
            icon: <AiIcons.AiOutlineShoppingCart/>,
            className: 'nav-text'
        },
        {
            title: 'Manage All Order',
            path:'/allOrders',
            icon: <MdIcons.MdManageAccounts/>,
            className: 'nav-text'
        },
        {
            title: 'Make Admin',
            path:'/makeadmin',
            icon: <RiIcons.RiAdminFill/>,
            className: 'nav-text'
        }
];