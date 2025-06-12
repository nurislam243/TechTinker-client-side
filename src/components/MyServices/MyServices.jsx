import React, { use, useState } from 'react';
import MyServiceCard from '../MyServiceCard/MyServiceCard';
import Swal from 'sweetalert2';
import axios from 'axios';

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
            axios.delete(`http://localhost:3000/services/${id}`)
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

    return (
        <div>
             {services.length === 0 ? (
            <p className="text-center text-gray-500">You haven't added any services yet.</p>
        ) : services.map(service => <MyServiceCard service={service} handleDeleteService={handleDeleteService} ></MyServiceCard>)

}
        </div>
    );
};

export default MyServices;