const Business_Info = ({ business }) => {
  return (
    <>
    <div className="container mx-auto min-h-12 grid grid-cols-3 gap-4 pt-10">
      <div className="col-span-1  p-4 lg:pl-14">
        <p className="text-2xl">About</p>
      </div>

      <div className="col-span-2">
        <p className="text-lg">{business.about_info}</p>
      </div>
    </div>
    <div className="container mx-auto min-h-12 grid grid-cols-3 gap-4 pt-10">
      <div className="col-span-1  p-4 lg:pl-14">
        <p className="text-2xl">Specialty</p>
      </div>

      <div className="col-span-2">
        <p className="text-lg">{business.business_type}</p>
      </div>
    </div>
    </>
  );
};

export default Business_Info;
