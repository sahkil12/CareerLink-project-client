import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeftLong } from "react-icons/fa6";

const ApplyJobs = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  console.log(user);
  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const applyDetails = Object.fromEntries(formData.entries());
    const application = {
      jobId,
      ...applyDetails,
    };
    axios
      .post("http://localhost:5000/application", application)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your applicant has bin submitted",
            showConfirmButton: false,
            timer: 1300,
          });
          form.reset()
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <div className="max-w-3xl px-5 py-10 text-xl font-semibold  mx-auto">
        <Link to={`/jobDetails/${jobId}`} className="flex items-center gap-2"> <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
    </div>
      <section className="p-5">
        <form
          onSubmit={handleApply}
          className="container w-full max-w-3xl p-8 md:p-12 mx-auto space-y-6 rounded-md shadow bg-gray-50"
        >
          <h2 className="w-full text-center text-2xl md:text-3xl text-primary/90 border-b pb-4 border-neutral-300 font-bold leading-tight mb-8">
            Apply for this job with your details
          </h2>
          {/* name */}
          <div>
            <label className="block mb-1 ml-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full px-3 py-4 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            />
          </div>
          {/* email */}
          <div>
            <label className="block mb-1 ml-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              defaultValue={user.email}
              required=""
              className="block w-full px-3 py-4 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            />
          </div>
          {/* address */}
          <div>
            <label className="block mb-1 ml-1">Address</label>
            <input
              name="address"
              type="text"
              placeholder="Your present address"
              required=""
              className="block w-full px-3 py-4 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            />
          </div>
          {/* github link */}
          <div>
            <label className="block mb-1 ml-1">Github Account</label>
            <input
              name="github"
              type="url"
              placeholder="Your github account link"
              required=""
              className="block w-full px-3 py-4 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            />
          </div>
          {/* linkedin */}
          <div>
            <label className="block mb-1 ml-1">Linkedin Account</label>
            <input
              name="linkedin"
              type="url"
              placeholder="Your linkedin account link"
              required=""
              className="block w-full px-3 py-4 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            />
          </div>
          {/* details */}
          <div>
            <label className="block mb-1 ml-1">Your Details</label>
            <textarea
              name="message"
              type="text"
              placeholder="Type short details about you..."
              className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"
            ></textarea>
          </div>
          {/* button */}
          <div>
            <button className="w-full px-4 py-3 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-primary focus:ring-sky-600 hover:ring-sky-600 text-gray-50">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ApplyJobs;
