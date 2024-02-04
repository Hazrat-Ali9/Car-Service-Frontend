/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import api from "../../util/Api";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        api.get('/services')
            .then(res => setServices(res.data))
    }, [])
    return (
        <section className="pb-70" id="services">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">service</span>
                    <h2>Our Services</h2>
                    <p>
                        Our expert technicians are dedicated to providing top-notch car services to keep your vehicle running smoothly. Whether you need routine maintenance or complex repairs, we have the skills and state-of-the-art equipment to do the job right. Trust us to deliver reliable and efficient service every time you visit.

                    </p>
                </div>
                <div className="row">
                    {
                        services.map(service => <ServiceCard key={service._id} name={service.name} desription={service.desc.slice(0, 150) + "..."} image={service.image} id={service._id} />)
                    }

                </div>
            </div>
        </section>

    );
};

export default Services;

const ServiceCard = ({ name, desription, image, id }) => {
    return (
        <Link to={`/appointment?id=${id}`} className="col-sm-6 col-lg-4">
            <a href="service-details.html">
                <div className="service-item">
                    <div className="service-img">
                        <img src={`/assets/image/services/${image ? image : "break-replacement.jpeg"}`} alt="Service"
                            height={280}
                            width={"100%"}
                        />
                    </div>
                    <div className="service-content">
                        <h3>{name}</h3>
                        <p>
                            {
                                desription ? desription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                            }
                        </p>
                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="button btn-sm mt-2">Book Now</button>
                    </div>
                </div>
            </a>
        </Link>
    );
}
