import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const servicePerPage = 9;

  console.log(services.length);

  const numberOfPages = Math.ceil(count / servicePerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?page=${currentPage}&size=${servicePerPage}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));

    setLoading(true);
  }, [currentPage, servicePerPage]);

  useEffect(() => {
    fetch(`http://localhost:5000/all_services`)
      .then((res) => res.json())
      .then((data) => setCount(data.length));
    setLoading(true);
  }, []);

  console.log(count);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      {loading ? (
        <>
          <h2 className="p-4 text-xl font-semibold">{count} Services</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-4">
            {services.map((service) => (
              <div key={service._id} className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {service.service_name}
                    <Link to={`/business/${service._id}`} className="flex">
                      <div className="avatar">
                        <div className="w-8 rounded">
                          <img
                            src={service.logo_link}
                            alt="Business Logo"
                          />
                        </div>
                      </div>
                      <div className="badge border-none font-bold text-orange-900 text-xs">
                        {service.business_name}
                      </div>
                    </Link>
                  </h2>
                  <p className="font-medium text-sm">
                    {service.service_description}
                  </p>
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
          <div className="text-center m-10">
            <button
              className="btn  bg-slate-400 rounded-r-none"
              onClick={handlePrev}
            >
              Prev
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`btn btn-square  border-none text-base m-1 ${
                  currentPage === page
                    ? "bg-orange-500 underline"
                    : "bg-transparent"
                } `}
              >
                {page}
              </button>
            ))}
            <button
              className="btn  bg-slate-400 rounded-l-none"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className=" p-80 ml-64 ">
          <span className=" loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default AllServices;
