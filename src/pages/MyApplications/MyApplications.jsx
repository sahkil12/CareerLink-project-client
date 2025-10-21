import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import Loader from "../../Components/Loader";
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../Api/applicationPromise";
import MyState from "./MyState";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div className="py-10">
      <div className="max-w-5xl px-3 text-xl font-semibold  mx-auto">
        <Link to={"/"} className="flex items-center gap-2">
          {" "}
          <FaArrowLeftLong></FaArrowLeftLong> Back
        </Link>
      </div>
      <Suspense fallback={<Loader></Loader>}>
        <MyState
          user={user}
          myApplicationPromise={myApplicationPromise(user.email)}
        ></MyState>
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
