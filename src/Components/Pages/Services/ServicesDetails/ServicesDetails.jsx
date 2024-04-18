import { useLoaderData, useParams } from "react-router-dom";
import Title from "./ServicesComponents/Title";
import ServicesBanner from "./ServicesComponents/ServicesBanner";
import Services_Detail from "./ServicesComponents/Services_Detail";

const ServicesDetails = () => {
  const allServices = useLoaderData();
  const { id } = useParams();

  const service = allServices.find((services) => services._id == id);

  
  return (
    <div>
      <Title service={service}></Title>
      <ServicesBanner service={service}></ServicesBanner>
      <Services_Detail service={service}></Services_Detail>

    </div>
  );
};

export default ServicesDetails;
