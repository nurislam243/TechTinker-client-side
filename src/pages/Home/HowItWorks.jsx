import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const clientSteps = [
    {
      id: 1,
      title: 'Browse Services',
      description: 'Explore available tech repair services from trusted providers.',
      img: 'https://i.ibb.co/PGPN7rzr/internet-browser.png',
    },
    {
      id: 2,
      title: 'View Details',
      description: 'Check service details, price, provider info, and location.',
      img: 'https://i.ibb.co/67hsTCy8/business-card.png',
    },
    {
      id: 3,
      title: 'Book a Service',
      description: 'Choose a service and confirm your booking with preferred date.',
      img: 'https://i.ibb.co/WWNB4nd7/book.png',
    },
    {
      id: 4,
      title: 'Track Status',
      description: 'Stay updated on your booking with live status updates.',
      img: 'https://i.ibb.co/rKPNp2Nt/pointer.png',
    },
  ];

  const providerSteps = [
    {
      id: 1,
      title: 'Add Your Service',
      description: 'Log in and post your repair services with necessary details.',
      img: 'https://i.ibb.co/9Srxz1N/services.png',
    },
    {
      id: 2,
      title: 'Manage Listings',
      description: 'Edit or remove your services anytime from your dashboard.',
      img: 'https://i.ibb.co/YVL4BVN/management.png',
    },
    {
      id: 3,
      title: 'View Bookings',
      description: 'Check who booked your services and their requirements.',
      img: 'https://i.ibb.co/tMq6XKyf/booking-online.png',
    },
    {
      id: 4,
      title: 'Update Progress',
      description: 'Change service status like Pending, Working, or Completed.',
      img: 'https://i.ibb.co/ksD8pdYp/updated.png',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-primary mb-16">How It Works</h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Client Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-secondary text-center md:text-left">For Clients</h3>
          <div className="space-y-6">
            {clientSteps.map(({ id, title, description, img }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -70 }}    
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: 'easeOut' }} 
                viewport={{ once: false, amount: 0.3 }} 
                className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <img src={img} className='h-[100px] w-[100px]' alt="" />
                    <div>
                      <h4 className="card-title">{title}</h4>
                      <p className="text-sm opacity-80">{description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Provider Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-secondary md:text-left">For Providers</h3>
          <div className="space-y-6">
            {providerSteps.map(({ id, title, description, img }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: -70 }}    
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: 'easeOut' }} 
                viewport={{ once: false, amount: 0.3 }}
                className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <img src={img} className='h-[100px] w-[100px]' alt="" />
                    <div>
                      <h4 className="card-title">{title}</h4>
                      <p className="text-sm opacity-80">{description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;