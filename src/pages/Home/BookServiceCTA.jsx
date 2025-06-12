import React from "react";
import { Link } from "react-router";
import { motion } from 'framer-motion';

const BookServiceCTA = () => {

  return (
    <section className="bg-primary/5 relative text-base-content py-12 px-6 @min-[1320px]:px-12 flex flex-col-reverse md:flex-row items-center gap-20 lg:gap-0 justify-between shadow-lg mx-auto my-12">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}      
        whileInView={{ opacity: 1, y: 0}}    
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }} 
        className="mb-8 md:mb-0 md:max-w-xl"
      >
        <h2 className="text-4xl font-bold text-primary mb-4">Need Tech Device Repair?</h2>
        <p className="text-lg mb-6 text-base-content/80 max-w-md">
          Book your service now and get fast, reliable, and expert repair for your
          devices. Don’t wait — our professionals are ready to help you today!
        </p>
        <Link
          to={'/services'}
          className="btn btn-secondary sm:btn-lg px-8 rounded-full hover:outline"
        >
          Book a Service Now
        </Link>
      </motion.div>

      {/* Image */}
      <div className="flex @min-[878px]:absolute right-0">
        <div className="-mt-[52px] -mr-[80px] z-20 border-7 border-t border-l border-secondary">
          <motion.img
            initial={{ opacity: 0, y: 50 }}      
            whileInView={{ opacity: 1, y: 0}}    
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }} 
            src="https://i.ibb.co/9mrjX4jJ/young-male-technician-installing-new-components-broken-cpu-customer-latin-man-running-repair-shop-mi.jpg"
            alt="Tech Repair Service"
            className="@min-[490px]:max-w-[250px] @min-[768px]:max-w-[200px] @min-[970px]:max-w-[250px] @min-[1080px]:max-w-[300px] @min-[1190px]:max-w-[350px] shadow-lg"
          />
        </div>
        <div className="-mb-[52px] border-7 border-b border-r border-accent">
          <motion.img
            initial={{ opacity: 0, y: 50 }}      
            whileInView={{ opacity: 1, y: 0}}    
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }} 
            src="https://i.ibb.co/fdhT73nn/close-up-woman-repairing-computer-chips-min.jpg"
            alt="Tech Repair Service"
            className=" @min-[490px]:max-w-[250px] @min-[768px]:max-w-[200px] @min-[970px]:max-w-[250px] @min-[1080px]:max-w-[300px] @min-[1190px]:max-w-[350px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BookServiceCTA;
