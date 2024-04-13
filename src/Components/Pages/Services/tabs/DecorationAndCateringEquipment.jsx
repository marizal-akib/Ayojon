import { useEffect, useState } from "react";

const DecorationAndCateringEquipment = () => {
    //   const [jobs, setJobs] = useState([]);
    const [count, setCount] = useState(0);
    //   const [currentPage, setCurrentPage] = useState(0);
      const [loading, setLoading] = useState(false);
    //   const servicePerPage = 9;
      const business_type = "Decoration And Catering Equipment";
    //   console.log(jobs.length);
    
    //   const numberOfPages = Math.ceil(count / servicePerPage);
    
    //   const pages = [...Array(numberOfPages).keys()];
    
    //   useEffect(() => {
    //     fetch(
    //       axiosPublic`/services?page=${currentPage}&size=${servicePerPage}&business_type=${business_type}`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => setJobs(data));
    
    //     setLoading(true);
    //   }, [currentPage, servicePerPage]);
    
      useEffect(() => {
        fetch(`http://localhost:5000/all_services?&business_type=${business_type}`)
          .then((res) => res.json())
          .then((data) => setCount(data.length));
        setLoading(true);
      }, []);
    
      console.log(count);
    
    //   const handlePrev = () => {
    //     if (currentPage > 0) {
    //       setCurrentPage(currentPage - 1);
    //     }
    //   };
    //   const handleNext = () => {
    //     if (currentPage < pages.length - 1) {
    //       setCurrentPage(currentPage + 1);
    //     }
    //   };
      return <div className="max-w-7xl mx-auto">
        {
            loading ? <>
            <h2 className="p-4 text-xl font-semibold">{count}</h2>
            </>:<p>Loading..</p>
        }
        
      </div>;
    };

export default DecorationAndCateringEquipment;