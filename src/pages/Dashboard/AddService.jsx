import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import axios from 'axios';

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
    axios.post('http://localhost:3000/services', newService, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('after service save', res.data);
    })
    .catch(error => {
      console.log('Error saving services', error);
    })

  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Add New Service</h2>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <p className='text-error'>{descriptionError}</p>
        </div>

        {/* Add Service Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
