import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Services</h3>
                <h2 className="text-6xl font-bold ">Our Services</h2>
                <p className="text-xl mt-5 w-3/4 mx-auto">The majority have suffered alteration in some form, by injected humor, or randomised words which do not look even slightly beliveable</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;