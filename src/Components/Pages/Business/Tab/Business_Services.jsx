import { Link } from "react-router-dom";

const Business_Services = ({ services }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-4">
      {services.map((service) => (
        <div
          key={service._id}
          className="card lg:w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-700"
        >
          <div className="card-body">
            <h2 className="card-title">
              {service.service_name}
              <Link to={`/business/${service._id}`} className="flex px-2">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={service.logo_link} alt="Business Logo" />
                  </div>
                </div>
                <div className="badge border-none font-bold text-orange-900 text-xs  hover:text-orange-600 transition-colors duration-300">
                  {service.business_name}
                </div>
              </Link>
            </h2>
            <p className="font-medium text-sm">{service.service_description}</p>
            <p className="font-semibold">{service.service_rate}</p>

            <div className="card-actions justify-end">
              <Link
                to={`/services/${service._id}`}
                className="btn btn-outline mx-3 border-b-4 border-orange-400 bg-slate-100"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Business_Services;
