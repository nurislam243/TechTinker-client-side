import React from "react";
import { useNavigate } from "react-router";

const BookServiceCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book-service");
  };

  return (
    <section className="bg-primary text-primary-content py-16 px-6 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg max-w-7xl mx-auto my-12">
      {/* Text Content */}
      <div className="mb-8 md:mb-0 md:max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Need Tech Device Repair?</h2>
        <p className="text-lg mb-6 max-w-md">
          Book your service now and get fast, reliable, and expert repair for your
          devices. Don’t wait — our professionals are ready to help you today!
        </p>
        <button
          onClick={handleClick}
          className="btn btn-secondary btn-lg px-8 rounded-full"
        >
          Book a Service Now
        </button>
      </div>

      {/* Image */}
      <div className="max-w-sm">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1181227630/display_1500/stock-photo-technical-support-customer-service-business-technology-internet-concept-1181227630.jpg"
          alt="Tech Repair Service"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default BookServiceCTA;
