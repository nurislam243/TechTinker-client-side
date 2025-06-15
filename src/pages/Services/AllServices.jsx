import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
    const data = useLoaderData();
    const [services, setServices] = useState(data);
    const [searchText, setSearchText] = useState('');


    // handle search functionality
    useEffect(() => {
        const searchedServices = data.filter(service => service.serviceName.toLowerCase().includes(searchText.toLowerCase()));
        setServices(searchedServices);
    }, [data, searchText])

    return (
        <section className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 pb-12">
            <Helmet>
                <title>All Services | TechTinker</title>
            </Helmet>
            <div className="text-center p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Explore All Available Tech Services
                </h2>
                <p className="text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto">Find the perfect tech solution for your device — from repairs to upgrades, trusted by experts near you.</p>
            </div>
            <div className="mb-12 mt-3 flex items-center justify-center">               
                <input 
                    type="text"
                    placeholder="Search by Service Name"
                    className="input w-99"
                    onChange={e=>setSearchText(e.target.value)}
                />             
            </div>
            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        
        </section>
    );
};

export default AllServices;


