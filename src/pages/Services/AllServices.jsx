import { Link, useLoaderData } from "react-router";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const AllServices = () => {
    const services = useLoaderData();

    return (
        <section className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-purple-700">
                All Available Services
            </h2>
            <div className="">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        
        </section>
    );
};

export default AllServices;
