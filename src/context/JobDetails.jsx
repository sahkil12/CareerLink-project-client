import { Link, useLoaderData } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { MdEmail, MdPerson } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    company_logo,
    location,
    applicationDeadline,
    jobType,
    category,
    description,
    requirements,
    responsibilities,
    salaryRange,
    hr_email,
    hr_name,
  } = job;

  return (
   <div className="">
    <div className="max-w-5xl px-5 py-10 text-xl font-semibold  mx-auto">
        <Link to={'/'} className="flex items-center gap-2"> <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
    </div>
     <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-5 border-b-2 border-neutral-600 pb-6">
        <img src={company_logo} alt={company} className="w-16 h-16 md:w-24 md:h-24 rounded-md" />
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h1>
          <h3 className="text-base sm:text-lg text-gray-600">{company}</h3>
          <p className="flex items-center gap-1 text-gray-500">
            <CiLocationOn size={20} color="black"/> {location}
          </p>
        </div>
      </div>
      {/* Job Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Job Information</h2>
          <p className="flex items-center gap-2 text-gray-600">
            <PiSuitcaseSimpleLight /> <span>{jobType}</span>
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <IoIosTimer /> <span>Deadline: {applicationDeadline}</span>
          </p>
          <p className="text-gray-600">Category: {category}</p>
          <p className="text-gray-600 font-semibold">
            Salary:{" "}
            <span className="text-blue-600">
              {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">HR Contact</h2>
          <p className="flex items-center gap-2 text-gray-600">
            <MdPerson /> {hr_name}
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <MdEmail /> {hr_email}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Job Description</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Requirements</h2>
        <div className="flex gap-2 flex-wrap mt-3">
          {requirements.map((req, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-blue-100 text-blue-600 rounded-md text-sm"
            >
              {req}
            </span>
          ))}
        </div>
      </div>
      {/* Responsibilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Responsibilities</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600 text-lg space-y-1">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="mt-10">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow">
          Apply Now
        </button>
      </div>
    </div>
   </div>
  );
};

export default JobDetails;
