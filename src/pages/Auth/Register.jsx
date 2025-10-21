import Lottie from "lottie-react";
import registerAnimation from "../../../public/register.json"
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import SocialUser from "./Social/SocialUser";
import toast from "react-hot-toast";
const Register = () => {
    const { registerUser } = useAuth()
     const navigate = useNavigate()
    const handleRegister =e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        registerUser(email, password)
        .then(result =>{
          console.log(result);
          navigate('/')
          toast.success("Your Account Created successfully in CareerLink")
        })
        .catch(error => {
          console.log(error);
          toast.error("Something wrong please try again!")
        })
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col xl:flex-row-reverse w-full justify-around gap-10">
          <div className="text-center lg:text-left">
           <Lottie animationData={registerAnimation}  className="md:w-96"></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl border border-gray-200">
            <div className="card-body py-10 ">
              <h1 className="text-2xl md:text-4xl text-center mb-3 font-bold">
                Create Your <span className="text-primary">Account</span>
              </h1>
              <p className="text-center text-base mb-7 font-medium">Already have an Account ? Please <Link to={'/login'} className="text-lg text-primary font-bold">Login</Link></p>
              <form onSubmit={handleRegister} className="fieldset space-y-3">
                {/* name */}
                <fieldset className="space-y-1.5">
                  <label className="label text-base font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full py-5 md:py-7 text-base md:text-lg"
                    placeholder="Your name"
                  />
                </fieldset>
                {/* email */}
                <fieldset className="space-y-1.5">
                  <label className="label text-base font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full py-5 md:py-7 text-base md:text-lg"
                    placeholder="Your Email"
                  />
                </fieldset>
                {/* password */}
                <fieldset className="space-y-1.5">
                  <label className="label text-base font-medium">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input w-full py-5 md:py-7 text-base md:text-lg"
                    placeholder="Your Password"
                  />
                </fieldset>
                <button className="btn bg-black/90 text-white mt-4 py-6 text-base md:text-lg rounded-full">
                  Register
                </button>
                <SocialUser></SocialUser>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
