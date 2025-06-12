import React from 'react';
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosAlarm } from "react-icons/io";
import { FaGift } from "react-icons/fa";


const TopBar = () => {
  return (
    <div className="bg-neutral text-neutral-content py-2 text-sm hidden lg:block">
      <div className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-2 md:mb-0">
          {/* Phone Number */}
          <span className="flex items-center">
            <span className="mr-2 text-primary text-[16px]"><BsTelephoneFill /></span> 
            <a href="tel:+8801234567890" className="hover:text-primary transition-colors duration-200">+880 1234 567890</a>
          </span>

          {/* Email Address */}
          <span className="flex items-center">
            <span className="mr-2 text-primary text-[16px]"><MdEmail /></span> 
            <a href="mailto:info@techtinker.com" className="hover:text-primary transition-colors duration-200">info@techtinker.com</a>
          </span>

          {/* Business Hours - Optional */}
          <span className="flex items-center">
            <span className="mr-2 text-primary text-lg"><IoIosAlarm /> </span> 
            Mon - Fri: 9 AM - 8 PM
          </span>
        </div>

        {/* Announcement / Offer */}
        <div className="font-bold text-primary text-center md:text-right flex items-center">
          <span className="mr-2 text-neutral-content"><FaGift></FaGift></span>
          10% Off on Your First Service! Limited Time Offer!
        </div>
      </div>
    </div>
  );
};

export default TopBar;