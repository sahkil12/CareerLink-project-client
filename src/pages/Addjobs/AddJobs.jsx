import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJobs = () => {
  const { user } = useAuth();
  const handleAddJobForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addJobData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = addJobData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = addJobData.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.responsibilities = addJobData.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.status = "active";
    // post data
    axios
      .post("http://localhost:5000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Jobs published successfully",
            showConfirmButton: false,
            timer: 1300,
          });
          form.reset();
        }
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Something wrong please try again!");
      });
  };

  return (
    <div>
      <div className="py-20 px-2">
        <div className="p-4 border-2 rounded-lg bg-base-100 border-gray-300 shadow-xl md:p-8 md:w-11/12 lg:w-10/12 mx-auto ">
          <h2 className="mb-10 mt-6 rail text-center font-bold text-2xl sm:text-3xl flex justify-center items-center gap-3">
            <MdOutlinePlaylistAddCircle size={45} className="text-primary" />
            <span className="text-primary font-extrabold">Add</span> Your Job
            Here
          </h2>
          <section>
            {/* form  */}
            <form onSubmit={handleAddJobForm} className="">
              <fieldset className="flex flex-col gap-2">
                <label className="label font-medium ">Job Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                  placeholder="Enter Job Title"
                />
              </fieldset>
              {/* form with 2 input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                {/* company name */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label font-medium">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                    placeholder="Company Name"
                  />
                </fieldset>
                {/* location */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label font-medium">Location</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                    placeholder="Enter Location"
                  />
                </fieldset>
                {/* hr_name */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label font-medium">Company Hr Name</label>
                  <input
                    type="text"
                    name="hr_name"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                    placeholder="Company Hr Name"
                  />
                </fieldset>
                {/* hr_email */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label font-medium">Hr Email</label>
                  <input
                    defaultValue={user.email}
                    type="email"
                    name="hr_email"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                    placeholder="Company Hr email"
                  />
                </fieldset>
                {/* category */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label text-base font-medium">
                    Job Category
                  </label>
                  <select
                    defaultValue="Choice Job Category"
                    name="category"
                    required
                    className="select w-full border-2 text-base select-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                  >
                    <option disabled={true} className="text-gray-500">
                      Choice Your Category
                    </option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                    <option>Management</option>
                    <option>Data Science</option>
                    <option>Design</option>
                  </select>
                </fieldset>
                {/* job type */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label text-base font-medium">
                    Job Types
                  </label>
                  <select
                    defaultValue="Choice Job Types"
                    name="jobType"
                    required
                    className="select w-full border-2 text-base select-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                  >
                    <option disabled={true} className="text-gray-500">
                      Choice Your Job Type
                    </option>
                    <option>Hybrid</option>
                    <option>Part-Time</option>
                    <option>Full-time</option>
                    <option>Intern</option>
                    <option>Remote</option>
                  </select>
                </fieldset>
                {/* logo url */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label text-base font-medium">
                    Logo URL
                  </label>
                  <input
                    type="url"
                    name="company_logo"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                    placeholder="Company Logo"
                  />
                </fieldset>
                {/* deadline */}
                <fieldset className="flex flex-col gap-2">
                  <label className="label text-base font-medium ">
                    Deadline
                  </label>
                  <input
                    type="date"
                    required
                    name="applicationDeadline"
                    className="input text-base  w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                  />
                </fieldset>
              </div>
              {/* salary range */}
              <div className="flex flex-col md:flex-row gap-3 pb-4 flex-wrap">
                <fieldset className="flex flex-col gap-2 flex-1">
                  <label className="label text-base font-medium">
                    Min-salary range
                  </label>
                  <input
                    type="number"
                    name="min"
                    required
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                    placeholder="min salary range"
                  />
                </fieldset>
                <fieldset className="flex flex-col gap-2 flex-1">
                  <label className="label text-base font-medium">
                    max-salary range
                  </label>
                  <input
                    type="number"
                    required
                    name="max"
                    className="input text-base w-full border-2 py-6 border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                    placeholder="max salary range"
                  />
                </fieldset>
                <fieldset className="flex flex-col gap-2 flex-1">
                  <label className="label text-base font-medium">
                    Currency
                  </label>
                  <select
                    defaultValue="Select Your Currency"
                    name="currency"
                    required
                    className="select w-full border-2 text-base select-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600"
                  >
                    <option disabled={true} className="text-gray-500">
                      Select Your Currency
                    </option>
                    <option>BDT</option>
                    <option>USD</option>
                    <option>Eu</option>
                    <option>USA</option>
                  </select>
                </fieldset>
              </div>
              {/* requirements */}
              <div className="flex flex-col md:flex-row gap-4">
                <fieldset className="flex flex-col gap-2 flex-1">
                  <label className="label text-base font-medium ">
                    Job Requirements
                  </label>
                  <textarea
                    name="requirements"
                    required
                    className="textarea w-full border-2 text-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                    placeholder="Job Requirements (separate by comma)"
                  ></textarea>
                </fieldset>
                {/* responsibilities */}
                <fieldset className="flex flex-col gap-2 flex-1">
                  <label className="label text-base font-medium ">
                    Responsibilities
                  </label>
                  <textarea
                    name="responsibilities"
                    required
                    className="textarea w-full border-2 text-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                    placeholder="Responsibilities (separate by comma)"
                  ></textarea>
                </fieldset>
              </div>
              {/* single field */}
              <fieldset className="flex flex-col gap-2">
                <label className="label text-base font-medium ">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  className="textarea w-full border-2 text-lg border-gray-200 bg-gray-100 focus:outline-none focus:border-gray-600 "
                  placeholder="Type Your Description"
                ></textarea>
              </fieldset>
              {/* button */}
              <button className="mt-6 rounded-md  w-full py-3 bg-primary/90 text-xl font-medium text-white">
                Add Jobs
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
