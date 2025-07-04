import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Reviews from "../../components/Reviews/Reviews";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const service = useLoaderData(); 
  const { _id, description, imageUrl, price, discountedPrice, serviceArea, serviceName, serviceProvider } = service;

 const handlePurchase = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const bookingInfoData = Object.fromEntries(formData.entries());
  const bookingInfo = {
    ...bookingInfoData,
    serviceStatus: 'pending'
  }

  axios.post('https://techtinker-server.vercel.app/bookings', bookingInfo, {
    withCredentials: true
  })
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
    <section className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 pt-3 md:pt-5 pb-24">

      <Helmet>
        <title>{serviceName} | TechTinker</title>
      </Helmet>

      <div className="bg-base-200/70 shadow-sm p-3 @min-[450px]:p-6 rounded">
        <h2 className="text-3xl font-bold mb-6 text-base-content/90 text-center">
          {serviceName}
        </h2>

        <img
          src={imageUrl}
          alt={serviceName}
          className="w-full mx-auto h-72 object-cover rounded mb-8"
        />

        <p className="text-base-content/85 text-lg mb-6">{description}</p>

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

        <div className="flex justify-between items-center">
          <div className="">
            {
              !discountedPrice && <span className="text-green-600 font-bold text-2xl">৳{price}</span>
            }
            {
              discountedPrice ? <div className="flex gap-3"> 
                <span 
                  className="text-green-600 font-bold text-2xl"
                >
                  ৳{discountedPrice} 
                  
                </span>
                <span className="line-through text-gray-500">৳{price}</span>
              </div> : ""
            }
          </div>
          <button
            className="btn btn-primary hover:outline"
            onClick={() => document.getElementById("booking_modal").showModal()}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <dialog id="booking_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4 text-secondary">Book Service</h3>

          <form onSubmit={handlePurchase}>
            <div className="space-y-3 max-h-[78vh] overflow-y-auto px-2">
              <div className="">
                <label htmlFor="serviceId" className="font-medium">Service ID</label>
                <input id="serviceId" type="text" name="serviceId" defaultValue={_id} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>

              <div className="">
                <label htmlFor="serviceName" className='font-medium'>Service Name</label>
                <input id="serviceName" type="text" name="serviceName" defaultValue={serviceName} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="imageUrl" className='font-medium'>Service Image URL</label>
                <input id="imageUrl" type="text" name="imageUrl" defaultValue={imageUrl} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="providerEmail" className='font-medium'>Provider Email</label>
                <input id="providerEmail" type="text" name="providerEmail" defaultValue={serviceProvider.email} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="providerName" className='font-medium'>Provider Name</label>
                <input id="providerName" type="text" name="providerName" defaultValue={serviceProvider.name} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="userEmail" className='font-medium'>Your Email</label>
                <input id="userEmail" type="email" name="userEmail" defaultValue={user.email} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="userName" className='font-medium'>Your Name</label>
                <input id="userName" type="text" name="userName" defaultValue={user.displayName} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              <div className="">
                <label htmlFor="price" className='font-medium'>Service Price</label>
                <input id="price" type="text" name="price" defaultValue={`৳ ${price}`} className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full" readOnly />
              </div>
              
              <div className="">
                <label htmlFor="date" className='font-medium'>
                  Preferred Service Date <span className="text-error">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="serviceDate"
                  className="bg-base-200/70 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="instruction" className='font-medium'>
                  Special Instruction <span className="text-error">*</span>
                </label>
                <textarea
                  id="instruction"
                  name="instruction"
                  placeholder="Special Instruction"
                  className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
                  required
                ></textarea>
              </div>
            </div>

            <div className="modal-action">
              <button type="button" onClick={() => document.getElementById("booking_modal").close()} className="btn hover:outline">
                Close
              </button>
              <button type="submit" className="btn btn-primary ml-2 hover:outline">
                Purchase
              </button>
            </div>
          </form>

        </div>
      </dialog>
      <Reviews id={_id}></Reviews>
    </section>
  );
};

export default ServiceDetails;
