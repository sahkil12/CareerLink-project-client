import { motion } from "motion/react";
// import team1 from "../../../public/asset/team/team1.jpg";
// import team2 from "../../../public/asset/team/team2.jpg";
import { IoMdSearch } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div>
      <div className="hero mb-14 py-14 ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-5">
          <div className="flex-1 space-y-4">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={'/team1.jpg'}
              className="w-96 sm:w-full sm:max-w-md rounded-t-[38px] rounded-br-[38px] border-s-8 border-b-8 border-blue-700 shadow-2xl"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{duration: 10, repeat: Infinity, delay: 2 }}
              src={'/team2.jpg'}
              className="hidden sm:flex w-80 sm:w-full sm:max-w-md rounded-lg rounded-t-[38px] rounded-br-[38px] border-s-8 border-b-8 border-blue-700 shadow-2xl"
            />
          </div>
          <motion.div 
          initial="hidden"
          animate="show"
          transition={{duration:1}}
          className="flex-1">
            <motion.h1
              animate={{
                x: [-30, 0],
              }}
              transition={{ duration: 3 }}
              className="text-4xl/normal md:text-5xl/normal font-bold "
            >
              The{" "}
              <motion.span
                animate={{
                  color: ["#0EC280", "#9C27F5", "#F57327"],
                  transition: { duration: 5, repeat: Infinity },
                }}
              >
                <Typewriter
                words={['Easiest Way', 'Fastest Way', 'Trusted Way', 'Smartest Way']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={85}
                deleteSpeed={85}
                delaySpeed={2000}
                ></Typewriter>
              </motion.span>{" "}
              <br /> to Get Your New Job
            </motion.h1>
            <p className="py-6 sm:w-10/12 text-base/relaxed font-medium opacity-85">
              Each month, more than 300k job seekers turn to website in their
              search for work, making over 1400 applications every single day
            </p>
            {/* <button className="btn btn-primary">Find Your Job</button> */}
            <label className="input border w-11/12 input-xl focus:outline-none focus:border-none">
              <input type="text" className="text-base " placeholder="Find Your Job Here" />
              <span className="btn btn-primary text-base "><IoMdSearch size={18}/> 
              Search</span>
            </label>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
