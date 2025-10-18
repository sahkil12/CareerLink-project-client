import Lottie from "lottie-react";
import loginAnimation from "../../../public/asset/lottiee/Login.json"
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialUser from "./Social/SocialUser";

const Login = () => {
    const { loginUser } = useAuth()
    const handleLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result =>{
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })  
    }
    return (
         <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around gap-10">
          <div className="text-center lg:text-left">
           <Lottie animationData={loginAnimation}  className="md:w-96"></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl border border-gray-200">
            <div className="card-body py-10 ">
              <h1 className="text-4xl text-center mb-3 font-bold">
               Login To Your<span className="text-primary"> Account</span>
              </h1>
               <p className="text-center text-base mb-7 font-medium">Don't have an Account ? Please <Link to={'/register'} className="text-lg text-primary font-bold">Register</Link></p>
              <form onSubmit={handleLogin} className="fieldset space-y-3">
                <fieldset className="space-y-1.5">
                  <label className="label text-base font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full py-7 text-lg"
                    placeholder="Your Email"
                  />
                </fieldset>
                <fieldset className="space-y-1.5">
                  <label className="label text-base font-medium">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input w-full py-7 text-lg"
                    placeholder="Your Password"
                  />
                </fieldset>

                <button className="btn btn-neutral mt-4 py-6 text-lg">
                  Login
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

export default Login;