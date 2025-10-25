import { Link } from "react-router";

const MillionsJobs = () => {
    return (
        <div className="py-20">
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row  justify-between  gap-4 xl:gap-8">
                <div className="flex-1 lg:p-8 justify-center">
                        <img src="/moment.jpg" alt="" className="rounded-3xl w-full md:w-11/12 mx-auto h-full  object-cover"/>
                </div>
                <div className="flex-1 gap-5 py-4 flex flex-col w-full sm:w-10/12 mx-auto justify-center">
                        <h3 className="text-3xl font-bold text-gray-400">Millions Of Jobs.</h3>
                        <h2 className="text-5xl/snug md:text-6xl/normal w-11/12 lg:w-4/5 font-bold text-gray-800">Find The One That’s <span className="text-primary/90">Right</span> For You</h2>
                        <p className="text-base/normal md:text-lg/relaxed w-10/12 font-medium ">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 6,000 companies worldwide. The right job is out there.</p>
                        <div className="flex gap-6 items-center">
                            <Link to={'/jobs'} className="px-7 py-3 text-lg rounded-lg bg-primary/90 text-white font-semibold">Browse Jobs</Link>
                            <a href="#" className="underline text-lg">Learn More</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MillionsJobs;