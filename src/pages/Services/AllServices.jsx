import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useState } from "react";

const AllServices = () => {
    const data = useLoaderData();
    const [services, setServices] = useState(data);
    const [searchText, setSearchText] = useState('');


    // handle search functionality
    const handleSearch = (e, text) =>{
        e.preventDefault();
        const searchedServices = data.filter(service => service.serviceName.toLowerCase().split(' ').includes(text.toLowerCase()));
        setServices(searchedServices);
        setSearchText('')
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">
                All Available Services
            </h2>
            <div className="my-20 flex items-center justify-center">
               <form onSubmit={e=>{
                    handleSearch(e, searchText)
               }} className="flex gap-4">
                    <input 
                        type="text"
                        placeholder="Search by Service Name"
                        className="input w-99"
                        onChange={e=>setSearchText(e.target.value)}
                    />
                    <button type="submit">Search</button>
               </form>
            </div>
            <div className="">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        
        </section>
    );
};

export default AllServices;
