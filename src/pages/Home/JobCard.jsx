import { CiLocationOn } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const JobCard = ({job}) => {
    console.log(job);
    const {company_logo, company, location, applicationDeadline, jobType, description, requirements, salaryRange} =job
    return (
        <div className="p-6 border border-neutral-200 rounded-lg flex flex-col h-full">
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
                <p className="text-gray-500 font-normal w-11/12 text-base/normal">{description}</p>
                <div className="flex gap-2 items-center flex-wrap">
                    {
                        requirements.map((req, ind) => <span key={ind} className="px-3 py-1 text-sm font-normal text-gray-600 hover:text-blue-400 bg-blue-100 rounded-md">{req}</span>)
                    }
                </div>
                     <h2 className="font-semibold text-xl text-gray-700">Salary : <span className="text-blue-500 text-lg">{salaryRange.min} - {salaryRange.max}</span> /{salaryRange.currency}</h2>   
                <div className="w-full mt-auto">
                     <button className="w-full btn bg-blue-100 hover:bg-blue-500 hover:text-black py-6 text-blue-600 text-base">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;