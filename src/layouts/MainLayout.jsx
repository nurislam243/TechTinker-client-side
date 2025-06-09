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
            <div className="min-h-[85vh] mt-[56px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;