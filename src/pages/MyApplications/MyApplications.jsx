import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import Loader from "../../Components/Loader";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../Api/applicationPromise";

const MyApplications = () => {
    const { user } = useAuth()
    return (
        <div>
            <Suspense fallback={<Loader></Loader>}>
            <ApplicationList 
            myApplicationPromise={myApplicationPromise(user.email)}
            ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;