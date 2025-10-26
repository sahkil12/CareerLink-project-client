import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";
import Loader from "../../Components/Loader";
import UseJobApi from "../../Api/UseJobApi";

const MyPostedJobs = () => {
    const { user } = useAuth()
    const { myPostedJobsPromise } = UseJobApi()
    return (
        <div>
          <Suspense fallback={<Loader></Loader>}>
              <MyPostedJobsList
               myPostedJobsPromise={myPostedJobsPromise(user.email)}>
              </MyPostedJobsList>
          </Suspense>
        </div>
    );
};

export default MyPostedJobs;