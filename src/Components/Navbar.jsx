import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={"text-lg font-medium"}>
          Home
        </NavLink>
      </li>
    </>
  );
  const { user, logoutUser } = useAuth();
  console.log(user);
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
    <div className="navbar bg-base-100 shadow-sm py-5">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CareerLink</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
              <div className="dropdown  dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
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
                  tabIndex={-1}
                  className="menu menu-md dropdown-content bg-white border border-slate-200 rounded-box z-10 mt-3 flex flex-col gap-3 justify-center items-center w-72 md:w-96 shadow-lg py-6 sm:py-10 p-5"
                >
                  <li className="w-full items-center ">
                    <img
                    className="rounded-full w-24 h-24 mb-2"
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
                className="btn btn-sm font-medium sm:font-bold btn-primary sm:btn-md sm:px-7 text-base"
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className="btn btn-sm font-medium sm:font-bold btn-primary sm:btn-md sm:px-7 text-base"
              >
                Register
              </NavLink>
              </>
            )}
      </div>
    </div>
  );
};

export default Navbar;
