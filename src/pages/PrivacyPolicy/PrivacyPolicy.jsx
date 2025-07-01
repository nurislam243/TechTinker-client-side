import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full min-h-[89vh] py-10 lg:pt-[80px] xl:pt-[110px] bg-base-100 max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hero Image */}
        <div>
          <img
            src="https://i.ibb.co/pB6S5WS9/pexels-mikhail-nilov-7534101.jpg"
            alt="Privacy Protection"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-base-content mb-4">
            At <span className="text-secondary font-semibold">TechTinker</span>, we respect your privacy and are committed to protecting your personal data. Here’s how we collect, use, and secure your information.
          </p>

          <div className="space-y-4 text-base-content">
            <div>
              <h2 className="text-xl font-semibold text-primary">1. Data We Collect</h2>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>User information (name, email)</li>
                <li>Device & interaction data</li>
                <li>Service activity (bookings, reviews)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary">2. Usage & Storage</h2>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>To provide smooth services</li>
                <li>Personalized experience & updates</li>
                <li>Secure, encrypted storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Full-Width Image */}
      <div className="mt-16">
        <img
          src="https://i.ibb.co/G4pbnVPb/pexels-shkrabaanthony-5475779-1.jpg"
          alt="Secure TechTinker System"
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Footer Note */}
      <div className="mt-12 max-w-4xl mx-auto text-base-content text-sm text-center">
        <p>
          We may update our Privacy Policy occasionally. All changes will be posted on this page. If you have any questions, please contact us at <span className="text-primary font-medium">support@techtinker.com</span>.
        </p>
        <p className="mt-2 italic">Last updated: July 1, 2025</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
