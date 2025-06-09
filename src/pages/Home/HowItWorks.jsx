import React from 'react';

const HowItWorks = () => {
  const clientSteps = [
    {
      id: 1,
      title: 'Browse Services',
      description: 'Explore available tech repair services from trusted providers.',
      icon: '🔍',
    },
    {
      id: 2,
      title: 'View Details',
      description: 'Check service details, price, provider info, and location.',
      icon: '📄',
    },
    {
      id: 3,
      title: 'Book a Service',
      description: 'Choose a service and confirm your booking with preferred date.',
      icon: '📅',
    },
    {
      id: 4,
      title: 'Track Status',
      description: 'Stay updated on your booking with live status updates.',
      icon: '🔄',
    },
  ];

  const providerSteps = [
    {
      id: 1,
      title: 'Add Your Service',
      description: 'Log in and post your repair services with necessary details.',
      icon: '🛠️',
    },
    {
      id: 2,
      title: 'Manage Listings',
      description: 'Edit or remove your services anytime from your dashboard.',
      icon: '🗂️',
    },
    {
      id: 3,
      title: 'View Bookings',
      description: 'Check who booked your services and their requirements.',
      icon: '📥',
    },
    {
      id: 4,
      title: 'Update Progress',
      description: 'Change service status like Pending, Working, or Completed.',
      icon: '✅',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Client Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">For Clients</h3>
          <div className="space-y-6">
            {clientSteps.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{icon}</div>
                    <div>
                      <h4 className="card-title">{title}</h4>
                      <p className="text-sm opacity-80">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Provider Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">For Providers</h3>
          <div className="space-y-6">
            {providerSteps.map(({ id, title, description, icon }) => (
              <div
                key={id}
                className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="card-body">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{icon}</div>
                    <div>
                      <h4 className="card-title">{title}</h4>
                      <p className="text-sm opacity-80">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
