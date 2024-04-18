import { Link } from "react-router-dom";

const Title = ({ service }) => {
  return (
    <div className="flex items-center">
      <p className="flex-1 lg:text-4xl font-semibold p-4">
        {service.service_name}
      </p>
      <div>
        <Link to={`/business/${service._id}`} className="flex gap-1 mr-4  p-4 items-center hover:scale-110 transition-transform duration-300">
          <div className="avatar">
            <div className="w-10 lg:w-16 rounded-full ">
              <img src={service.logo_link} alt="Business Logo" />
            </div>
          </div>
          <div className=" font-bold text-orange-900 text-sm  hover:text-orange-600 transition-colors duration-300">
            {service.business_name}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Title;
