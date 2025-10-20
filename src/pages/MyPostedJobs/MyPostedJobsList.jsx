import { useEffect, useState } from "react";
import { Link } from "react-router";

const MyPostedJobsList = ({ myPostedJobsPromise }) => {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    myPostedJobsPromise.then((data) => {
      setMyJobs(data);
    });
  }, [myPostedJobsPromise]);
  console.log(myJobs);
  return (
    <div className="md:w-10/12 mx-auto py-20 p-2">
      <h2>my post {myJobs.length}</h2>
      <div className="overflow-x-auto my-10 ">
        <table className="table border-2 text-base  border-neutral-200">
          {/* head */}
          <thead className="text-lg bg-blue-100">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Deadline</th>
              <th>View Job Application</th>
            </tr>
          </thead>
          <tbody>
            {
                myJobs.map((job, index) => <tr key={job._id} className="hover:bg-gray-100">
              <th>{index + 1 } </th>
              <td>{job.title}</td>
              <td>{job.applicationDeadline}</td>
              <td>
                <Link className="hover:underline font-medium hover:text-gray-700" to={`/applications/${job._id}`}>View Application</Link>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
