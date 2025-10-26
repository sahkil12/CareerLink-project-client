import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';

const Footer = () => {
  
  const { user } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to={"/"} className={""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/jobs"} className={""}>
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to={"/myApplications"} className={""}>
          My Application
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addJobs"} className={""}>
          Add Jobs
        </NavLink>
      </li>
    {
      user && <li>
        <NavLink to={"/myPostedJobs"} className={""}>
          My Posted Jobs
        </NavLink>
      </li>
    }
    </>
  );
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <div className="flex items-center gap-1 logo">
          <img src="/logo.png" className="w-12 h-12" alt="" />
          <Link to={'/'} className="font-bold text-2xl md:text-4xl">CareerLink</Link>
        </div>
  </aside>
  <nav>
    <h6 className="footer-title">Pages</h6>
   <ul className='space-y-2'>
    {links}
   </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;