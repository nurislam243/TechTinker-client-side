import { useLoaderData } from "react-router";

const ServiceDetails = () => {
  const service = useLoaderData(); 
  const { _id, description, imageUrl, price, serviceArea, serviceName, serviceProvider } = service;


  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">
        {serviceName}
      </h2>

      <img
        src={imageUrl}
        alt={serviceName}
        className="w-full h-72 object-cover rounded-xl mb-8"
      />

      <p className="text-gray-700 text-lg mb-6">{description}</p>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={serviceProvider.image}
          alt={serviceProvider.name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <p className="font-semibold text-gray-800">{serviceProvider.name}</p>
          <p className="text-sm text-gray-600">Area: {serviceArea}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <span className="text-green-600 font-bold text-2xl">${price}</span>
        <button
          className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition"
          onClick={() => document.getElementById("booking_modal").showModal()}
        >
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      <dialog id="booking_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">Book Service</h3>

          <div className="space-y-3">
            <input type="text" value={_id} disabled className="input input-bordered w-full" />
            <input type="text" value={serviceName} disabled className="input input-bordered w-full" />
            <input type="text" value={imageUrl} disabled className="input input-bordered w-full" />
            <input type="text" value={serviceProvider.email} disabled className="input input-bordered w-full" />
            <input type="text" value={serviceProvider.name} disabled className="input input-bordered w-full" />
            <input type="email" value={"currentUser@email.com"} disabled className="input input-bordered w-full" />
            <input type="text" value={"Current User Name"} disabled className="input input-bordered w-full" />

            <input
              type="date"
              name="serviceDate"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="instruction"
              placeholder="Special Instruction"
              className="textarea textarea-bordered w-full"
            ></textarea>

            <input type="text" value={`$${price}`} disabled className="input input-bordered w-full" />
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
              <button type="submit" className="btn btn-primary ml-2">Purchase</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default ServiceDetails;
