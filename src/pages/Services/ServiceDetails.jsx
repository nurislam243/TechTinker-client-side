import axios from "axios";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const service = useLoaderData(); 
  const { _id, description, imageUrl, price, serviceArea, serviceName, serviceProvider } = service;

 const handlePurchase = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const bookingInfoData = Object.fromEntries(formData.entries());
  const bookingInfo = {
    ...bookingInfoData,
    serviceStatus: 'pending'
  }

  axios.post('http://localhost:3000/bookings', bookingInfo)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                  document.getElementById("booking_modal").close()
                  Swal.fire({
                      icon: "success",
                      title: "Your services has been purchase successfully",
                      showConfirmButton: false,
                      timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
}



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

          <form onSubmit={handlePurchase}>
  <div className="space-y-3">
    <input type="text" name="serviceId" value={_id} className="input input-bordered w-full" readOnly />
    <input type="text" name="serviceName" value={serviceName} className="input input-bordered w-full" readOnly />
    <input type="text" name="imageUrl" value={imageUrl} className="input input-bordered w-full" readOnly />
    <input type="text" name="providerEmail" value={serviceProvider.email} className="input input-bordered w-full" readOnly />
    <input type="text" name="providerName" value={serviceProvider.name} className="input input-bordered w-full" readOnly />
    <input type="email" name="userEmail" value={"currentUser@email.com"} className="input input-bordered w-full" readOnly />
    <input type="text" name="userName" value={"Current User Name"} className="input input-bordered w-full" readOnly />
    
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

    <input type="text" name="price" value={`$${price}`} className="input input-bordered w-full" readOnly />
  </div>

  <div className="modal-action">
    <button type="button" onClick={() => document.getElementById("booking_modal").close()} className="btn">
      Close
    </button>
    <button type="submit" className="btn btn-primary ml-2">
      Purchase
    </button>
  </div>
</form>

        </div>
      </dialog>
    </section>
  );
};

export default ServiceDetails;
