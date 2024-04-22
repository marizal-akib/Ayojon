import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser= () => {
    // const token = localStorage.getItem('access-token')
    const {user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data : isUser, isPending: isUserLoading} = useQuery({
        queryKey: [user?.email, 'isUser'],
        enabled: !loading,
        queryFn: async() => {
            console.log('asking or checking is User', user.displayName);
            const res = await axiosSecure.get(`/users/User/${user.email}`);
            console.log(res.data);
            return res.data?.User;
        }
    })
    return [isUser,isUserLoading]
};

export default useUser;