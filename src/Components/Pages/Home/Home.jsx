import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Banner from "./Banner/Banner";


const Home = () => {
    const axiosPublic = useAxiosPublic();
    const { data: business = [] } = useQuery({
      queryKey: ["section"],
      queryFn: async () => {
        const res = await axiosPublic.get("/business");
        return res.data;
      },
    });
    console.log(business);
    return (
        <div>
            <Banner></Banner>
        
        </div>
    );
};

export default Home;