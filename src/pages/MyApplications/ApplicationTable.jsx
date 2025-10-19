const ApplicationTable = ({ application, idx }) => {
  const deleteApplication = (id) => {
    console.log(id);
  };
  console.log(application);
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
