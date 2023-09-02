import React from 'react';
import { Outlet } from 'react-router-dom';
import "./CommonLayout.css"

const CommonLayout = () => {
    return (
        <div className='position-relative'>
            <div className='center'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CommonLayout;