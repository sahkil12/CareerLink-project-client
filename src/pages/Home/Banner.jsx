import { motion } from "motion/react"
import team1 from "../../../public/asset/team/team1.jpg"
import team2 from "../../../public/asset/team/team2.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 my-10 py-10 h-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="flex-1">
             <img
            src={team1}
            className="max-w-md rounded-t-3xl  shadow-2xl"
          />
             <img
            src={team2}
            className="max-w-md rounded-lg shadow-2xl"
          />
         </div>
          <div className="flex-1">
            <motion.h1
            initial={{}} 
            animate={{
                transition:{duration:2}
            }}
            transition={{duration: 2}}
            className="text-3xl/normal md:text-5xl/normal font-bold md:w-10/12">
              The <motion.span animate={{
                color: ['#0EC280','#9C27F5'],
                transition:{duration: 5, repeat: Infinity}
              }}>Easiest Way</motion.span> to Get Your New Job
            </motion.h1>
            <p className="py-6 md:w-11/12 text-base/relaxed">
             Each month, more than 300k job seekers turn to website in their search for work, making over 1400 applications every single day
            </p>
            <button className="btn btn-primary">Find Your Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
