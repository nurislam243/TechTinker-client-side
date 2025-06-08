import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { Tooltip } from 'react-tooltip';
import { CiDark, CiLight } from 'react-icons/ci';

const Navbar = () => {
  const { user, theme, setTheme } = useContext(AuthContext);
  const {isOpen, setIsOpen} = useState(true);

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Logout successful');
    }).catch((error) => {
      console.error(error);
    });
  }

  const navItems = (
    <>
      <li><NavLink to='/' onClick={()=> setIsOpen(false)}>Home</NavLink></li>
      <li><NavLink to='/services' onClick={()=> setIsOpen(false)}>Services</NavLink></li>
      {user && (
        <li>
          <details>
            <summary>Dashboard</summary>
            <ul className="p-1 w-[150px]">
              <li><NavLink to='/add-service' onClick={() => setIsOpen(false)}>Add Service</NavLink></li>
              <li><NavLink to='/manage-service' onClick={()=> setIsOpen(false)}>Manage Service</NavLink></li>
              <li><NavLink to='/my-bookings' onClick={()=> setIsOpen(false)}>Booked-Services</NavLink></li>
              <li><NavLink to='/service-to-do' onClick={()=> setIsOpen(false)}>Service-To-Do</NavLink></li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className="@container fixed top-0 left-0 right-0 w-full drawer z-50">
      <input id="navbar-drawer" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm px-4">
          <div className="navbar-start">
            <div className="flex items-center">
              <img src="/logoTech.png" className="w-[30px]" alt="logo" />
              <Link to='/' className="text-xl font-bold ml-2">TechTinker</Link>
            </div>
          </div>

          <div className="navbar-end gap-3">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>

            <button
              onClick={() => setTheme(!theme)}
              className="cursor-pointer @min-[340px]:flex hidden"
              data-tooltip-id="theme-tooltip"
              data-tooltip-content={theme ? 'Enable Dark Mode' : 'Enable Light Mode'}
              data-tooltip-place="top"
            >
              {theme ? <CiDark size={30} /> : <CiLight size={30} />}
            </button>
            <Tooltip id="theme-tooltip" />

            {
              user
                ? <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
                : <Link to="/login" className="btn btn-sm">Login</Link>
            }

            {/* Hamburger Icon for Small Screens */}
            <label htmlFor="navbar-drawer" onClick={()=> setIsOpen(!isOpen)} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile Nav */}
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-2 w-[180px] @min-[400px]:p-4 @min-[400px]:w-[210px] @min-[440px]:w-64 min-h-full bg-base-200 text-base-content">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
