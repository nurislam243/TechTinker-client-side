import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Verified Service Providers',
      description:
        'We carefully vet every technician to ensure high-quality, reliable service for your devices.',
      icon: '✅',
    },
    {
      id: 2,
      title: 'Real-Time Booking & Tracking',
      description:
        'Book your service instantly and get live updates on its progress—no more guesswork!',
      icon: '📱',
    },
    {
      id: 3,
      title: 'Affordable & Transparent Pricing',
      description:
        'We offer competitive rates with no hidden fees. You’ll know what you’re paying for.',
      icon: '💰',
    },
    {
      id: 4,
      title: 'Secure & Easy Communication',
      description:
        'Our platform ensures smooth, safe communication between clients and providers.',
      icon: '🔒',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="card-title text-lg">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
