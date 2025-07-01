import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router'; // Fixed router import
import { AuthContext } from '../../context/AuthContext/AuthContext';
// import { getAuth, signOut } from 'firebase/auth';
import { Tooltip } from 'react-tooltip';
import { CiDark, CiLight } from 'react-icons/ci';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import Avatar from '../Ui/Avatar';

const Navbar = () => {
  const { user, setUser, theme, setLoading, setTheme } = useContext(AuthContext);
  const {isOpen, setIsOpen} = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const navigate = useNavigate();


  //  Handle Shrink on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //handle logout
    const handleLogOut = () => {
        setLoading(true);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
            signOut(auth)
                .then(() => {
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out!',
                    text: 'You have been logged out successfully.',
                    timer: 2000,
                    showConfirmButton: false
                });
                setUser(null);
                })
                .catch((error) => {
                // console.log(error);
                Swal.fire('Error', error.message, 'error');
                });
            }
            setLoading(false);
        });
    };

  const navItems = (
    <>
      <li ><NavLink to='/' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Home</NavLink></li>
      <li><NavLink to='/services' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Services</NavLink></li>
      <li><NavLink to='/offers' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Offers</NavLink></li>
      <li><NavLink to='/aboutUs' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>About Us</NavLink></li>

      {user && (
      <li>
        <details>
          <summary className='text-base-content hover:text-primary'>Dashboard</summary>
          <ul className="p-1 w-[155px]">
            <li><NavLink to='/add-service' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Add Service</NavLink></li>
            <li><NavLink to='/manage-service' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Manage Service</NavLink></li>
            <li><NavLink to='/my-bookings' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Booked-Services</NavLink></li>
            <li><NavLink to='/service-to-do' className={({ isActive }) =>isActive ? 'text-primary' : 'shake-hover text-base-content hover:text-primary'} onClick={() => setIsOpen(false)}>Service-To-Do</NavLink></li>
          </ul>
        </details>
      </li>
      )}
      <li>
          <div className="flex justify-between items-center  @min-[520px]:hidden">
              <p>Theme:</p>
              <button
                onClick={() => setTheme(!theme)}
                className="cursor-pointer -mr-3"
                data-tooltip-id="theme-tooltip"
                data-tooltip-content={theme ? 'Enable Dark Mode' : 'Enable Light Mode'}
                data-tooltip-place="top"
              >
                {theme ? <CiDark size={30} /> : <CiLight size={30} />}
              </button>
          </div>
      </li>
    </>
  );

  return (
    <div className={`@container fixed ${isShrunk ? 'top-0' : ''} left-0 right-0 shadow w-full bg-base-200 drawer z-50`}>
      <input id="navbar-drawer" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className={`flex max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 @min-[1536px]:px-0 transition-all duration-300 ${isShrunk ? 'py-1' : 'py-4'}`}>
          <div className="">
            <div className="flex items-center">
              <img src="/logoTech.png" className={`transition-all duration-300 ${isShrunk ? 'w-[24px]' : 'w-[30px]'}`} alt="logo" />
              <Link to='/' className={`font-bold ml-2 transition-all text-primary duration-300 text-2xl`}>Tech<span className='text-secondary'>Tinker</span></Link>
            </div>
          </div>

          <div className="flex-1 gap-4 flex justify-end items-center">
            <div className="hidden @min-[520px]:flex items-center @min-[1023px]:gap-[26px] @min-[1053px]:gap-[35px] @min-[1073px]:gap-[44px] @min-[1096px]:gap-[60px] @min-[1131px]:gap-[80px]">
              <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-poppins text-[16px]">
                  {navItems}
                </ul>
              </div>

              <div className="flex items-center gap-[14px]">
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
                    ?<><button onClick={handleLogOut} className="btn btn-primary btn-outline hover:outline">Logout</button> <Avatar></Avatar> </>
                    : <Link to="/login" className="btn btn-primary hover:outline">Login</Link>
                }
              </div>
            </div>

            {/* Hamburger Icon for Small Screens */}
            <label htmlFor="navbar-drawer" onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[26px] w-[26px]" fill="none"
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
        <ul className="menu font-poppins px-2 w-[180px] @min-[400px]:px-4 @min-[400px]:w-[210px] @min-[440px]:w-64 min-h-full bg-base-200 text-base-content">
          {
            user ? <div className="@min-[520px]:hidden pl-3 mt-2.5 mb-2">
                <Avatar></Avatar>
              </div> : ''
          }
          <hr className={`${!user? 'mt-[56px]' : ''} @min-[520px]:mt-[60px] @min-[1024px]:mt-[70px] mb-3`}/>
          {navItems}
          <hr className='@min-[520px]:hidden my-3'/>
          {
            user
              ?<button onClick={handleLogOut} className="btn btn-primary btn-outline hover:outline @min-[520px]:hidden">Logout</button>
              : <Link to="/login" className="btn btn-primary hover:outline @min-[520px]:hidden">Login</Link>
          }
  
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
