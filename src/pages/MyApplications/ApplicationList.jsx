import { useEffect, useState } from "react";
import ApplicationTable from "./ApplicationTable";
import { useNavigation } from "react-router";
import Loader from "../../Components/Loader";

const ApplicationList = ({ myApplicationPromise }) => {
  const [myApplications, setMyApplications] = useState([]);
      const navigation = useNavigation()

  useEffect(() => {
    myApplicationPromise.then((data) => setMyApplications(data));
  }, [myApplicationPromise]);
  
  if(navigation.state == 'loading'){
    return <Loader></Loader>
  }
  return (
    <div className="md:w-10/12 mx-auto py-20">
      <div className="overflow-x-auto">
        <table className="table text-base">
          {/* head */}
          <thead className="text-base">
            <tr>
              <th>No</th>
              <th>Company</th>
              <th>Category</th>
              <th>Job Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myApplications.map((application, idx) => (
              <ApplicationTable
                key={application._id}
                idx={idx}
                myApplications={myApplications}
                setMyApplications={setMyApplications}
                application={application}
              ></ApplicationTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
