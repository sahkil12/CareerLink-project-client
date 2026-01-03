import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: 'https://career-link-project-server.vercel.app'
})

const useAxiosSecure = () => {

    const { user, logoutUser } = useAuth()

    axiosInstance.interceptors.request.use( config =>{
         if(user?.accessToken){
             config.headers.authorization = `Bearer ${user.accessToken}`
        }
        return config
    })

    axiosInstance.interceptors.response.use(response =>{
        return response
    },(error)=>{
        if(error.status === 401 || error.status === 403){
            logoutUser()
            .then(()=> toast.error('log out successfully for bad auth'))
            .catch(err =>{
                console.log(err);
            })
        }
        return Promise.reject(error)
    } )

    return axiosInstance
};

export default useAxiosSecure;