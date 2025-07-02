import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Empty from '../Empty/Empty';
import MyServiceRow from '../MyServiceRow/MyServiceRow';

const MyServices = ({manageServicesPromise}) => {
    const initialServices = use(manageServicesPromise);
    const [services, setServices] = useState(initialServices);

    // handle Delete Service
    const handleDeleteService = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) {
        // send delete request to db
            axios.delete(`https://techtinker-server.vercel.app/services/${id}`,{
              withCredentials: true
            })
            .then(response => {
                 if(response.data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    
                    const currentService = services.filter(service => service._id !== id);
                    setServices(currentService);

                 }
                console.log('Deleted successfully:', response.data);
            })
            .catch(error => {
                console.error('Delete failed:', error);
            });
        }
      });
    }


    // update service in client side/browser
    const handleUpdateService = (updatedService) => {
      setServices(prevServices =>
        prevServices.map(service =>
          service._id === updatedService._id ? updatedService : service
        )
      );
    };


    // empty Service
    if(services.length === 0){
      return <Empty 
          message={'You haven’t added any services yet.'} 
          link={'/add-service'} 
          btnText={'Add Service'}
        ></Empty>
    }

    return (
      <div className="overflow-x-auto my-12">
        <table className="table w-full">
          <thead className="bg-base-300 text-base font-semibold">
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
              <th>Area</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <MyServiceRow
                key={service._id}
                service={service}
                handleDeleteService={handleDeleteService}
                handleUpdateService={handleUpdateService}
              />
            ))}
          </tbody>
        </table>
      </div>

    );
};

export default MyServices;