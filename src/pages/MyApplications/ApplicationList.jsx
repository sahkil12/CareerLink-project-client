import { useEffect, useState } from "react";
import ApplicationTable from "./ApplicationTable";

const ApplicationList = ({ myApplicationPromise }) => {
  const [myApplications, setMyApplications] = useState([]);

  useEffect(() => {
    myApplicationPromise.then((data) => setMyApplications(data));
  }, [myApplicationPromise]);

  return (
    <div className="md:w-10/12 mx-auto py-20">
      <div className="overflow-x-auto">
        <table className="table text-base">
          {/* head */}
          <thead>
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
