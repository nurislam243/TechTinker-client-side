import React from 'react';
import { Link } from 'react-router';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Verified Service Providers',
      description:
        'We carefully vet every technician to ensure high-quality, reliable service for your devices.',
      img: 'https://i.ibb.co/VcjPp2pK/tick-mark.png',
    },
    {
      id: 2,
      title: 'Real-Time Booking & Tracking',
      description:
        'Book your service instantly and get live updates on its progress—no more guesswork!',
      img: 'https://i.ibb.co/FkbQJxRD/track-4862389.png',
    },
    {
      id: 3,
      title: 'Affordable & Transparent Pricing',
      description:
        'We offer competitive rates with no hidden fees. You’ll know what you’re paying for.',
      img: 'https://i.ibb.co/VYLRvz3L/budget-friendly-18291928.png',
    },
    {
      id: 4,
      title: 'Secure & Easy Communication',
      description:
        'Our platform ensures smooth, safe communication between clients and providers.',
      img: 'https://i.ibb.co/xqxcybvy/cyber-security.png',
    },
  ];

  return (
    <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Section */}
      <div>
        <p className="text-sm text-primary font-medium mb-2">/ Why TechTinker?</p>
        <h2 className="text-4xl font-bold leading-tight mb-6">
          Why Choose TechTinker?
        </h2>
        <p className="text-base text-base-content/80 mb-6">
          For years, we’ve connected hobbyists with expert services they can trust. 
          Whether you're restoring, repairing, or reinventing — TechTinker makes it easy and reliable.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to={'/services'} className="btn btn-primary hover:outline">Explore Services</Link>
          <Link to={'/register'} className="btn btn-outline btn-primary hover:outline">Create an Account</Link>
        </div>
      </div>

      {/* Right Section (Grid of Reasons) */}
      <div className="grid gap-6 sm:grid-cols-2">
        {reasons.map(({ id, title, description, img }) => (
          <div
            key={id}
            className="border-l-4 border-primary pl-4 py-3"
          >
            <img className='h-[75px] w-[75px]' src={img} alt="" />
            <h3 className="font-semibold text-lg mb-1 mt-4">{title}</h3>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
