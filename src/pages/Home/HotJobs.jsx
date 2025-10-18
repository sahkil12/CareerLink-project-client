import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const HotJobs = ({jobsPromise}) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    jobsPromise.then(data => {
      setJobs(data);
    });
  }, [jobsPromise]);

    return (
        <div className="py-10">
            <div className="my-10 px-2 flex flex-col gap-5 items-center text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Jobs of the day</h2>
                <p className="text-lg opacity-85 text-gray-600">Search And Find the right candidate or company for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-2">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;