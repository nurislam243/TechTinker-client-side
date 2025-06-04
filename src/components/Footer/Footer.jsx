import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center">
                <img src="/logoTech.png" className='w-[30px]' alt="" />
                <span className="text-2xl font-bold text-white">TechTinker</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Empowering creators and professionals to share services and connect with communities through technology.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-400">Integrations</a></li>
            <li><a href="#" className="hover:text-cyan-400">FAQs</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-400" title="Facebook">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="hover:text-cyan-400" title="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-cyan-400" title="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="hover:text-cyan-400" title="LinkedIn">
              <i className="fab fa-linkedin-in text-xl"></i>
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
