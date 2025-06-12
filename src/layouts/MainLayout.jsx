import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../context/AuthContext/AuthContext';
import TopBar from '../components/TopBar/TopBar';

const MainLayout = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className='@container' data-theme={theme ? 'techTinker' : 'dark'}>
            <TopBar></TopBar>
            <Navbar></Navbar>
            <div className="min-h-[85vh] mt-[65px] @min-[520px]:mt-[72px] @min-[1024px]:mt-[84px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;