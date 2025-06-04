import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../context/AuthContext/AuthContext';

const MainLayout = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className='@container' data-theme={theme ? 'techTinker' : 'dark'}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;