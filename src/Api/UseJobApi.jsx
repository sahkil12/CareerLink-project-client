import useAxiosSecure from "../hooks/useAxiosSecure";

const UseJobApi = () => {

    const axiosSecure = useAxiosSecure()
    
    const myPostedJobsPromise = email =>{
        return axiosSecure.get(`myPostedJobs?email=${email}`).then(res => res.data)
    }
    return {
        myPostedJobsPromise
    }
};

export default UseJobApi;