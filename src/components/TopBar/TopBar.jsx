import React from 'react';
// Ensure Font Awesome or Heroicons are set up in your project
// For example, if using Heroicons:
// import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'; // Or use '24/solid' for filled icons

const TopBar = () => {
  return (
    <div className="bg-base-300 text-base-content py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-2 md:mb-0">
          {/* Phone Number */}
          <span className="flex items-center">
            {/* Example with an emoji. Replace with Heroicon or Font Awesome if preferred. */}
            <span className="mr-2">📞</span> 
            <a href="tel:+8801234567890" className="hover:text-primary transition-colors duration-200">+880 1234 567890</a>
          </span>

          {/* Email Address */}
          <span className="flex items-center">
            {/* Example with an emoji. Replace with Heroicon or Font Awesome if preferred. */}
            <span className="mr-2">📧</span> 
            <a href="mailto:info@techtinker.com" className="hover:text-primary transition-colors duration-200">info@techtinker.com</a>
          </span>

          {/* Business Hours - Optional */}
          <span className="flex items-center">
            {/* Example with an emoji. Replace with Heroicon or Font Awesome if preferred. */}
            <span className="mr-2">⏰</span> 
            Mon - Fri: 9 AM - 8 PM
          </span>
        </div>

        {/* Announcement / Offer */}
        <div className="font-bold text-primary text-center md:text-right">
          <span className="mr-2">🎉</span>
          10% Off on Your First Service! Limited Time Offer!
        </div>
      </div>
    </div>
  );
};

export default TopBar;