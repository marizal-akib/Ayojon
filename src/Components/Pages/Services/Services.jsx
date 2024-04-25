import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllServices from "./tabs/AllServices";
import Catering from "./tabs/Catering";
import PhotoAndVideography from "./tabs/PhotoAndVideography";
import MusicAndVisuals from "./tabs/MusicAndVisuals";
import DecorationAndCateringEquipment from "./tabs/DecorationAndCateringEquipment";
import Venues from "./tabs/Venues";
import MakeupAndFashion from "./tabs/MakeupAndFashion";
import Transportation from "./tabs/Transportation";
import BarAndDrinks from "./tabs/BarAndDrinks";
import DissertsAndSnacks from "./tabs/DessertsAndSnacks";
import SecurityService from "./tabs/SecurityService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const servicePerPage = 9;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // Reset to the first page when search changes
  };

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = services.filter(
        (el) =>
          el.service_name.toLowerCase().includes(lowercasedFilter) ||
          el.service_description.toLowerCase().includes(lowercasedFilter) ||
          el.business_name.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredServices(filteredData);
    } else {
      setFilteredServices([]);
    }
  }, [searchTerm, services]);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(filteredServices.length / servicePerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pages = [
    ...Array(Math.ceil(filteredServices.length / servicePerPage)).keys(),
  ];

  return (
    <div>
      <div className="flex justify-end items-center w-full p-2 ">
        <label className="input input-bordered flex items-center max-w-sm ">
          <input
            type="text"
            className="grow"
            placeholder="Search services..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="max-w-7xl mx-auto  ">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="loading loading-infinity loading-lg"></div>
          </div>
        ) : filteredServices.length > 0 ? (
          <>
            <h2 className="p-4 text-xl font-semibold">
              {filteredServices.length} Services
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-10 lg:pt-3">
              {filteredServices
                .slice(
                  currentPage * servicePerPage,
                  (currentPage + 1) * servicePerPage
                )
                .map((service, index) => (
                  <div
                    key={index}
                    className="card bg-base-100 shadow-xl hover:scale-105 transition-transform duration-700"
                  >
                    <div className="card-body">
                      <h2 className="card-title">
                        {service.service_name}
                        <Link
                          to={`/business/${service._id}`}
                          className="flex px-2"
                        >
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <img
                                src={service.logo_link}
                                alt="Business Logo"
                              />
                            </div>
                          </div>
                          <div className="badge border-none font-bold text-orange-900 text-xs hover:text-orange-600 transition-colors duration-300">
                            {service.business_name}
                          </div>
                        </Link>
                      </h2>
                      <p>{service.service_description}</p>
                      <p>{service.service_rate}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div
              className={`text-center pb-4 mt-5 ${
                pages.length <= 1 ? "hidden" : ""
              }`}
            >
              <button
                className="btn bg-slate-400 rounded-r-none"
                onClick={handlePrev}
              >
                Prev
              </button>
              {pages.map((page) => (
                <button
                  key={page}
                  className={`btn btn-square border-none text-base m-1 ${
                    currentPage === page
                      ? "bg-orange-500 underline"
                      : "bg-transparent"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page + 1}
                </button>
              ))}
              <button
                className="btn bg-slate-400 rounded-l-none"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        ) : searchTerm.trim() === "" ? (
          <div>
            <Tabs
              className="bg-slate-100"
              defaultIndex={1}
              onSelect={(index) => console.log(index)}
            >
              <TabList className="font-semibold text-xs lg:text-sm justify-between absolute md:sticky md:top-16 z-50 bg-slate-400">
                <Tab>All Services</Tab>
                <Tab>Catering</Tab>
                <Tab>Photo & Videography</Tab>
                <Tab>Music & Visuals</Tab>
                <Tab>Decoration & Catering Equipment</Tab>
                <Tab>Security Service</Tab>
                <Tab>Venues</Tab>
                <Tab>Makeup & Fashion</Tab>
                <Tab>Transportation</Tab>
                <Tab>Bar & Drinks</Tab>
                <Tab>Desserts And Snacks</Tab>
              </TabList>

              <TabPanel>
                <AllServices></AllServices>
              </TabPanel>
              <TabPanel>
                <Catering></Catering>
              </TabPanel>
              <TabPanel>
                <PhotoAndVideography></PhotoAndVideography>
              </TabPanel>
              <TabPanel>
                <MusicAndVisuals></MusicAndVisuals>
              </TabPanel>
              <TabPanel>
                <DecorationAndCateringEquipment></DecorationAndCateringEquipment>
              </TabPanel>
              <TabPanel>
                <SecurityService></SecurityService>
              </TabPanel>
              <TabPanel>
                <Venues></Venues>
              </TabPanel>
              <TabPanel>
                <MakeupAndFashion></MakeupAndFashion>
              </TabPanel>
              <TabPanel>
                <Transportation></Transportation>
              </TabPanel>
              <TabPanel>
                <BarAndDrinks></BarAndDrinks>
              </TabPanel>
              <TabPanel>
                <DissertsAndSnacks></DissertsAndSnacks>
              </TabPanel>
            </Tabs>
          </div>
        ) : (
          <div className="text-center pt-5">No services found.</div>
        )}
      </div>
    </div>
  );
};

export default Services;
