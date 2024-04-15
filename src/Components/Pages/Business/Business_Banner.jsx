const Business_Banner = ({ business }) => {

  return <div className="container max-w-7xl mx-auto">
  <div className="content flex flex-col items-center justify-center h-full">
      <img className="cover max-h-96 w-full" src={business.cover_link} alt="" />
      <div className="avatar flex items-center justify-center w-full">
          <div className="avatar-img w-1/4 h-1/4 relative bottom-14 sm:bottom-20 md:bottom-36 rounded-full">
              <img src={business.logo_link} alt="Business Logo" className="w-full h-full object-cover rounded-full"/>
          </div>
      </div>
      <p className="text-3xl text-black lg:mt-[-9rem] mt-[-3rem]">{business.business_name}</p>
  </div>
</div>
};

export default Business_Banner;
