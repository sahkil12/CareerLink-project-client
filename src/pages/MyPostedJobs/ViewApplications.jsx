import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  // const { job_id } = useParams();
  const jobApplicants = useLoaderData([]);
  const handleStatusChange = (e, app_id) => {
    // data updated with axios
    axios
      .patch(`https://career-link-project-server.vercel.app/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Application status updated ",
            showConfirmButton: false,
            timer: 1300,
          });
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="md:w-10/12 mx-auto p-2 ">
      <div className="max-w-5xl px-3 pt-5 text-xl font-semibold  mx-auto">
              <Link to={'/myPostedJobs'} className="flex items-center gap-2"> <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
          </div>
      <h2 className="text-3xl md:text-4xl font-medium text-center py-16 ">
        <span className="text-primary font-bold ">{jobApplicants.length}</span>{" "}
        Applicant apply for this Job
      </h2>

        {jobApplicants.length < 1 ? <div className="flex flex-col justify-center items-center">
            <p className="text-center text-3xl text-gray-600 font-semibold my-10">No Applicant Find Here</p>
        </div> :
         <div className="overflow-x-auto border-2 border-neutral-300 my-10 ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200 md:text-base">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobApplicants.map((application, index) => (
              <tr key={application._id} className="">
                <th>{index + 1}</th>
                <td>{application.name}</td>
                <td>{application.email}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select select-md bg-blue-50"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Under Review</option>
                    <option>Call For Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                    <option>Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        }
    </div>
  );
};

export default ViewApplications;
