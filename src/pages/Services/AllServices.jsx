import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
    const data = useLoaderData();
    const [services, setServices] = useState(data);
    const [searchText, setSearchText] = useState('');


    // sorting functionality
    const handleSort = (order) => {
        if (order === 'default') {
            setServices(data); // original unsorted data
        } else if (order === 'asc') {
            const sorted = [...services].sort((a, b) => a.price - b.price);
            setServices(sorted);
        } else if (order === 'desc') {
            const sorted = [...services].sort((a, b) => b.price - a.price);
            setServices(sorted);
        } else if (order === 'az') {
            const sorted = [...services].sort((a, b) =>
            a.serviceName.localeCompare(b.serviceName)
            );
            setServices(sorted);
        } else if (order === 'za') {
            const sorted = [...services].sort((a, b) =>
            b.serviceName.localeCompare(a.serviceName)
            );
            setServices(sorted);
        }
    };



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
            <div className="text-center px-2 sm:px-6 md:px-7 lg:px-12 py-5 sm:py-6 md:py-7 lg:py-12">
                <h2 className="text-2xl @min-[460px]:text-3xl md:text-4xl font-bold text-primary">
                    Explore All Available Tech Services
                </h2>
                <p className="text-sm sm:text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto">Find the perfect tech solution for your device — from repairs to upgrades, trusted by experts near you.</p>
            </div>

            <div className="">
                {/* search */}
                <div className="mb-12 mt-3 flex items-center justify-center">               
                    <input 
                        type="text"
                        placeholder="Search by Service Name"
                        className="input w-99"
                        onChange={e=>setSearchText(e.target.value)}
                    />             
                </div>
                {/* sort */}
                <div className="flex items-center justify-start @min-[1586px]:justify-end mb-7 -mt-3  gap-2">
                    <p>Sort By: </p>
                    <select className="border border-gray-400 p-1.5 rounded" onChange={(e) => handleSort(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                        <option value="az">Name: A to Z</option>
                        <option value="za">Name: Z to A</option>
                    </select>
                </div>

            </div>

            {/* services card */}
            <div className="gap-5 grid @min-[]: @min-[650px]:grid-cols-2 @min-[1100px]:grid-cols-3 @min-[1450px]:grid-cols-4">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        
        </section>
    );
};

export default AllServices;


