import axios from "axios";
import Swal from "sweetalert2";

const ApplicationTable = ({ application, idx, setMyApplications, myApplications }) => {


  const deleteApplication = (id) => {
        Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result =>{
      if(result.isConfirmed){
         axios.delete(`http://localhost:5000/applications/${id}`)
         .then(res =>{
          if(res.data.deletedCount > 0){
               Swal.fire("Your application has been deleted." );
               const remaining = myApplications.filter(app => app._id !== id)
               setMyApplications(remaining)
          }
         })
         .catch(error =>{
          // console.log(error);
         })
      }
    })
  };

  
  return (
    <tr>
      <th>
        <label>{idx + 1}</label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={application.company_logo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{application.company}</div>
            <div className="text-sm opacity-50">
              {application.applicationDeadline}
            </div>
          </div>
        </div>
      </td>
      <td>{application.title}</td>
      <td>{application.jobType}</td>
      <th>
        <button
          onClick={() => deleteApplication(application._id)}
          className="btn btn-sm btn-error text-black"
        >
          delete
        </button>
      </th>
    </tr>
  );
};

export default ApplicationTable;
