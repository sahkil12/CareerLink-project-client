import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
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
      <div className="max-w-5xl px-3 pb-4 text-xl font-semibold  mx-auto">
              <Link to={'/'} className="flex items-center gap-2"> <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
          </div>
         {
        myJobs.length < 1 ? <div className="flex flex-col items-center justify-center">
            <p className="text-3xl my-10 font-medium text-gray-600">You don't Post any jobs yet</p>
            <Link className="btn btn-primary px-7 py-6 text-base" to={'/addJobs'}>Add Jobs</Link>
        </div> : 
        
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
        }
    </div>
  );
};

export default MyPostedJobsList;
