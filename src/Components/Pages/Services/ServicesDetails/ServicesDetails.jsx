import { useLoaderData, useParams } from "react-router-dom";



const ServicesDetails = () => {
  const allServices = useLoaderData();
  const { id } = useParams();

  const service = allServices.find((services) => services._id == id);

  const {
    business_email,
    business_name,
    logo_link,
    pic_link_1,
    pic_link_2,
    pic_link_3,
    service_name,
    service_rate,
    service_description,
    business_type,
  } = service;

  return <div>SS</div>;
};

export default ServicesDetails;
