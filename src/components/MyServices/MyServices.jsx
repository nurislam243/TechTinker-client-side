import React, { use } from 'react';
import MyServiceCard from '../MyServiceCard/MyServiceCard';

const MyServices = ({manageServicesPromise}) => {
    const services = use(manageServicesPromise);
    return (
        <div>
             {services.length === 0 ? (
            <p className="text-center text-gray-500">You haven't added any services yet.</p>
        ) : services.map(service => <MyServiceCard service={service}></MyServiceCard>)

}
        
        </div>
    );
};

export default MyServices;