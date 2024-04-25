import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser= () => {
    const {user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data : isUser, isPending: isUserLoading} = useQuery({
        queryKey: [user?.email, 'isUser'],
        enabled: !loading,
        queryFn: async() => {
            console.log('asking or checking is User', user.displayName);
            const res = await axiosSecure.get(`/users/user/${user.email}`);
            console.log(res.data);
            return res.data?.user;
        }
    })
    return [isUser,isUserLoading]
};

export default useUser;