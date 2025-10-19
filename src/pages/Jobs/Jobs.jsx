import { useLoaderData } from "react-router";
import JobCard from "../Home/JobCard";
import { IoMdSearch } from "react-icons/io";

const Jobs = () => {
  const jobs = useLoaderData();
  return (
    <div className="py-10 md:w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center text-center gap-6 p-1">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Find your <span className="text-primary">Next</span> job{" "}
        </h2>
        <p className="text-base md:text-lg font-medium opacity-90 text-gray-700">
          Browse thousands of opportunities and apply with one click.
        </p>

        <label className="input border w-11/12 md:w-3/6 mx-auto input-xl focus:outline-none focus:border-none bg-base-200 px-4 ">
          <input
            type="text"
            className="text-lg"
            placeholder="Find Your opportunities Here"
          />
          <span className="btn btn-primary text-base ">
            <IoMdSearch size={18} />
            Search
          </span>
        </label>
      </div>
      {/* card */}
      <div className="py-20">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-2">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Jobs;
