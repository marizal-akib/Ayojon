const Services_Detail = ({ service }) => {
  return (
    <>
      <div className="container mx-auto min-h-12 grid grid-cols-3 gap-4 pt-10">
        <div className="col-span-1  p-4 lg:pl-14">
          <p className="text-2xl">Description</p>
        </div>

        <div className="col-span-2">
          <p className="text-lg">{service.service_description}</p>
        </div>
      </div>
      <div className="text-end">
        <p className="text-2xl font-semibold pr-4">{service.service_rate}</p>
      </div>
    </>
  );
};

export default Services_Detail;
