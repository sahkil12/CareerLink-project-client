import { Suspense } from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import HotJobs from "./HotJobs";
import MillionsJobs from "./MillionsJobs";

const Home = () => {
    const jobsPromise = fetch('https://career-link-project-server.vercel.app/featuredJob').then(res =>res.json())
    return (
        <div className="md:w-11/12 mx-auto py-10">
            <Banner></Banner>
            <Categories></Categories>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
            <MillionsJobs></MillionsJobs>
        </div>
    );
};

export default Home;