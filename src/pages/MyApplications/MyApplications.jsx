import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import Loader from "../../Components/Loader";
import useAuth from "../../hooks/useAuth";
import MyState from "./MyState";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import UserApplicationApi from "../../Api/UserApplicationApi";

const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationPromise } = UserApplicationApi()
  return (
    <div className="py-10">
      <div className="max-w-5xl px-3 text-xl font-semibold  mx-auto">
        <Link to={"/"} className="flex items-center gap-2">
          {" "}
          <FaArrowLeftLong></FaArrowLeftLong> Back
        </Link>
      </div>
        <MyState
          user={user}
        ></MyState>
      <Suspense fallback={<Loader></Loader>}>
        <ApplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
