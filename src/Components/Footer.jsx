import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <div className="flex items-center gap-1 logo">
          <img src="/public/logo.png" className="w-12 h-12" alt="" />
          <Link to={'/'} className="font-bold text-2xl md:text-4xl">CareerLink</Link>
        </div>
  </aside>
  <nav>
    <h6 className="footer-title">Pages</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Companies</a>
    <a className="link link-hover">Job Category</a>
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