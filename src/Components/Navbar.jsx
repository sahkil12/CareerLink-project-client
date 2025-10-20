import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={"md:text-lg font-medium"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/jobs"} className={"md:text-lg font-medium"}>
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to={"/myApplications"} className={"md:text-lg font-medium"}>
          My Application
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addJobs"} className={"md:text-lg font-medium"}>
          Add Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to={"/myPostedJobs"} className={"md:text-lg font-medium"}>
          My Posted Jobs
        </NavLink>
      </li>
    </>
  );
  const { user, logoutUser } = useAuth();
  const handleLogout =()=>{
    logoutUser()
    .then(()=>{
      console.log('logout successful');
    })
    .catch(error=>{
      console.log(error);
    })  
  }
  return (
    <div className="navbar bg-blue-50 py-5 px-1 md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-md dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-3 shadow space-y-2 nav-style"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1 logo">
          <img src="/logo.png" className="w-12 h-12" alt="" />
          <Link to={'/'} className="font-bold text-2xl md:text-4xl">CareerLink</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-9 nav-style">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
              <div className="dropdown  dropdown-end">
                <div
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-14 rounded-full ring ring-primary/40 ring-offset-2">
                    <img
                    className="rounded-full w-10 h-10"
                      alt="User"
                      src={user?.photoURL || '/user.png' }
                    />
                  </div>
                </div>
                <ul
                  className="menu menu-md dropdown-content bg-white border border-slate-200 rounded-box z-10 mt-3 flex flex-col gap-3 justify-center items-center w-72 md:w-80 shadow-lg py-6 sm:py-10 p-5"
                >
                  <li className="w-full items-center">
                    <img
                    className="rounded-full w-24  md:w-32 "
                      alt="User"
                      src={user?.photoURL || '/user.png' }
                    />
                    <span className="pop text-lg font-semibold text-secondary">{user.displayName}</span>
                    <span className="text-base md:text-lg font-semibold">{user?.email}</span>
                  </li>
                  <div className="border border-primary/60 w-full"></div>
                  <li className="w-full items-center">
                    <button onClick={handleLogout} className="btn py-6 w-full text-base bg-primary/90 text-white">Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
              <NavLink
                to={"/login"}
                className="btn btn-md font-medium sm:font-bold btn-primary px-6 text-base"
              >
                Login
              </NavLink>
              </>
            )}
      </div>
    </div>
  );
};

export default Navbar;
