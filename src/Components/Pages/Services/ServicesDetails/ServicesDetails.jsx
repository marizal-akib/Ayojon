import { useLoaderData, useParams } from "react-router-dom";
import useBusiness from "../../../hooks/useBusiness";


const ServicesDetails = () => {
  const allServices = useLoaderData();
  const { id } = useParams();
  const [businesses] = useBusiness();
  console.log(businesses);

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
