import { useLoaderData, useParams } from "react-router-dom";
import useBusiness from "../../hooks/useBusiness";
import Business_Banner from "./Business_Banner";
import { useEffect, useState } from "react";
import Business_Info from "./Business_Info";
import Tab from "./Tab/Tab";


const Business = () => {
  const allServices = useLoaderData();
  const { id } = useParams();
  const service = allServices.find((services) => services._id == id);
  const { business_email: email } = service;


  const [businesses] = useBusiness();
  const [business] = businesses.filter(
    (business) => business.business_email == email
  );
  console.log(business);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    if (business) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [business]);


  return (
    <>
      {!loading ? (
        <>
          <Business_Banner business={business}></Business_Banner>
          <Business_Info business={business}></Business_Info>
          <Tab allServices={allServices} email={email}></Tab>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="loading loading-infinity loading-lg"></div>
        </div>
      )}
    </>
  );
};

export default Business;
