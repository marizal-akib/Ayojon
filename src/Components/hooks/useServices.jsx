import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useServices = () => {
    const axiosPublic = useAxiosPublic()

    const { data: services = [],  isLoading, refetch } = useQuery({
        queryKey: ["section"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/services`);
          return res.data;
        },
      });
 
      
    return [services, isLoading , refetch]
};

export default useServices;