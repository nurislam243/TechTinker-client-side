import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center">
              <img src="/logoTech.png" className={`transition-all duration-300 w-[30px]`} alt="logo" />
              <Link to='/' className={`font-bold ml-2 transition-all text-primary duration-300 text-2xl`}>Tech<span className='text-secondary'>Tinker</span></Link>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Empowering creators and professionals to share services and connect with communities through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to={'/'} className="hover:text-primary">Home</Link></li>
            <li><Link to={'/services'} className="hover:text-primary">Services</Link></li>
            <li><Link to={'/offers'} className="hover:text-primary">Offers</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to={'/aboutUs'} className="hover:text-primary">About Us</Link></li>
            <li><Link to={'/privacy'} className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to={'/terms'} className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="text-neutral-content flex flex-col gap-[7px]">
            <a href="https://www.facebook.com/nur.islam.568309/" className="hover:text-primary" target='_blank'>
              <h4 className=' flex items-center gap-x-2'><FaFacebook /> <span className='text-sm'>Facebook</span></h4>
            </a>
            <a href="https://x.com/MdNurIslam55434" className="hover:text-primary" target='_blank'>
              <h4 className=' flex items-center gap-x-2'><FaTwitter /> <span className='text-sm'>Twitter</span></h4>
            </a>
            <a href="https://github.com/nurislam243" className="hover:text-primary" target='_blank'>
              <h4 className=' flex items-center gap-x-2'><FaGithub /> <span className='text-sm'>Github</span></h4>
            </a>
            <a href="https://www.linkedin.com/in/md-nur-islam-360b372a0/" className="hover:text-primary"  target='_blank'>
              <h4 className=' flex items-center gap-x-2'><FaLinkedin /><span className='text-sm'>Linkedin</span></h4>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} TechTinker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
