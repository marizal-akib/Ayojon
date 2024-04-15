import { useEffect, useState } from "react";
import Business_Services from "./Business_Services";
import { FaServicestack } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { BsFileImage } from "react-icons/bs";

const Tab = ({ allServices, email }) => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("tab1");

  // Function to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const services = allServices.filter(
    (services) => services.business_email == email
  );

  console.log(services);
  useEffect(() => {
    if (services) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [services]);

  return (
    <div className="container max-w-7xl mx-auto">
      {/* Tab navigation */}
      <div className="flex border-b w-full mx-auto">
        <button
          className={`flex-grow py-2 px-4 text-sm font-medium text-center ${
            activeTab === "tab1"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center text-lg justify-center">
              <FaServicestack />
            </p>
            <p className="text-xs">Services</p>
          </div>
        </button>
        <button
          className={`flex-grow py-2 px-4 text-sm font-medium text-center ${
            activeTab === "tab2"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          <div className="flex flex-col items-center justify-center">
            <p className="flex items-center text-lg justify-center">
              <IoMdImages />
            </p>
            <p className="text-xs">Pictures</p>
          </div>
        </button>
        <button
          className={`flex-grow py-2 px-4 text-sm font-medium text-center ${
            activeTab === "tab3"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => handleTabClick("tab3")}
        >
         <div className="flex flex-col items-center justify-center">
            <p className="flex items-center text-lg justify-center">
            <BsFileImage />
            </p>
            <p className="text-xs">Video Reels</p>
          </div>
        </button>
      </div>

      {/* Content area for tabs */}
      <div className="p-4">
        {activeTab === "tab1" && (
          <div>
            {" "}
            {!loading ? (
              services.length > 0 ? (
                <Business_Services services={services}></Business_Services>
              ) : (
                <div className="flex items-center justify-center h-screen">
                  <p className="text-lg text-gray-600">No services available</p>
                </div>
              )
            ) : (
              <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
              </div>
            )}
          </div>
        )}
        {activeTab === "tab2" && <div>Content of Tab 2</div>}
        {activeTab === "tab3" && <div>Content of Tab 3</div>}
      </div>
    </div>
  );
};

export default Tab;
