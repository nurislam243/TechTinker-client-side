import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="w-full min-h-[89vh] py-10 lg:pt-[80px] xl:pt-[110px] bg-base-100 max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://i.ibb.co/1GzjpHY4/pexels-rdne-7821937-1.jpg"
            alt="Terms and Conditions"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">Terms & Conditions</h1>
          <p className="text-base-content mb-4">
            Welcome to <span className="text-secondary font-semibold">TechTinker</span>. By accessing and using our platform, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <div className="space-y-4 text-base-content text-sm">
            <div>
              <h2 className="text-xl font-semibold text-primary">1. Account Responsibility</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account and password. TechTinker is not liable for any unauthorized activity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">2. Service Usage</h2>
              <p>
                You agree not to misuse the platform for illegal activities or to harm service providers or customers. Suspicious behavior may lead to account termination.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">3. Payments & Bookings</h2>
              <p>
                All payments must be made through the approved channels. Booking cancellations must be done according to our policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">4. Intellectual Property</h2>
              <p>
                All content, logos, and designs are the property of TechTinker. Unauthorized reproduction is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">5. Modifications</h2>
              <p>
                TechTinker reserves the right to update these terms at any time. Changes will be effective immediately upon posting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="mt-12 max-w-4xl mx-auto text-center text-sm text-base-content">
        <p>
          By continuing to use TechTinker, you acknowledge that you have read, understood, and agreed to these terms.  
        </p>
        <p className="italic mt-2">Last updated: July 1, 2025</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
