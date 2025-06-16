import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [serviceNameError, setServiceNameError] = useState('');
  const [imageUrlError, setImageUrlError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [serviceAreaError, setServiceAreaError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const serviceProvider = {
    image: user.photoURL,
    name: user.displayName,
    email: user.email
  }


  // handle add service
  const addService =(e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());

    // reset previous error
    setImageUrlError('');
    setServiceNameError('');
    setPriceError('');
    setServiceAreaError('');
    setDescriptionError('');
  

    // form validation
    if (!serviceData.imageUrl) {
      setImageUrlError("Image URL is required.");
      return;
    }
    if (!serviceData.serviceName) {
    setServiceNameError("Service name is required.");
    return;
    }
    if (!serviceData.price) {
      setPriceError("Price is required.");
      return;
    }
    if (!serviceData.serviceArea) {
      setServiceAreaError("Service area is required.");
      return;
    }
    if (!serviceData.description) {
      setDescriptionError("Description is required.");
      return
    }

    const newService = {
      ...serviceData,
      serviceProvider

    }

    // send service info in mongodb
    axios.post('https://techtinker-server.vercel.app/services', newService, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Service Added!',
          text: 'Your service has been successfully added to TechTinker.',
          icon: 'success',
          confirmButtonColor: '#00B09E',
          confirmButtonText: 'Great!',
        });
        form.reset();
      }
    })
    .catch(error => {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong while adding the service.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      console.error('Add Service Error:', error);
    })
  }

  return (
    <div className="py-11">
      <Helmet>
         <title>Add New Service | TechTinker</title>
      </Helmet>
      <div className="max-w-2xl mx-auto border border-gray-200 shadow-md p-6 rounded">
        {/* title and subtitle */}
        <div className="text-center px-12 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Add a New Service
            </h2>
            <p className="mt-2 text-base-content/50 max-w-xl mx-auto text-sm">Share your tech expertise by adding a service for clients to discover.</p>
        </div>      
        {/* add service form  */}
        <form onSubmit={addService} className="space-y-5">
          {/* Image URL */}
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
            />
            <p className='text-error'>{imageUrlError}</p>
          </div>

          {/* Service Name */}
          <div>
            <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700 mb-1">
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              placeholder="Enter service name"
              className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
            />
            <p className='text-error'>{serviceNameError}</p>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price (৳)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
            />
            <p className='text-error'>{priceError}</p>
          </div>

          {/* Service Area */}
          <div>
            <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-1">
              Service Area
            </label>
            <input
              type="text"
              id="serviceArea"
              name="serviceArea"
              placeholder="Enter service area"
              className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"
            />
            <p className='text-error'>{serviceAreaError}</p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter service description"
              className="bg-base-200/70 mt-1 outline outline-base-content/10 focus:outline-base-content/35 px-3.5 py-[9px] rounded-[2px] w-full"></textarea>
            <p className='text-error'>{descriptionError}</p>
          </div>

          {/* Add Service Button */}
          <div>
            <button
              type="submit"
              className="w-full px-8 py-5 font-semibold btn bg-primary/90 hover:bg-primary/40 cursor-pointer rounded-[2px] text-white sm:text-[16px]"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
