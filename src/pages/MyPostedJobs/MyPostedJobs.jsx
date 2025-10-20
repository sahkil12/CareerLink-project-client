import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";
import Loader from "../../Components/Loader";
import { myPostedJobsPromise } from "../../Api/myPostedJobsPromise";

const MyPostedJobs = () => {
    const { user } = useAuth()
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