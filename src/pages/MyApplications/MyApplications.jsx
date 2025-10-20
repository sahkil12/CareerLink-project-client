import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import Loader from "../../Components/Loader";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../Api/applicationPromise";
import MyState from "./MyState";

const MyApplications = () => {
    const { user } = useAuth()  
    return (
        <div className="py-10">
            <Suspense fallback={<Loader></Loader>}>
                <MyState user={user} 
             myApplicationPromise={myApplicationPromise(user.email)}>
             </MyState>
            </Suspense>
            <Suspense fallback={<Loader></Loader>}>
            <ApplicationList 
            myApplicationPromise={myApplicationPromise(user.email)}
            ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;