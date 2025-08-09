import React from "react";
import { FaTools, FaHandshake, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="w-full min-h-[89vh] py-10 lg:pt-[80px] xl:pt-[110px] bg-base-100 max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://i.ibb.co.com/5XhdcnyG/pexels-photo-58709.webp"
            alt="Tech Service"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-4">About TechTinker</h2>
          <p className="text-base-content text-lg mb-6">
            At <span className="font-semibold text-secondary">TechTinker</span>, we connect users with trusted local technicians to fix, upgrade, and maintain their electronic devices. Whether you're dealing with a cracked phone screen or want to optimize your PC — we’re here to help!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaTools className="text-2xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Expert Services</h3>
                <p className="text-base-content">
                  Reliable repair & maintenance for mobiles, PCs, consoles, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaHandshake className="text-2xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Trusted Providers</h3>
                <p className="text-base-content">
                  All providers are verified and reviewed for quality assurance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-2xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Secure & Convenient</h3>
                <p className="text-base-content">
                  Book confidently with our secure and easy-to-use platform.
                </p>
              </div>
            </div>
          </div>

          <p className="text-base-content text-sm mt-8">
            For any inquiries, email us at <span className="text-primary font-medium">support@techtinker.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
