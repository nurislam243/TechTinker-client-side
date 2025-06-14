import React from 'react';
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
  {
    id: 1,
    name: 'Rakib Hasan',
    role: 'Client',
    comment: 'My laptop was fixed within hours! The booking was super easy and the technician was very professional.',
    image: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Akter',
    role: 'Service Provider',
    comment: 'I love using this platform to connect with new clients. The process is smooth and payment is always on time.',
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 4,
  },
  {
    id: 3,
    name: 'Jahidul Islam',
    role: 'Client',
    comment: 'Excellent service! I booked a mobile repair and the provider came to my house right on schedule.',
    image: 'https://i.pravatar.cc/100?img=7',
    rating: 5,
  },
  {
    id: 4,
    name: 'Nusrat Jahan',
    role: 'Client',
    comment: 'Very affordable and reliable. I got my router replaced in a single visit.',
    image: 'https://i.pravatar.cc/100?img=11',
    rating: 4,
  },
  {
    id: 5,
    name: 'Sabbir Mahmud',
    role: 'Service Provider',
    comment: 'Getting regular orders has become so much easier. This platform helps me manage my schedule efficiently.',
    image: 'https://i.pravatar.cc/100?img=15',
    rating: 5,
  },
  {
    id: 6,
    name: 'Mithila Rahman',
    role: 'Client',
    comment: 'Very responsive support team. Helped me resolve an issue with my booking immediately.',
    image: 'https://i.pravatar.cc/100?img=20',
    rating: 4,
  },
  {
    id: 7,
    name: 'Tanvir Ahmed',
    role: 'Service Provider',
    comment: 'Client verification and payment system is smooth. Highly recommend for freelance technicians.',
    image: 'https://i.pravatar.cc/100?img=30',
    rating: 5,
  },
  {
    id: 8,
    name: 'Rumana Chowdhury',
    role: 'Client',
    comment: 'Highly trusted platform. I always book from here whenever my devices need servicing.',
    image: 'https://i.pravatar.cc/100?img=40',
    rating: 5,
  },
];


  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">What Our Users Say</h2>

      <div className="">
        <Marquee pauseOnHover={true} className='py-4'>
          {testimonials.map(({ id, name, role, comment, image, rating }) => (
            <div key={id} className="card bg-base-100 border border-gray-200 max-w-[180px] @min-[360px]:max-w-[200px] @min-[1220px]:max-w-[290px] min-h-[310px] @min-[360px]:min-h-[298px] @min-[1200px]:min-h-[245px] mx-2.5 shadow-md hover:shadow-xl transition duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <img src={image} alt={name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
                <p className="text-sm text-base-content mb-4">“{comment}”</p>
                <div className="flex text-yellow-400">
                  {'★'.repeat(rating)}
                  {'☆'.repeat(5 - rating)}
                </div>
              </div>
            </div>
        ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
