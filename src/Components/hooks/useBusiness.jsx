import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBusiness = () => {
    const axiosPublic = useAxiosPublic()

    const { data: business = [], isLoading, refetch } = useQuery({
        queryKey: ["section"],
        queryFn: async () => {
          const res = await axiosPublic.get("/business");
          return res.data;
        },
      });
 
      
    return [business, isLoading , refetch]
};

export default useBusiness;