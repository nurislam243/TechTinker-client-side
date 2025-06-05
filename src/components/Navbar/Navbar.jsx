import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { Tooltip } from 'react-tooltip';
import { CiDark, CiLight } from 'react-icons/ci';

const Navbar = () => {
  const { user, theme, setTheme  } = useContext(AuthContext);
  console.log(theme);

  // handle logout functionality
  const handleLogOut = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('logOut successful')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
  <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm absolute dropdown-content bg-base-100 z-1 mt-3 w-screen p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="flex items-center">
          <img src="/logoTech.png" className='w-[30px]' alt="" />
          <a className="text-xl">TechTinker</a>
      </div>
    </div>
    <div className="navbar-end">
      <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><Link to={'/'}>Home</Link></li>
              <li><NavLink to={'/services'}>Services</NavLink></li>
              {
                user && <>
                <li>
                    <details>
                    <summary>Dashboard</summary>
                    <ul className="p-1 w-[150px]">
                        <li><NavLink to={'/add-service'}>Add Service</NavLink></li>
                        <li><NavLink>Manage Service</NavLink></li>
                        <li><NavLink>Booked-Services</NavLink></li>
                        <li><NavLink>Service-To-Do</NavLink></li>                       
                    </ul>
                    </details>
                </li>
                </>
              }
          </ul>
      </div>
      <div className="flex items-center">
        <button 
        onClick={() => setTheme(!theme)} 
        className='cursor-pointer @min-[340px]:flex hidden'
        data-tooltip-id="theme-tooltip"
        data-tooltip-content={theme ? "Enable Dark Mode" : "Enable Light Mode"}
        data-tooltip-place="top"

        >
            {
              theme ? <CiDark size={40} /> : <CiLight size={40} />
            }
        </button>
        <Tooltip id="theme-tooltip" />
        {
          user ? <button onClick={handleLogOut}>Logout</button> : <Link to={'/login'} className="btn">Login</Link>
        }
      </div>
    </div>
  </div>
    );
};

export default Navbar;