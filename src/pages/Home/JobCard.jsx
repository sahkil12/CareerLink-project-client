import { CiLocationOn } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { Link } from "react-router";

const JobCard = ({job}) => {
    const {company_logo, company, location, applicationDeadline, jobType, description, requirements, salaryRange, _id} =job
    return (
        <div className="hover:-translate-y-2 duration-300 hover:border-blue-300 p-6 border-2 border-neutral-300 rounded-lg flex flex-col h-full">
            <div className="flex flex-col gap-6 flex-grow">
                {/* header */}
                <div className="flex items-center gap-4">
                    <img src={company_logo} className="w-14 h-14 " alt="" />
                    <div className="flex flex-col gap-2 ">
                        <h2 className="font-semibold text-xl text-gray-700">{company}</h2>
                        <h4 className="flex gap-1 text-gray-500 font-medium items-center"><CiLocationOn></CiLocationOn> {location}</h4>
                    </div>
                </div>
                {/* middle part */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800"></h2>
                    <div className="flex gap-4 flex-wrap">
                        <h4 className="flex gap-1 items-center text-gray-500"><PiSuitcaseSimpleLight></PiSuitcaseSimpleLight> {jobType}</h4>
                        <h4 className="flex gap-1 text-gray-500 items-center"><IoIosTimer size={20}></IoIosTimer> {applicationDeadline}</h4>
                    </div>
                </div>
                <p className="text-gray-500 mb-6 font-normal w-11/12 text-base/normal">{description}</p>
                <div className="flex gap-2 items-center flex-wrap">
                    {
                        requirements.map((req, ind) => <span key={ind} className="px-3 py-1 text-sm font-normal text-gray-600 hover:text-blue-400 bg-blue-100 rounded-md">{req}</span>)
                    }
                </div>
                     <h2 className="font-semibold text-xl text-gray-700">Salary : <span className="text-blue-500 text-lg">{salaryRange.min} - {salaryRange.max}</span> /{salaryRange.currency}</h2>   
                <div className="w-full mt-auto">
                     <Link to={`/jobDetails/${_id}`} className="w-full btn bg-blue-100 hover:bg-blue-600 hover:text-base-200 py-6 text-blue-600 text-base">Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;